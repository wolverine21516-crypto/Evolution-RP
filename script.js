// CONFIG — EDIT THESE ONLY
const CONFIG = {
  cfxCode: "kj86d7",
  cityRules: "https://docs.google.com/document/d/1Vu6Mkjfd5blBw91mkonIvegSBG5c7Jv9Mpvemm7fySY/edit?tab=t.0",
  discordInvite: "https://discord.gg/ug8j3GDZ",
  tebex: "https://crackhead.tebex.io/",
  staff: [
    { name: "Jay2k", role: "Owner" },
    { name: "LeleTHEDead", role: "Co-Owner" },
  ]
};

// APPLY LINKS
document.getElementById("cityRules").href = CONFIG.cityRules;
document.getElementById("discordRules").href = CONFIG.discordRules;
document.getElementById("discordInvite").href = CONFIG.discordInvite;
document.getElementById("tebex").href = CONFIG.tebex;
document.getElementById("contestForm").href = CONFIG.contestForm;

// STAFF LIST
const staffDiv = document.getElementById("staffList");
CONFIG.staff.forEach(s => {
  const el = document.createElement("p");
  el.textContent = `${s.name} — ${s.role}`;
  staffDiv.appendChild(el);
});

// SERVER STATUS
async function loadStatus() {
  try {
    const res = await fetch(
      "https://servers-frontend.fivem.net/api/servers/single/" + CONFIG.cfxCode
    );
    const data = await res.json();

    document.getElementById("serverName").textContent = data.Data.hostname;
    document.getElementById("playerCount").textContent =
      data.Data.players.length + " / " + data.Data.sv_maxclients;
    document.getElementById("serverStatus").textContent = "Online";
  } catch (e) {
    document.getElementById("serverStatus").textContent = "Offline / Unknown";
  }
}

loadStatus();
setInterval(loadStatus, 60000);
