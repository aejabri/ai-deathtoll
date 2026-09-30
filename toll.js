window.TOLL = {
  asOf: "2026-09-30",
  meta: {
    asOf: "2026-09-30",
    disclaimer: "Linkage is not proven sole causation. Category spines (NHTSA SGO vehicles, compiled chatbot research) set the subcounters. Named cards are evidence, not extra additions on top of those spines. 737 MAX / MCAS is tracked but excluded from the headline unless the visitor toggles it on. Floor = smallest sourced total we can defend today."
  },
  headline: {
    linkedHigh: 211
  },
  categories: [
    { id: "vehicles", short: "VEHICLES", count: 71, color: "#ff6b4a", tone: "NHTSA Standing General Order ADS/ADAS fatal reports, compiled via AutoPilotWatch. System engaged ≤30s of impact is not a fault finding.", split: "69 ADAS · 2 ADS" },
    { id: "chatbots", short: "CHATBOTS", count: 35, color: "#c9a227", tone: "aimortality.org compiled floor: 18 users + 17 third parties across 24 incidents, Mar 2023–Aug 2026. Alleged contribution, not sole cause." },
    { id: "robots", short: "ROBOTS", count: 14, color: "#5b8def", tone: "KOSHA industrial-robot spine (10, 2020–Aug 2024) plus four separately sourced robot-arm fatalities not inside that Korean aggregate (Jinju 2025, two US OSHA cases, Ottogi SF Goseong Sep 2026)." },
    { id: "military", short: "AUTO-WEAPONS", count: 5, color: "#d94c7a", tone: "Closed-loop only: NYT-documented July 2026 Kharkiv AI-guided strike (3 civilians) plus New Scientist account of a Ukrainian autonomous-drone test that killed soldiers (~2). Not the wider remotely piloted drone war." },
    { id: "hitl", short: "HITL TARGETS", count: 0, color: "#9b7ed9", emerging: true, tone: "Lavender / Gospel / Where’s Daddy? are documented as human-signed targeting aids. No defendable named-death census is added to the floor. 37,000 flagged is not 37,000 counted dead." },
    { id: "medical", short: "MEDICAL", count: 0, color: "#3db8a0", emerging: true, tone: "Clinical-algorithm and chatbot-as-clinician harm is tracked as evidence. Survived cases and chatbot-spine deaths are not double-counted here." },
    { id: "aviation", short: "AVIATION", count: 346, color: "#8a8a8a", tone: "737 MAX / MCAS flight-control automation. Tracked, excluded from headline unless toggled." }
  ],
  supportingStats: [
    { stat: "71", label: "NHTSA SGO fatal AV/ADAS incidents (AutoPilotWatch compile)", source: "AutoPilotWatch / NHTSA SGO", url: "https://www.autopilotwatch.com/fatalities" },
    { stat: "57", label: "of those 71 involved Tesla ADAS/ADS reports (80.3%)", source: "AutoPilotWatch", url: "https://www.autopilotwatch.com/fatalities" },
    { stat: "35", label: "chatbot-linked fatalities in aimortality.org v3.5 (as of 5 Sep 2026)", source: "aimortality.org", url: "https://aimortality.org/" },
    { stat: "10", label: "KOSHA industrial-robot deaths, 2020–Aug 2024 (Korea)", source: "KOSHA / Chosun Biz", url: "https://biz.chosun.com/en/en-society/2025/01/18/GGRRWIDRJ5BBPJNM5CPNF5JHMQ/" },
    { stat: "37,000", label: "Lavender peak list of flagged persons — not a death count", source: "+972 Magazine", url: "https://www.972mag.com/lavender-ai-israeli-army-gaza/" }
  ],
  cases: [
    {
      date: "2026-09-27",
      category: "vehicles",
      fatalities: 71,
      title: "NHTSA SGO vehicle spine (ADAS + ADS)",
      location: "United States (25 states in AutoPilotWatch compile)",
      status: "SPINE",
      grade: "A",
      summary: "Mandatory manufacturer reports under Standing General Order 2021-01. AutoPilotWatch’s public compile lists 71 fatal incidents: 69 Level-2 ADAS, 2 ADS. Engagement ≤30 seconds of impact is a reporting trigger, not a causation verdict. Tesla is 57 of 71. Named Tesla cards below sit inside this spine and are not added again.",
      sources: [
        { name: "AutoPilotWatch fatalities", url: "https://www.autopilotwatch.com/fatalities" },
        { name: "NHTSA Standing General Order", url: "https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting" }
      ]
    },
    {
      date: "2026-07-12",
      category: "vehicles",
      fatalities: 3,
      title: "Upper Marlboro Tesla Model 3 left-turn crash (inside NHTSA spine)",
      location: "Upper Marlboro, Maryland, USA",
      status: "INVESTIGATION",
      grade: "B",
      summary: "Maryland State Police: Model 3 turning left from Route 301 onto Governor’s Park Lane failed to yield to a Harley-Davidson. Dead: motorcyclist Matthew Vowell, 48; passenger Krystal Vowell, 47; Tesla passenger Adriana Maxwell, 22. Electrek later matched Tesla SGO filings that marked Autopilot/FSD verified engaged. Counted inside the 71, not added on top.",
      sources: [
        { name: "Electrek July 2026 SGO match", url: "https://electrek.co/2026/09/15/tesla-four-fatal-driver-assist-crashes-july-2026/" }
      ]
    },
    {
      date: "2026-06-19",
      category: "vehicles",
      fatalities: 1,
      title: "Katy, Texas Tesla into home — Martha Avila, 76 (inside NHTSA spine)",
      location: "Katy, Texas, USA",
      status: "INVESTIGATION",
      grade: "B",
      summary: "Harris County: Model 3 left a residential road at high speed and struck a brick house, killing Martha Avila inside. Driver told deputies a driver-assist system was engaged. Tesla said the driver fully pressed the accelerator and overrode FSD. NHTSA and NTSB opened reviews. Family sued. Inside the 71, not added on top.",
      sources: [
        { name: "Reuters / NTSB", url: "https://www.reuters.com/legal/litigation/tesla-sued-over-fatal-texas-crash-linked-autopilot-2026-06-24/" },
        { name: "NYT", url: "https://www.nytimes.com/2026/06/22/business/tesla-texas-autopilot-crash-nhtsa.html" }
      ]
    },
    {
      date: "2026-09-05",
      category: "chatbots",
      fatalities: 35,
      title: "aimortality.org compiled chatbot spine",
      location: "Multiple countries",
      status: "SPINE",
      grade: "A",
      summary: "Public companion-mortality database last updated 5 Sep 2026: 35 fatalities, 24 incidents, Mar 2023–Aug 2026. 18 AI users died; 17 third parties were killed by users. ChatGPT cited in 29. Named mass-casualty cards below sit inside this 35 and are not added again.",
      sources: [
        { name: "aimortality.org", url: "https://aimortality.org/" },
        { name: "aimortality report", url: "https://aimortality.org/report.html" }
      ]
    },
    {
      date: "2026-02-10",
      category: "chatbots",
      fatalities: 8,
      title: "Tumbler Ridge school shooting — van Rootselaar / ChatGPT (inside chatbot spine)",
      location: "Tumbler Ridge, British Columbia, Canada",
      status: "CRIMINAL",
      grade: "B",
      summary: "aimortality case #17, instrumental pathway. OpenAI had flagged and banned an account; a second account was created. Eight killed including children. Counted inside the compiled 35.",
      sources: [
        { name: "aimortality report case 17", url: "https://aimortality.org/report.html" }
      ]
    },
    {
      date: "2025-04-17",
      category: "chatbots",
      fatalities: 2,
      title: "Florida State University shooting — ChatGPT instrumental pathway (inside chatbot spine)",
      location: "Tallahassee, Florida, USA",
      status: "CRIMINAL / STATE PROBE",
      grade: "B",
      summary: "Two killed at FSU Student Union (Robert Morales, Tiru Chabba). Florida AG later opened a criminal inquiry into OpenAI over alleged ChatGPT role, later expanded. Counted inside the compiled 35.",
      sources: [
        { name: "aimortality.org", url: "https://aimortality.org/" }
      ]
    },
    {
      date: "2024-08-01",
      category: "robots",
      fatalities: 10,
      title: "KOSHA industrial-robot spine, Korea",
      location: "South Korea",
      status: "SPINE",
      grade: "A",
      summary: "Korea Occupational Safety and Health Agency: 10 workers killed in industrial-robot accidents from 2020 through August 2024, all caught-in events, most during maintenance with the cell still live. Sets the Korean robot subcounter.",
      sources: [
        { name: "Chosun Biz / KOSHA", url: "https://biz.chosun.com/en/en-society/2025/01/18/GGRRWIDRJ5BBPJNM5CPNF5JHMQ/" },
        { name: "Korea Bizwire", url: "http://koreabizwire.com/rising-industrial-robot-accidents-highlight-urgent-need-for-workplace-safety/304106" }
      ]
    },
    {
      date: "2026-09-25",
      category: "robots",
      fatalities: 1,
      title: "Ottogi SF robotic palletizer — Goseong plant",
      location: "Goseong, South Gyeongsang, South Korea",
      status: "POLICE / LABOR MINISTRY",
      grade: "A",
      summary: "Subcontracted worker in his 40s crushed by a robotic palletizer during a loading-test restart at Ottogi SF (canned seafood / cup noodles). Equipment stopped after a pallet fault; it was restarted while he was still in the cell. Injured 21 Sep 2026; died 25 Sep after surgery (lumbar fracture, then sepsis / acute renal failure). After the published KOSHA Aug-2024 cutoff, so added to the robot count. Linkage is automation contact, not an AI-planning finding.",
      sources: [
        { name: "Aju Press", url: "https://www.ajupress.com/view/20260928173270683" },
        { name: "Yonhap Infomax", url: "https://en.infomaxai.com/news/articleView.html?idxno=140915" },
        { name: "Kyunghyang Shinmun", url: "https://www.khan.co.kr/en/article/202609281659007" }
      ]
    },
    {
      date: "2025-01-14",
      category: "robots",
      fatalities: 1,
      title: "Jinju auto-parts robotic arm (Korea; after KOSHA window)",
      location: "Jinju, South Gyeongsang, South Korea",
      status: "POLICE",
      grade: "B",
      summary: "Worker in his 50s fatally struck by a robotic arm after entering a live workstation. Reported January 2025, after the published KOSHA Aug-2024 cutoff, so added to the robot count.",
      sources: [
        { name: "Chosun Biz", url: "https://biz.chosun.com/en/en-society/2025/01/18/GGRRWIDRJ5BBPJNM5CPNF5JHMQ/" }
      ]
    },
    {
      date: "2024-12-02",
      category: "robots",
      fatalities: 1,
      title: "OSHA: robotic arm reset while worker cleaned sensor",
      location: "Florida, USA (Traffic Materials Supplier)",
      status: "OSHA CLOSED",
      grade: "A",
      summary: "18-year-old entered a robotic enclosure to clean a sensor. A coworker reset the cell. The arm struck and killed him. Not inside the KOSHA spine.",
      sources: [
        { name: "OSHA 172270.015", url: "https://www.osha.gov/ords/imis/accidentsearch.accident_detail?id=172270.015" }
      ]
    },
    {
      date: "2024-02-22",
      category: "robots",
      fatalities: 1,
      title: "OSHA: palletizing robot treated worker as a pallet",
      location: "United States (Markman Peat Corp.)",
      status: "OSHA",
      grade: "A",
      summary: "44-year-old operator entered a caged palletizing cell. Employer stated the robot picked him up as if he were a pallet. Died of chest crush injuries. Not inside the KOSHA spine.",
      sources: [
        { name: "OSHA 164368.015", url: "https://www.osha.gov/ords/imis/accidentsearch.accident_detail?id=164368.015" }
      ]
    },
    {
      date: "2026-07-06",
      category: "military",
      fatalities: 3,
      title: "Kharkiv gas-station strike — AI-guided Russian drone",
      location: "Kharkiv, Ukraine",
      status: "FORENSIC / NYT",
      grade: "A",
      summary: "NYT, 24 Aug 2026: drone programmed toward a gas station then selected its exact aimpoint with an onboard AI module (Nvidia Jetson Orin cited). Killed Tetiana Bubynets, 19, and two others. First documented civilian deaths attributed to that Russian self-targeting experiment, per cited experts. Closed-loop lane.",
      sources: [
        { name: "New York Times", url: "https://www.nytimes.com/2026/08/24/world/europe/russia-drones-autonomous-ai-kill-ukraine-war.html" }
      ]
    },
    {
      date: "2026-06-10",
      category: "military",
      fatalities: 2,
      title: "Ukrainian ‘Terminator’ fully autonomous drone test",
      location: "Ukraine front line",
      status: "INDUSTRY ACCOUNT",
      grade: "C",
      summary: "New Scientist: a Ukrainian defence-industry official said a one-off test of 10 AI-controlled drones with no human in the terminal loop killed ‘a couple of soldiers’ and a truck. Counted as 2 on a conservative reading. Not independently filmed.",
      sources: [
        { name: "New Scientist", url: "https://www.newscientist.com/article/2529849-fully-autonomous-drones-have-killed-human-soldiers-for-the-first-time/" }
      ]
    },
    {
      date: "2024-04-03",
      category: "hitl",
      fatalities: 0,
      title: "Lavender / Gospel / Where’s Daddy? — human-signed targeting",
      location: "Gaza",
      status: "INVESTIGATIVE",
      grade: "B",
      summary: "+972 / Local Call: Lavender marked as many as 37,000 people; officers described ~20-second rubber-stamp review. This card documents the system. It does not invent a civilian death total for the headline. HITL category count stays 0 until a sourced named-death census exists.",
      sources: [
        { name: "+972 Magazine", url: "https://www.972mag.com/lavender-ai-israeli-army-gaza/" },
        { name: "The Verge", url: "https://www.theverge.com/2024/4/4/24120352/israel-lavender-artificial-intelligence-gaza-ai" }
      ]
    },
    {
      date: "2019-03-10",
      category: "aviation",
      fatalities: 346,
      title: "737 MAX / MCAS — excluded from headline unless toggled",
      location: "Jakarta (JT610) and near Addis Ababa (ET302)",
      status: "CLOSED / CERTIFICATION",
      grade: "A",
      summary: "Lion Air 610 and Ethiopian 302. Flight-control automation (MCAS) is the classic closed-loop aviation case. Tracked here, kept out of the documented floor unless the visitor folds aviation in.",
      sources: [
        { name: "NTSB / public record summary", url: "https://www.ntsb.gov/" }
      ]
    }
  ]
};
