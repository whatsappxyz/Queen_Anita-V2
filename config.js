//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "916260273863";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9xcUU3Wkx0L0ZmK1BJT0lRRXVCYUxwblFjOE9NMlFzdmZraTV3WlNHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWVBYkY5eHFOWi93TkNvQnBLdnh6UXFpNU1wRG9YaXZFZm9kT0RESUFRcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTWY3aDJVT1VzeU5sbUVQQXhaMklFVUVta0MwclR5amJXdll3dXJsVGxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHd1lkZ0thR3p2VFlwSC9TQ2l0aHlvdEVhVHliZStXVlZTZXl0NzhpY2xnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVEQWZ2Q3c3NFM0aDJuSE1FNUR5RzJZbGZSdzhLSDFaaEJnNWJ0NEQyRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJUTnU1dzhSc1lVSTA3YzVwcVdtS3cxR1YzNUdjTi9sS3lPeUhqaFN6Rk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhIWDdlenRvdU0yQURBL1RrdlNIdVM0MDBVMVp5ODhTQzVXOVFFWktFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUThYS2tWQk1SZlI4b1hTbzRaTU5WMHVSYk5wUFNUZHJ6SVZjaG1SM3FSTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFmbmNGVmZqamd5amZFY2IycTQydzUxUFdLN0NUc3VUVDFFSWpBZisxR2w2SnBYWUsveVZjOXJ6a0x4WmlLYzFVZDJQbHhwR2VTS3p2RHFrRlk1QUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJVTnpDelVRRWVFNDJYbXpoODRZR281V1hZRVNOckFtVTI1R2luWnppZWpnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJybG5NNUFSVVFKVzN3YmpldTdBSmVBIiwicGhvbmVJZCI6IjNlYmU0Mzc0LWM4M2MtNDFmMi1hYWVmLTQwZmRhNzAwNWVmMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzemRjMG4xWXowU0RkN0Z4Yy8xeUtHZXNrQUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1dZRlA2QzJZRy9ISkQzME56bmpQZ3hiOFIwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhZQkQ5TEsyIiwibWUiOnsiaWQiOiI5MTYyNjAyNzM4NjM6MzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2as/Cdmqog8J2QkvCdmq7wnZCU8J2aqfCdmq7wnZqr8J2asyDwnZCK8J2QlPCdmrPwnZqr8J2aqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUtCNFBRREVKSDV0TFVHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQVczQWJLOVhjNTV2UFYyL3VkdkRoMkwwWklJV3NFQktud0E4TEo4Sm4wUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWUF6clU5cTZHNkgzQ3l1YjdPVHd4M0FSTEw0ZG40RXYrYjR2V2dOSFhXNDNUNEZodDJpQWplTzEwUkdaRHhVZWJiZFlvb2p3TlA5RHUxN1BJYXdnQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkkzazJTM0kyVGU0Vy95UHRNWmR5ZlhielgrZC9oUnZtYStrdTRMbjNJTXNRWkVxd25DVVE0cm1mQWVPVzR3ZmlsNWYzK0VnUDVDYWE0MHNuRWw1S0FBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjYwMjczODYzOjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFGdHdHeXZWM09lYnoxZHY3bmJ3NGRpOUdTQ0ZyQkFTcDhBUEN5ZkNaOUUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MjkyNzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWdnIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "MR-SHUBHAM",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
