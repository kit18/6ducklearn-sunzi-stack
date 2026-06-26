# Consulting Case Validation Corpus

Use these cases as public behavior tests for the skill and as examples for downstream evaluators.

Source policy: official consulting-company or regulator sources only.

Boundary: validation corpus only. This public pack is not affiliated with, endorsed by, or sponsored by any named consulting firm, client, regulator, author, or publisher.

For each case, the skill should output a first-principles map, 2 to 4 canonical lenses, a strategy move, metrics, and kill criteria.

## Growth and ecommerce

### McKinsey x Karaca AI commerce

- Source: https://www.mckinsey.com/industries/consumer-packaged-goods/how-we-help-clients/a-family-owned-kitchen-and-homeware-company-brings-the-power-of-ai-to-the-dinner-table
- Problem: Karaca had strong physical retail and ecommerce scale, but needed online personalization and broader AI adoption.
- Intervention: Enterprise AI roadmap, AI shopping assistant, A/B testing, guardrails, and AI marketing optimization.
- Result: AIDA launched to 20% of users, doubled conversions versus search, reached 5x conversion versus unaided sessions, reduced chatbot session costs, and nearly doubled digital marketing ROI.
- First-principles variables: shoppers, ecommerce teams, marketing teams, category teams, AI vendors; conversion and service incentives; catalog/data/trust constraints; user intent and campaign data; pilot-before-scale timing; A/B and ROI feedback.
- Canonical lenses: `無中生有`, `順手牽羊`, `借屍還魂`.
- Expected behavior: Given a retailer with strong offline service and weak online conversion, the skill proposes a staged AI assistant or marketing test with guardrails, pilot cohort, conversion metric, cost metric, and scale/no-scale criteria.

### Bain x BuildingSupplyCo customer journey growth

- Source: https://www.bain.com/client-results/a-building-supply-company-reimagines-its-customer-experience-boosting-sales/
- Problem: A building-products distributor needed above-market organic growth after acquisition-led growth, while customers saw little differentiation.
- Intervention: Customer journey redesign, high-potential account targeting, feedback loops, sales playbooks, and rollout sequencing.
- Result: Up to 30% sales uplift in pilot market within six months, on-time delivery improved from 50% to 80%, and revenue increased 30% while maintaining margin.
- First-principles variables: contractors, sales, delivery, account managers; wallet share and job continuity incentives; service reliability and margin constraints; top-account and journey data; pilot then rollout timing; delivery and revenue feedback.
- Canonical lenses: `擒賊擒王`, `圍魏救趙`, `連環計`.
- Expected behavior: Given low differentiation and flat organic growth, the skill prioritizes wallet-share expansion in top accounts, defines service KPIs, designs a pilot, and specifies rollout playbooks.

### Accenture x Prada composable commerce

- Source: https://www.accenture.com/cn-en/case-studies/retail/prada-group-keeps-customer-experience-fashionable
- Problem: Prada's monolithic commerce platform slowed checkout and made new capability launches take too long.
- Intervention: Composable commerce platform, modular vendor stack, inventory visibility, and phased quarterly deployment.
- Result: Checkout became 60% faster, 15% more shoppers completed checkout, cross-channel purchases rose over 50%, online revenue increased 15%, and product updates moved from days to hours.
- First-principles variables: shoppers, ecommerce team, stores, warehouse, vendors; luxury CX and conversion incentives; legacy monolith and rollout constraints; checkout and inventory information; phased deployment timing; completion, revenue, and update-cycle feedback.
- Canonical lenses: `暗渡陳倉`, `偷樑換柱`, `上屋抽梯`.
- Expected behavior: Given slow checkout and year-long release cycles, the skill recommends a phased composable-commerce roadmap with checkout-speed, completion-rate, cross-channel, and revenue tests.

## Operations and supply chain

### McKinsey x Jubilant Ingrevia digital operations

- Source: https://www.mckinsey.com/capabilities/operations/how-we-help-clients/how-a-digital-operational-and-skills-transformation-took-jubilant-ingrevias-business-to-the-next-level
- Problem: Specialty chemicals demand volatility, shrinking volumes, energy intensity, and operational reinvention pressure.
- Intervention: Digital dashboards, IoT sensors, analytics, process optimization, procurement/logistics algorithms, center of excellence, and data-skills training.
- Result: Reported impact included $13.6 million over 36 months, power and natural gas reductions, steam reduction, emissions reduction, liquid-waste reduction, and employee reskilling.
- First-principles variables: plant operators, COO, procurement, logistics, data champions; cost, yield, resilience, and customer trust incentives; volatile market and energy-heavy constraints; process and sensor data; 36-month value horizon; energy, yield, adoption, and throughput feedback.
- Canonical lenses: `釜底抽薪`, `借刀殺人`, `擒賊擒王`, `樹上開花`.
- Expected behavior: Given a multi-plant manufacturer with high energy cost and weak visibility, the skill identifies the highest-leverage process constraint, proposes digital-plus-capability intervention, and defines 12-to-36-month KPIs.

### Deloitte x global biopharma manufacturing data

- Source: https://www.deloitte.com/global/en/industries/life-sciences-health-care/case-studies/optimizing-a-global-biopharmaceutical-organizations-supply-chain.html
- Problem: A global pharmaceutical company lacked manufacturing and supply-chain visibility because data was siloed across ERP, LIMS, quality, reorganizations, and M&A.
- Intervention: Data modernization, use-case prioritization, near-real-time ingestion, manufacturing data lake, cloud architecture, data catalog/governance, and long-term data pods.
- Result: 20+ sites enabled, 150+ data entities across 5 systems integrated, 400+ users enabled, 75% reduction in time to transform data into insights, and 85% reduction in manual extraction/consolidation effort.
- First-principles variables: manufacturing, supply chain, quality, data science, data pods; faster decisions and quality incentives; fragmented regulated systems as constraints; governed ERP/LIMS/QMS data; near-real-time timing; adoption and insight-cycle feedback.
- Canonical lenses: `無中生有`, `反客為主`, `釜底抽薪`, `連環計`.
- Expected behavior: Given fragmented ERP/LIMS/QMS data and slow root-cause analysis, the skill prioritizes use cases, designs an integrated data layer, and quantifies expected reductions in manual effort and decision latency.

### Deloitte x thyssenkrupp AI material-flow planning

- Source: https://www.deloitte.com/global/en/services/consulting/case-studies/making-supply-chains-more-sustainable.html
- Problem: Automotive metal supply chains faced volatile demand, overproduction, excess shipments, inventory cost, and CO2 pressure.
- Intervention: AI-based pacemaker solution using real-time production data, disruption detection, visualization, demand forecasting, and dynamic material-flow adjustment.
- Result: Faster and more accurate production planning, reduced incorrect deliveries, reduced inventory and shipments, up to 15% cost savings, and CO2 reduction claims.
- First-principles variables: thyssenkrupp, automotive OEMs, suppliers, planners; stockout, cost, shipment, and CO2 incentives; volatile demand and multi-tier complexity constraints; OEM forecasts and production data; real-time adjustment timing; forecast, inventory, shipment, and cost feedback.
- Canonical lenses: `趁火打劫`, `借刀殺人`, `以逸待勞`, `調虎離山`.
- Expected behavior: Given volatile forecasts and excess inventory, the skill recommends dynamic planning that reduces overproduction, expedites, and cost without requiring major customer IT changes.

## AI and digital transformation

### McKinsey x Emirates Global Aluminium

- Source: https://www.mckinsey.com/capabilities/tech-and-ai/how-we-help-clients/rewired-in-action/emirates-global-aluminium-leading-the-industry-with-ai-driven-transformation
- Problem: A heavy industrial producer needed enterprise-wide AI and digital transformation across energy-intensive operations.
- Intervention: Digital factory, Industry 4.0 COE, agile governance, digital academy, self-service data platform, hybrid cloud, AI/computer vision, and shop-floor apps.
- Result: 80+ use cases, more than $123 million impact, 3,000+ employees upskilled, storage down 80%, processing speed up 35x, operator reaction time down 92%, SOP compliance up 65%, and inbound logistics delays down 50%.
- First-principles variables: CEO/CDO, plant operators, engineers, procurement/logistics; productivity, safety, throughput, and ROI incentives; physical asset and energy constraints; plant, SOP, and logistics data; quarterly wave timing; financial, safety, and operational feedback.
- Canonical lenses: `借屍還魂`, `聲東擊西`, `以逸待勞`, `連環計`.
- Expected behavior: Given fragmented plant data and skeptical operators, the skill produces a dual-track plan with quick ROI use cases, platform foundations, capability building, and measurable shop-floor feedback metrics.

### McKinsey x Aviva claims AI

- Source: https://www.mckinsey.com/capabilities/tech-and-ai/how-we-help-clients/rewired-in-action/aviva-rewiring-the-insurance-claims-journey-with-AI
- Problem: Claims costs were rising while customer experience, accuracy, and speed mattered in emotionally sensitive moments.
- Intervention: Domain-wide claims redesign, cross-functional team, AI models, digital/human routing, operating model, training, data, and adoption work.
- Result: Complex liability assessment cut by 23 days, routing accuracy up 30%, customer complaints down 65%, NPS up more than 7x, employee engagement more than doubled, and recycled parts use tripled.
- First-principles variables: claims leaders, handlers, customers, data scientists, translators, change teams; cost, accuracy, employee confidence, and customer outcome incentives; distress, fraud, regulatory, and human-judgment constraints; claims and feedback data; claim journey timing; complaints, NPS, routing, and assessment feedback.
- Canonical lenses: `擒賊擒王`, `李代桃僵`, `以逸待勞`, `反客為主`.
- Expected behavior: Given a service operation where automation could harm vulnerable customers, the skill specifies human fallback rules, workflow redesign, translator roles, and metrics proving cost, accuracy, and customer experience improve together.

### Accenture x S&P Global AI-ready workforce

- Source: https://www.accenture.com/us-en/case-studies/learning/sp-global-empowers-talent-builds-ai-ready-workforce
- Problem: S&P Global had proprietary GenAI tools, but enterprise value depended on broad workforce adoption across 40,000 employees.
- Intervention: Spark AI Academy, persona-specific journeys, executive and board sessions, modules, webinars, toolkits, gamified challenges, responsible AI training, community, and leadership sponsorship.
- Result: 100% foundational AI training completion, NPS +52, daily GenAI usage up 400%, platform users grew from 7,200 to 20,000+ in one year, and 8,500+ custom prompts added.
- First-principles variables: CEO, C-suite, board, Chief AI Officer, managers, employees; productivity and responsible adoption incentives; role diversity, resistance, literacy, and governance constraints; usage telemetry and prompt library; enterprise adoption timing; usage, completion, NPS, and prompt feedback.
- Canonical lenses: `上屋抽梯`, `拋磚引玉`, `順手牽羊`, `連環計`.
- Expected behavior: Given GenAI tools but low adoption, the skill segments users by persona, includes leadership signaling, defines responsible-use enablement, and measures behavior change through telemetry rather than attendance alone.

## Macro and public sector

### McKinsey Manufacturing Africa

- Source: https://www.mckinsey.com/industries/public-sector/how-we-help-clients/made-in-africa
- Problem: African economies needed job creation, FDI, and manufacturing-led inclusive growth.
- Intervention: Investment catalysis through deal support, sector studies, financial modeling, business planning, and investment-promotion capacity.
- Result: More than $850 million FDI, 28 deals closed, 16,000+ jobs, and a $2 billion pipeline expected to produce 30,000+ jobs.
- First-principles variables: FCDO, African governments, investors, manufacturers, investment-promotion agencies; returns, jobs, exports, and growth incentives; capital risk and institutional constraints; sector economics and deal diligence; multi-year timing; deal, FDI, job, and pipeline feedback.
- Canonical lenses: `借刀殺人`, `樹上開花`, `遠交近攻`, `拋磚引玉`.
- Expected behavior: Given weak manufacturing FDI, the skill outputs a prioritized sector/deal pipeline with expected FDI, jobs, risk owners, and feedback metrics.

### McKinsey JobsOhio

- Source: https://www.mckinsey.com/about-us/new-at-mckinsey-blog/jobsohio-revitalizes-states-economy-through-innovative-solutions
- Problem: Ohio faced post-recession manufacturing decline and weak target-sector job growth.
- Intervention: State-authorized nonprofit JobsOhio, sector growth plan, innovation districts, and pandemic reskilling support.
- Result: Nearly 1 million jobs created or protected over a decade, target-sector job growth rank improved, $13 billion added payroll, and major capital attraction examples.
- First-principles variables: state, JobsOhio, employers, workers, universities, investors; site, talent, wage, tax-base, and resilience incentives; legacy decline and regional inequality constraints; sector and workforce information; decade-long transformation plus crisis timing; jobs, payroll, capital, and participant feedback.
- Canonical lenses: `暗渡陳倉`, `趁火打劫`, `樹上開花`, `反客為主`.
- Expected behavior: Given a declining industrial state, the skill recommends a governance vehicle, sector bets, workforce financing model, and leading/lagging indicators.

### BCG India Government e-Marketplace

- Source: https://www.bcg.com/publications/2021/public-sector-transformation
- Problem: India's public procurement was slow, fragmented, leaky, and high-stakes.
- Intervention: Government e-Marketplace as a standalone online procurement platform with technology, data, flexible talent, marketing, and simplified procurement.
- Result: Procurement cycle times up to 20x faster, nearly $1 billion saved, and large expected goods spend through the platform.
- First-principles variables: central government, agencies, suppliers, buyers, platform unit, citizens; speed, compliance, access, savings, and transparency incentives; bureaucracy, leakage, procurement rules, and adoption resistance constraints; pricing, supplier, demand, and transaction data; platform-build timing; cycle time, savings, volume, and participation feedback.
- Canonical lenses: `釜底抽薪`, `借屍還魂`, `偷樑換柱`, `反客為主`.
- Expected behavior: Given long procurement cycles and leakage, the skill decides whether to reform legacy workflows or create a platform, then forecasts cycle-time, savings, adoption, and integrity outcomes.

## Trading and market risk

### SEC social-media pump-and-dump

- Source: https://www.sec.gov/newsroom/press-releases/2022-221
- Problem: Influencer-led stock momentum using Twitter and Discord.
- Finding/intervention: SEC alleged defendants promoted stocks with bullish claims and price targets, then sold into the price and volume rise without disclosing their intent.
- Result: SEC alleged about $100 million in fraudulent profits and sought injunctions, disgorgement, penalties, and related relief.
- First-principles variables: influencers, followers, market makers, regulators; audience liquidity and fast-gain incentives; disclosure and virality constraints; asymmetric true positions versus public claims; buy-before-tout and sell-into-attention timing; volume and selling-pressure feedback.
- Canonical lenses: `瞞天過海`, `借刀殺人`, `聲東擊西`.
- Expected behavior: Given influencer posts, trade exposure, follower-volume spikes, and fundamentals, the skill flags manipulative momentum risk when promotion rises while promoter exposure falls and blocks long-entry recommendations without independent catalyst and liquidity evidence.

### CFTC Tower Research spoofing

- Source: https://www.cftc.gov/PressRoom/PressReleases/8074-19
- Problem: False order-book pressure in CME and CBOT equity index futures.
- Finding/intervention: CFTC found traders placed genuine orders on one side and larger visible spoof orders on the other side, intending to cancel spoof orders after fills.
- Result: $67.4 million total relief including restitution, disgorgement, and civil penalty.
- First-principles variables: prop traders, counterparties, exchanges, CFTC/DOJ; fill speed and price incentives; anti-spoofing law and audit-trail constraints; displayed depth versus true intent; spoof-before-fill and cancel-after-fill timing; order reaction feedback.
- Canonical lenses: `暗渡陳倉`, `無中生有`, `欲擒故縱`.
- Expected behavior: Given order-level data with placement, cancel, fill, side, size, and visible-depth impact, the skill labels repeated large opposite-side orders canceled after fills as spoofing-like liquidity illusion and excludes book imbalance as valid momentum evidence.

### PwC Cassa Centrale Banca governed BI

- Source: https://www.pwc.com/it/it/industries/banking-capital-markets/case-study-cassa-centrale-banca.html
- Problem: A cooperative banking group needed faster, governed analytics across many affiliated banks without duplication and operational complexity.
- Intervention: BI operating model with Sandbox/Test/Production separation, Microsoft Power BI/Fabric, automated governance checks, adoption monitoring, refresh tracking, failed-refresh monitoring, and data-access controls.
- Result: Active Power BI users reportedly increased by around 80%, self-service analytics became part of daily decisions, and automated monitoring reduced manual maintenance and operational risk.
- First-principles variables: business users, central IT, affiliated banks, governance and compliance teams; faster decision and control incentives; segregation, scale, and compliance constraints; governed data versus duplicated reports; refresh-before-decision timing; adoption, failed refresh, schedule drift, and usage feedback.
- Canonical lenses: `以逸待勞`, `反客為主`, `釜底抽薪`, `關門捉賊`.
- Expected behavior: Given dashboards with failed refreshes, unknown lineage, or sandbox metrics promoted as production truth, the skill refuses trading-risk conclusions and emits analytics governance remediation before capital-allocation recommendations.
