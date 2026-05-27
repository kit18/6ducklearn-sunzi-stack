import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const expectedSkills = [
  'strategic-situation-analysis',
  'strategy-analyst-review',
  'sunzi-strategy-consultant',
];

const expectedReferences = [
  'references/decision-memo-template.md',
  'references/business-war-room-template.md',
  'references/ethical-strategy-guardrails.md',
  'references/sunzi-business-consultant-soul.md',
  'skills/strategic-situation-analysis/references/thirty-six-stratagems-source-stories.md',
];

const stratagemNames = [
  '瞞天過海',
  '圍魏救趙',
  '借刀殺人',
  '以逸待勞',
  '趁火打劫',
  '聲東擊西',
  '無中生有',
  '暗渡陳倉',
  '隔岸觀火',
  '笑裏藏刀',
  '李代桃僵',
  '順手牽羊',
  '打草驚蛇',
  '借屍還魂',
  '調虎離山',
  '欲擒故縱',
  '拋磚引玉',
  '擒賊擒王',
  '釜底抽薪',
  '混水摸魚',
  '金蟬脫殼',
  '關門捉賊',
  '遠交近攻',
  '假道伐虢',
  '偷樑換柱',
  '指桑罵槐',
  '假癡不癲',
  '上屋抽梯',
  '樹上開花',
  '反客為主',
  '美人計',
  '空城計',
  '反間計',
  '苦肉計',
  '連環計',
  '走為上計',
];

const leakagePatterns = [
  /\/Users\/kit18/i,
  /service[_-]?role/i,
  /token_hash/i,
  /supabase\/functions/i,
  /VITE_SUPABASE/i,
  /DATABASE_URL/i,
  /OPENAI_API_KEY/i,
  /ANTHROPIC_API_KEY/i,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
];

function fail(message) {
  console.error(`validate-stack: ${message}`);
  process.exitCode = 1;
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      continue;
    }
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(absolute, files);
    } else {
      files.push(absolute);
    }
  }
  return files;
}

function parseFrontmatter(content, relativePath) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(`${relativePath} is missing YAML frontmatter`);
    return {};
  }

  const fields = {};
  for (const line of match[1].split('\n')) {
    const fieldMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (fieldMatch) {
      fields[fieldMatch[1]] = fieldMatch[2].trim();
    }
  }
  return fields;
}

function validateSkills() {
  for (const skillName of expectedSkills) {
    const relativePath = `skills/${skillName}/SKILL.md`;
    if (!fileExists(relativePath)) {
      fail(`missing ${relativePath}`);
      continue;
    }

    const content = read(relativePath);
    const frontmatter = parseFrontmatter(content, relativePath);
    if (frontmatter.name !== skillName) {
      fail(`${relativePath} frontmatter name must be ${skillName}`);
    }
    if (!frontmatter.description || frontmatter.description.length < 80) {
      fail(`${relativePath} needs a useful trigger description`);
    }

    for (const match of content.matchAll(/\]\((\.{1,2}\/[^)]+)\)/g)) {
      const target = path.normalize(path.join(path.dirname(path.join(root, relativePath)), match[1]));
      if (!target.startsWith(root) || !fs.existsSync(target)) {
        fail(`${relativePath} references missing local file ${match[1]}`);
      }
    }
  }
}

function validateReferences() {
  for (const relativePath of expectedReferences) {
    if (!fileExists(relativePath)) {
      fail(`missing ${relativePath}`);
    }
  }

  const sourceRef = read('skills/strategic-situation-analysis/references/thirty-six-stratagems-source-stories.md');
  if (!sourceRef.includes('Wikisource')) {
    fail('source-story reference must cite Wikisource');
  }

  for (const stratagemName of stratagemNames) {
    const matches = sourceRef.match(new RegExp(stratagemName, 'g')) ?? [];
    if (matches.length !== 1) {
      fail(`${stratagemName} must appear exactly once in source-story reference; found ${matches.length}`);
    }
  }
}

function validateLicenses() {
  for (const relativePath of ['LICENSE', 'LICENSE-CONTENT', 'NOTICE', 'SECURITY.md', 'TRADEMARK.md']) {
    if (!fileExists(relativePath)) {
      fail(`missing ${relativePath}`);
    }
  }

  if (!read('LICENSE').includes('Apache License')) {
    fail('LICENSE must contain Apache-2.0 text for scripts');
  }
  if (!read('LICENSE-CONTENT').includes('Creative Commons Attribution 4.0')) {
    fail('LICENSE-CONTENT must describe CC BY 4.0 content terms');
  }
}

function validateLeakage() {
  for (const absolutePath of walk(root)) {
    const relativePath = path.relative(root, absolutePath);
    if (relativePath === 'scripts/validate-stack.mjs') {
      continue;
    }
    const content = fs.readFileSync(absolutePath, 'utf8');
    for (const pattern of leakagePatterns) {
      if (pattern.test(content)) {
        fail(`${relativePath} matches private/leakage pattern ${pattern}`);
      }
    }
  }
}

validateSkills();
validateReferences();
validateLicenses();
validateLeakage();

if (!process.exitCode) {
  console.log('Sunzi strategy stack validation passed.');
}
