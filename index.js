require('dotenv').config();
const { TOKEN } = process.env;

const { Client, Intents } = require('discord.js-selfbot');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const SENTENCE_SET = [
  '沒有不進步的人生，只有不進取的人!',
  '有時候，你得停一下腳步，等一等心靈，讓心情平和，想一想自己生活中擁有的所有美好的東西。',
  '沒有傘的孩子，就必須努力奔跑!',
  '我不怕千萬人阻擋，只怕自己投降。',
  '活躍給他推起來  肝起來阿 各位 火起來',
  '来来来，不要停，决战到天亮',
  '要扛的住呀，兄弟!',
  '賣肝求榮',
  '兄弟，我們會扛的住的',
  '用力肝不要停',
  '只要我們努力了，發達的機會就是我們的',
  '世上沒有絕望的處境，只有對處境絕望的人。',
  '再長的路，慢慢走一步步也能走完，再短的路，不邁開雙腳也無法到達',
  '不要等待機會，而是要創造機會',
  '機會不會主動找到你，必須要主動亮出你自己，不肝就沒機會',
  '很多失敗不是因為能力有限，而是因為沒有堅持到底，堅持就會有WL',
  '一個人最大的敵人是自己，沒有完不成的任務，只有失去信心的自己。',
  '勤奮是你生命的密碼，能為你譜出一部壯麗的史詩。',
  '人生多一份挫折，就多一份人生的感悟；人生多一次跌打，就多一條抗爭的經驗在其他項目的失敗在這要成功',
  '別自己製造壓力，我們沒有必要跟著時間走，只需跟著心態和能力走，凡事隨緣、盡力達命、問心無愧，其他的交給天。',
  '人活著就是為了解決困難。這才是生命的意義，也是生命的內容。逃避不是辦法，知難而上往往是解決問題的最好手段。',
  '失敗是什麼？沒有什麼，只是更走近成功一步；成功是什麼？就是走過了所有通向失敗的路，只剩下一條路，那就是成功的路。',
  '任何的限制，都是從自己的內心開始的。',
  '你追我趕拼搏爭先，流血流汗不留遺憾。',
  '一個人最大的破產是「絕望」，最大的資產是「希望」。',
  '「不可能」只存在於失敗者的字典裡，個WL我勢在必得',
  '肝起來阿',
  '沒肝到10等不睡覺',
  '推起來 分享起來 肝起來',
  '先肝就不怕',
  '大家努力肝啊!',
  '一直肝就對了 不要想等級等級',
  '不是村上隆那就不肝了',
  '這個項目一定會火',
  '這麼好的東西不努力點肝',
  '一起肝爆他',
  '肝起來阿 各位 不要停阿  好東西就是要努力肝阿',
  '肝起來阿 各位',
  '越變越難囉～～～哈哈哈肝壞掉囉',
  '肝起來',
  '吃喝拉可以停，但肝可是不能停',
  '這個肝不要了',
  '保住排名就行',
  '幣圈一天　人間一年　肝個半年換肝的錢也有了',
  '衝一波 衝起來',
  '这个绝对是好项目',
  '大家加油衝一波 衝啦',
  '大家努力就會肝到',
  '尬起來',
  '肝起來',
  '別睡了各位',
  '別放棄好嗎',
  '这个 好呢累啊',
  '撐住不要停',
  '看看视频更顶不住 多聊聊还行',
  '想要白名單阿',
  '這個肝，我不要了',
  '為了白單，不要肝了',
  '升等好慢 QAQ',
  '说啥都没用 就是不回复 闷头刷自己的', 
  '不会放弃的  我们一起上岸',
  '加油加油',
  '衝衝衝 go go',
]

let count = 0;

const GROUP = [
  // {
  //   id: "921594372666032188",
  //   name: 'SPH',
  //   channels: ["930949007566602320"],
  //   count: 0
  // },
  // {
  //   id: "926916007551963146",
  //   name: 'DAPE',
  //   channels: ["930049299235082250"],
  //   count: 0
  // },
  // {
  //   id: "919859535802400798",
  //   name: "BAC",
  //   channels: ["929520327233507389"],
  //   count: 0
  // }
  {
    id: "911994692130996244",
    name: "Bored Lambs",
    channels: ["912014422116008036"],
    count: 0
  }
]

client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`);
  const channel = client.channels.cache.get('912014422116008036');
  channel.send(SENTENCE_SET[getRandomInt(SENTENCE_SET.length)]);
  sendMsgWithTimeout(channel, GROUP[0], 60000);
});

// client.on('message', async (msg)=> { 

//   if(GROUP.find((c) => (msg.guild.id == c.id)) == undefined) return;
//   const currGroup = GROUP.find((c) => (msg.guild.id == c.id));

//   if(currGroup.channels.find((c) => (msg.channel.id == c)) == undefined) return;
//   sendMsg(msg, currGroup);
// })

const sendMsgWithTimeout = (channel,  group, timeout) => {
  setInterval(() => sendMsg(channel, group), timeout);
}

const sendMsg = (channel, group) => {
  const msg = SENTENCE_SET[getRandomInt(SENTENCE_SET.length)]
  channel.send(msg).then(rmsg => {
    group.count++;
    console.log(`我在[${group.name}]說了(${group.count}): ${msg}\n`);
    rmsg.delete({ timeout: 5 })
  });
}


const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

client.login(TOKEN);