// CONFIG — EDIT THESE ONLY
const CONFIG = {
  cfxCode: "YOUR_CFX_CODE",
  cityRules: "YOUR_CITY_RULES_LINK",
  discordRules: "YOUR_DISCORD_RULES_LINK",
  discordInvite: "YOUR_DISCORD_INVITE",
  tebex: "YOUR_TEBEX_LINK",
  contestForm: "YOUR_CONTEST_FORM_LINK",
  staff: [
    { name: "OwnerName", role: "Owner" },
    { name: "CoOwnerName", role: "Co-Owner" },
    { name: "AdminName", role: "Admin" }
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
