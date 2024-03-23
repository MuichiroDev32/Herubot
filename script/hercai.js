const {
  Hercai
} = require('hercai');
const herc = new Hercai();
module.exports.config = {
  name: 'hercai',
  version: '1.0.0',
  role: 0,
  hasPrefix: true,
  description: "An AI command powered by Hercai",
  usage: "hercai [prompt]",
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
    api.sendMessage(`𝗛𝗘𝗥𝗖𝗔𝗜 🤖\n\n𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗 𝚘𝚛 𝚜𝚝𝚊𝚝𝚎𝚖𝚎𝚗𝚝 𝚊𝚏𝚝𝚎𝚛 '𝚑𝚎𝚛𝚌𝚊𝚒'. 𝙵𝚘𝚛 𝚎𝚡𝚊𝚖𝚙𝚕𝚎: '𝚑𝚎𝚛𝚌𝚊𝚒 𝚆𝚑𝚊𝚝 𝚒𝚜 𝚝𝚑𝚎 𝚌𝚊𝚙𝚒𝚝𝚊𝚕 𝚘𝚏 𝙵𝚛𝚊𝚗𝚌𝚎?'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🔎 𝗦𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁....\n\n📝 𝗬𝗼𝘂𝗿 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻: "${input}"`, event.threadID, event.messageID);
  try {
    const response = await herc.question({
      model: "v3",
      content: input
    });
    api.sendMessage('𝗛𝗘𝗥𝗖𝗔𝗜 📝\n\n' + response.reply, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
        
