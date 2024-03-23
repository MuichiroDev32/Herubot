const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`𝗔𝘀𝗸𝗲𝗱 𝗔𝗶 🤖\n\n𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗/𝚚𝚞𝚎𝚛𝚢!`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🔎 𝗦𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁....\n\n📝 𝗬𝗼𝘂𝗿 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻: "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://openaikey-x20f.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    const response = data.response;
    api.sendMessage('𝗔𝗶 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 📝\n\n' + response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
