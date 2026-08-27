export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    ok: true,
    service: "ai-deathtoll",
    checkedAt: new Date().toISOString(),
    note: "Heartbeat only. Update data/toll.json and deploy for new counts."
  });
}
