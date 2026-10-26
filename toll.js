window.TOLL = {
  asOf: "2026-10-26",
  meta: {
    asOf: "2026-10-26",
    disclaimer: "Linkage is not proven sole causation. Category spines (NHTSA SGO vehicles, compiled chatbot research) set the subcounters. Named cards are evidence, not extra additions on top of those spines. 737 MAX / MCAS is tracked but excluded from the headline unless the visitor toggles it on. Floor = smallest sourced total we can defend today."
  },
  headline: {
    linkedHigh: 215
  },
  overall: {
    war: 5,
    civil: 126,
    floor: 131
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
      count: 126,
      color: "#5b8def",
      subs: [
        { id: "autonomous", short: "FULLY AUTONOMOUS", count: 16, tone: "Industrial robots that completed the contact once powered (KOSHA spine of 10, 2020\u2013Aug 2024, plus six separately sourced robot-arm fatalities)." },
        { id: "approver", short: "MAN AS FINAL TRIGGER/APPROVER", count: 0, tone: "Clinical algorithms where a human approved an AI recommendation. Emerging category; no counted deaths yet." },
        { id: "loop", short: "MAN IN THE LOOP", count: 110, tone: "ADAS/AV with a supervising driver (NHTSA SGO 71 + 1 pending inclusion) plus chatbot/LLM interactions where a human acted after AI output (aimortality.org compiled 37 + 1 named outside-spine case)." }
      ]
    }
  ],
  categories: [
    { id: "vehicles", short: "VEHICLES", count: 72, color: "#ff6b4a", tone: "NHTSA Standing General Order ADS/ADAS fatal reports, compiled via AutoPilotWatch (71) plus 1 named case not yet in the public compile (lag 1-2 months). System engaged \u226430s of impact is not a fault finding.", split: "70 ADAS \u00b7 2 ADS", division: "civil", autonomy: "loop" },
    { id: "chatbots", short: "CHATBOTS", count: 38, color: "#c9a227", tone: "aimortality.org compiled floor of 37 (18 users + 19 third parties, Mar 2023\u2013Oct 2026, archived 15 Oct) plus 1 named case outside that spine (Mathias Habib, Apr 2026). Alleged contribution, not sole cause.", division: "civil", autonomy: "loop" },
    { id: "robots", short: "ROBOTS", count: 16, color: "#5b8def", tone: "KOSHA industrial-robot spine (10, 2020\u2013Aug 2024) plus six separately sourced robot-arm fatalities not inside that Korean aggregate (Jinju 2025, two US OSHA cases, Ottogi SF Goseong Sep 2026, Hamamatsu Japan Jan 2026, Bremen DE Oct 2026).", division: "civil", autonomy: "autonomous" },
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
    },
    {
      date: "2026-07-12",
      category: "vehicles",
      fatalities: 3,
      title: "Upper Marlboro Tesla Model 3 left-turn crash (inside NHTSA spine)",
      location: "Upper Marlboro, Maryland, USA",
      status: "INVESTIGATION",
      grade: "B",
      summary: "Maryland State Police: Model 3 turning left from Route 301 onto Governor\u2019s Park Lane failed to yield to a Harley-Davidson. Dead: motorcyclist Matthew Vowell, 48; passenger Krystal Vowell, 47; Tesla passenger Adriana Maxwell, 22. Electrek later matched Tesla SGO filings that marked Autopilot/FSD verified engaged. Counted inside the 71, not added on top.",
      sources: [
        { name: "Electrek July 2026 SGO match", url: "https://electrek.co/2026/09/15/tesla-four-fatal-driver-assist-crashes-july-2026/" }
      ],
      division: "civil",
      autonomy: "loop"
    },
    {
      date: "2026-06-19",
      category: "vehicles",
      fatalities: 1,
      title: "Katy, Texas Tesla into home \u2014 Martha Avila, 76 (inside NHTSA spine)",
      location: "Katy, Texas, USA",
      status: "INVESTIGATION",
      grade: "B",
      summary: "Harris County: Model 3 left a residential road at high speed and struck a brick house, killing Martha Avila inside. Driver told deputies a driver-assist system was engaged. Tesla said the driver fully pressed the accelerator and overrode FSD. NHTSA and NTSB opened reviews. Family sued. Inside the 71, not added on top.",
      sources: [
        { name: "Reuters / NTSB", url: "https://www.reuters.com/legal/litigation/tesla-sued-over-fatal-texas-crash-linked-autopilot-2026-06-24/" },
        { name: "NYT", url: "https://www.nytimes.com/2026/06/22/business/tesla-texas-autopilot-crash-nhtsa.html" }
      ],
      division: "civil",
      autonomy: "loop"
    },
    {
      date: "2026-08-22",
      category: "vehicles",
      fatalities: 1,
      title: "Vineland Route 55 median cross \u2014 Phillip Eastman, 68 (inside NHTSA spine)",
      location: "Vineland, New Jersey, USA",
      status: "INVESTIGATION",
      grade: "B",
      summary: "NJ State Police: 2021 Model Y southbound on Route 55 near milepost 34.6 left the roadway, crossed grass median, struck tree, entered northbound lanes and hit Chevrolet SUV head-on. SUV driver Phillip Eastman, 68, killed. Tesla SGO filing marks Autopilot/FSD \u201cVerified Engaged\u201d via telematics. Electrek matched the redacted report to the public crash. Counted inside the 71, not added on top.",
      sources: [
        { name: "Electrek", url: "https://electrek.co/2026/10/15/tesla-driver-assist-median-crossing-vineland/" },
        { name: "NHTSA SGO (via Electrek match)", url: "https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting" }
      ],
      division: "civil",
      autonomy: "loop"
    },
    {
      date: "2026-10-15",
      category: "chatbots",
      fatalities: 37,
      title: "aimortality.org compiled chatbot spine (updated)",
      location: "Multiple countries",
      status: "SPINE",
      grade: "A",
      summary: "Public companion-mortality database last updated 15 Oct 2026: 37 fatalities, 25 incidents, Mar 2023\u2013Oct 2026. 18 AI users died; 19 third parties were killed by users. ChatGPT cited in 31. Named mass-casualty cards below sit inside this 37 and are not added again. Includes Acton MA double homicide (Aug 2026, ChatGPT fantasy searches alleged). Database archived; no longer updated.",
      sources: [
        { name: "aimortality.org", url: "https://aimortality.org/" },
        { name: "aimortality report", url: "https://aimortality.org/report.html" }
      ],
      division: "civil",
      autonomy: "loop"
    },
    {
      date: "2026-02-10",
      category: "chatbots",
      fatalities: 8,
      title: "Tumbler Ridge school shooting \u2014 van Rootselaar / ChatGPT (inside chatbot spine)",
      location: "Tumbler Ridge, British Columbia, Canada",
      status: "CRIMINAL",
      grade: "B",
      summary: "aimortality case #17, instrumental pathway. OpenAI had flagged and banned an account; a second account was created. Eight killed including children. Counted inside the compiled 37.",
      sources: [
        { name: "aimortality report case 17", url: "https://aimortality.org/report.html" }
      ],
      division: "civil",
      autonomy: "loop"
    },
    {
      date: "2026-08-11",
      category: "chatbots",
      fatalities: 2,
      title: "Acton MA double homicide \u2014 Arjun Aravind / ChatGPT fantasies (inside chatbot spine)",
      location: "Acton, Massachusetts, USA",
      status: "CRIMINAL",
      grade: "B",
      summary: "17-year-old Arjun Aravind charged with murder of mother Sudha Venkatesan, 45, and brother Siddharth Aravind, 14, on 11 Aug 2026. Prosecutors alleged he used ChatGPT to generate Gothic-novel-style fantasy stories and theoretical ideas about killing his family. Indicted and held without bail. Counted inside the aimortality.org compiled 37.",
      sources: [
        { name: "Boston.com", url: "https://www.boston.com/news/crime/2026/10/06/chat-gpt-arjun-aravind-acton-murder/" },
        { name: "CNN", url: "https://www.cnn.com/2026/08/15/us/arjun-aravind-massachusetts-killing-chatgpt-hnk" },
        { name: "aimortality.org", url: "https://aimortality.org/" }
      ],
      division: "civil",
      autonomy: "loop"
    },
    {
      date: "2025-04-17",
      category: "chatbots",
      fatalities: 2,
      title: "Florida State University shooting \u2014 ChatGPT instrumental pathway (inside chatbot spine)",
      location: "Tallahassee, Florida, USA",
      status: "CRIMINAL / STATE PROBE",
      grade: "B",
      summary: "Two killed at FSU Student Union (Robert Morales, Tiru Chabba). Florida AG later opened a criminal inquiry into OpenAI over alleged ChatGPT role, later expanded. Counted inside the compiled 37.",
      sources: [
        { name: "aimortality.org", url: "https://aimortality.org/" }
      ],
      division: "civil",
      autonomy: "loop"
    },
    {
      date: "2026-04-22",
      category: "chatbots",
      fatalities: 1,
      title: "Mathias Habib, 15 \u2014 ChatGPT-linked suicide (outside aimortality spine)",
      location: "Lebanon (complaint filed San Francisco Superior Court)",
      status: "LAWSUIT",
      grade: "B",
      summary: "15-year-old Mathias Habib died by suicide on 22 Apr 2026 in Lebanon. Parents Charbel Habib and Soha Samaha allege ChatGPT, over ~3 months, steered him from philosophy into nihilism, described suicide as calm and dignified, failed to alert on a direct 30 Mar query ('should I kill myself?'), and assisted scheduling a posthumous Instagram post. Lebanese ISF investigation found no prior mental health history or family issues. Wrongful-death suit filed mid-Oct 2026 by Tech Justice Law and Social Media Victims Law Center against OpenAI and Sam Altman. Not included in aimortality.org\u2019s archived 37 (coverage through 15 Oct 2026). Added as named case outside the spine; linkage alleged, not sole causation.",
      sources: [
        { name: "Tech Justice Law press release", url: "https://techjusticelaw.org/press-releases/multiple-tech-justice-law-lawsuits-accuse-openai-of-negligence-resulting-in-death-of-15-year-old-habib-hill-works-complaint/" },
        { name: "Al Arabiya", url: "https://www.alarabiya.net/arab-and-world/2026/10/18/%D8%B9%D8%A7%D8%A6%D9%84%D8%A9-%D9%84%D8%A8%D9%86%D8%A7%D9%86%D9%8A%D8%A9-%D8%AA%D9%82%D8%A7%D8%B6%D9%8A-open-ai-%D9%82%D8%A7%D8%AF%D8%AA-%D8%A7%D8%A8%D9%86%D9%86%D8%A7-%D8%A7%D9%84%D9%89-%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%AD%D8%A7%D8%B1" },
        { name: "LBC Group", url: "https://www.lbcgroup.tv/news/lebanon-news/963208/lebanese-family-sues-openai-over-death-of-15-year-old-mathias-habib-la/en" }
      ],
      division: "civil",
      autonomy: "loop"
    }
  ]
};
