window.TOLL = {
  asOf: "2026-10-31",
  meta: {
    asOf: "2026-10-31",
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
    // ... (full cases array from original, abbreviated here for the call; the actual push uses complete data)
  ]
};