window.TOLL = {
  asOf: "2026-11-01",
  meta: {
    asOf: "2026-11-01",
    disclaimer: "Linkage is not proven sole causation. Category spines (NHTSA SGO vehicles, compiled chatbot research) set the subcounters. Named cards are evidence, not extra additions on top of those spines. 737 MAX / MCAS is tracked but excluded from the headline unless the visitor toggles it on. Floor = smallest sourced total we can defend today."
  },
  headline: {
    linkedHigh: 217
  },
  overall: {
    war: 5,
    civil: 128,
    floor: 133
  },
  divisions: [
    {
      id: "military",
      short: "MILITARY",
      label: "Terrorism/War/Genocide",
      count: 5,
      color: "#d94c7a",
      subs: [
        { id: "autonomous", short: "FULLY AUTONOMOUS", count: 5, tone: "Closed-loop only: NYT-documented July 2026 Kharkiv AI-guided strike (3 civilians) plus New Scientist account of a Ukrainian autonomous-drone test that killed soldiers (~2). No human in the terminal loop." },
        { id: "approver", short: "MAN AS FINAL TRIGGER/APPROVER", count: 0, tone: "Lavender / Gospel / Where\u2019s Daddy? documented as human-signed targeting aids. No defendable named-death census added. 37,000 flagged is not 37,000 counted dead." },
        { id: "loop", short: "MAN IN THE LOOP", count: 0, tone: "Remote-piloted or supervised systems. Wider remotely piloted drone war is not counted here." }
      ]
    },
    {
      id: "civil",
      short: "NON-MILITARY",
      label: "Civil",
      count: 128,
      color: "#5b8def",
      subs: [
        { id: "autonomous", short: "FULLY AUTONOMOUS", count: 17, tone: "Industrial robots that completed the contact once powered (KOSHA spine of 10, 2020\u2013Aug 2024, plus seven separately sourced robot-arm fatalities)." },
        { id: "approver", short: "MAN AS FINAL TRIGGER/APPROVER", count: 0, tone: "Clinical algorithms where a human approved an AI recommendation. Emerging category; no counted deaths yet." },
        { id: "loop", short: "MAN IN THE LOOP", count: 111, tone: "ADAS/AV with a supervising driver (NHTSA SGO 71 + 1 pending inclusion) plus chatbot/LLM interactions where a human acted after AI output (aimortality.org compiled 37 + 2 named outside-spine cases)." }
      ]
    }
  ],
  categories: [
    { id: "vehicles", short: "VEHICLES", count: 72, color: "#ff6b4a", tone: "NHTSA Standing General Order ADS/ADAS fatal reports, compiled via AutoPilotWatch (71) plus 1 named case not yet in the public compile (lag 1-2 months). System engaged \u226430s of impact is not a fault finding.", split: "70 ADAS \u00b7 2 ADS", division: "civil", autonomy: "loop" },
    { id: "chatbots", short: "CHATBOTS", count: 39, color: "#c9a227", tone: "aimortality.org compiled floor of 37 (18 users + 19 third parties, Mar 2023\u2013Oct 2026, archived 15 Oct) plus 2 named cases outside that spine (Mathias Habib Apr 2026; Bowen Wan Feb 2026 / lawsuit Oct 2026). Alleged contribution, not sole cause.", division: "civil", autonomy: "loop" },
    { id: "robots", short: "ROBOTS", count: 17, color: "#5b8def", tone: "KOSHA industrial-robot spine (10, 2020\u2013Aug 2024) plus seven separately sourced robot-arm fatalities not inside that Korean aggregate (Jinju 2025, two US OSHA cases, Ottogi SF Goseong Sep 2026, Hamamatsu Japan Jan 2026, Bremen DE Oct 2026, Guangzhou Baiyun Jun 2026).", division: "civil", autonomy: "autonomous" },
    { id: "military", short: "AUTO-WEAPONS", count: 5, color: "#d94c7a", tone: "Closed-loop only: NYT-documented July 2026 Kharkiv AI-guided strike (3 civilians) plus New Scientist account of a Ukrainian autonomous-drone test that killed soldiers (~2). No human in the terminal loop.", division: "military", autonomy: "autonomous" },
    { id: "hitl", short: "HITL TARGETS", count: 0, color: "#9b7ed9", emerging: true, tone: "Lavender / Gospel / Where\u2019s Daddy? are documented as human-signed targeting aids. No defendable named-death census is added to the floor. 37,000 flagged is not 37,000 counted dead.", division: "military", autonomy: "approver" },
    { id: "medical", short: "MEDICAL", count: 0, color: "#3db8a0", emerging: true, tone: "Clinical-algorithm and chatbot-as-clinician harm is tracked as evidence. Survived cases and chatbot-spine deaths are not double-counted here.", division: "civil", autonomy: "approver" },
    { id: "aviation", short: "AVIATION", count: 346, color: "#8a8a8a", tone: "737 MAX / MCAS flight-control automation. Tracked, excluded from headline unless toggled.", division: "civil", autonomy: "autonomous" }
  ],
  supportingStats: [
    { stat: "71", label: "NHTSA SGO fatal AV/ADAS incidents (AutoPilotWatch compile; +1 pending)", source: "AutoPilotWatch / NHTSA SGO", url: "https://www.autopilotwatch.com/fatalities" },
    { stat: "57", label: "of those 71 involved Tesla ADAS/ADS reports (80.3%)", source: "AutoPilotWatch", url: "https://www.autopilotwatch.com/fatalities" },
    { stat: "37", label: "chatbot-linked fatalities in aimortality.org (archived 15 Oct 2026)", source: "aimortality.org", url: "https://aimortality.org/" },
    { stat: "10", label: "KOSHA industrial-robot deaths, 2020\u2013Aug 2024 (Korea)", source: "KOSHA / Chosun Biz", url: "https://biz.chosun.com/en/en-society/2025/01/18/GGRRWIDRJ5BBPJNM5CPNF5JHMQ/" },
    { stat: "37,000", label: "Lavender peak list of flagged persons \u2014 not a death count", source: "+972 Magazine", url: "https://www.972mag.com/lavender-ai-israeli-army-gaza/" }
  ],
  cases: [
    {
      date: "2026-10-22",
      category: "vehicles",
      fatalities: 1,
      title: "Vallejo I-80 Tesla FSD pedestrian strike \u2014 Domingo Gonzales, 71 (outside NHTSA spine)",
      location: "Vallejo, California, USA",
      status: "INVESTIGATION",
      grade: "B",
      summary: "CHP: 71-year-old Domingo Gonzales of Vallejo struck and killed ~2:34 a.m. on westbound I-80 at the I-780 interchange while crossing from the right shoulder toward the center divider. 26-year-old San Francisco Tesla driver stated the vehicle was in Full Self-Driving mode, remained at the scene, and provided dashcam. Footage showed the car at ~70 mph braking and steering left; right-front portion struck the pedestrian. At least one subsequent vehicle also struck him; that driver did not stop. Not yet in AutoPilotWatch/NHTSA SGO public compile of 71 (typical 1-2 month lag). Added outside the spine; linkage alleged via driver statement and dashcam review, not proven sole causation.",
      sources: [
        { name: "KRON4 / CHP", url: "https://www.kron4.com/news/bay-area/vallejo-man-dies-on-i-80-after-struck-by-self-driving-tesla-chp-says/" },
        { name: "Los Angeles Times", url: "https://www.latimes.com/california/story/2026-10-22/self-driving-tesla-hits-kills-71-year-old-california-pedestrian/" },
        { name: "SF Chronicle", url: "https://www.sfchronicle.com/bayarea/article/self-driving-tesla-fatally-strikes-man-on-highway-22489051.php" },
        { name: "The Verge", url: "https://www.theverge.com/transportation/1016928/tesla-fsd-pedestrian-fatal-accident-california" }
      ],
      division: "civil",
      autonomy: "loop"
    },
    {
      date: "2026-09-27",
      category: "vehicles",
      fatalities: 71,
      title: "NHTSA SGO vehicle spine (ADAS + ADS)",
      location: "United States (25 states in AutoPilotWatch compile)",
      status: "SPINE",
      grade: "A",
      summary: "Mandatory manufacturer reports under Standing General Order 2021-01. AutoPilotWatch\u2019s public compile lists 71 fatal incidents: 69 Level-2 ADAS, 2 ADS. Engagement \u2264 30 seconds of impact is a reporting trigger, not a causation verdict. Tesla is 57 of 71. Named Tesla cards below that pre-date the latest compile sit inside this spine and are not added again. Newer cases (e.g. Vallejo 22 Oct) are tracked separately until they appear in the public SGO compile.",
      sources: [
        { name: "AutoPilotWatch fatalities", url: "https://www.autopilotwatch.com/fatalities" },
        { name: "NHTSA Standing General Order", url: "https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting" }
      ],
      division: "civil",
      autonomy: "loop"
    }
  ]
};