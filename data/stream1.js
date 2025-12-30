// 直播分析資料 - stream1

// 章節
const chapters = [
  { time: 0, timestamp: "00:00", title: "開場閒聊與開箱朋友送的趣味禮物" },
  { time: 473, timestamp: "07:53", title: "分享近期身心狀況與給單身者的實質建議" },
  { time: 763, timestamp: "12:43", title: "探討雙魚座在職場上的生存之道與特質" },
  { time: 1000, timestamp: "16:40", title: "聊年底焦慮話題與摩羯座的性格解析" },
  { time: 1533, timestamp: "25:33", title: "2026年水瓶座運勢預測與觀眾網戀故事" },
  { time: 2261, timestamp: "37:41", title: "預見2026年感情觀與個人品牌經營" },
  { time: 2957, timestamp: "49:17", title: "閒聊週一上班心情與英超足球話題" }
];

// 情緒標記
const emotions = [
  { time: 310, timestamp: "05:10", label: "歡笑", emoji: "😂", intensity: 2, context: "展示具「成人暗示」的搞笑獨角獸贈禮，現場氣氛轉趨歡樂" },
  { time: 431, timestamp: "07:11", label: "熱絡", emoji: "🔥", intensity: 3, context: "線上為觀眾跋桮求財運，桮位落地引發彈幕刷屏高峰" },
  { time: 1475, timestamp: "24:35", label: "驚喜", emoji: "😲", intensity: 2, context: "得知觀眾見面三個月即閃婚，主播大感震驚並給予驚喜祝福" },
  { time: 1835, timestamp: "30:35", label: "熱絡", emoji: "🔥", intensity: 2, context: "討論職棒啦啦隊話題，觀眾在關播前熱烈互動留言" }
];

// 禮物/打賞
const gifts = [
  { time: 503, timestamp: "08:23", amount: 103.94, nickname: "Eva水水", reason: "參與媽祖擲筊環節的互動" },
  { time: 550, timestamp: "09:10", amount: 311.55, nickname: "Fragrantcake故事氣味小商店", reason: "感謝擲筊問求財獲得聖杯" },
  { time: 2322, timestamp: "38:42", amount: 79.52, nickname: "胖胖小飯糰", reason: "剛進場打招呼表示支持" }
];

// 觀眾互動摘要
const customers = [
  {
    nickname: "Eva水水",
    about: "天秤座，活躍粉絲。送禮物給主播，表示不想問事只想單純聽主播聊天。關注天氣。",
    keyInteractions: "天秤座，送過「好好溝通」禮物，表示想聽聊天不想問事。",
    interactionLog: [
      { time: "00:05", content: "晚上好～～～" },
      { time: "00:08", content: "我 🙋🏻‍♀️" },
      { time: "00:12", content: "天秤座⚖️" },
      { time: "08:23", content: "送出「好好溝通」禮物" },
      { time: "08:30", content: "等老師分享～～～沒有想要問的🤣🤣想聽你聊天" }
    ]
  },
  {
    nickname: "Fragrantcake故事氣味小商店",
    about: "非常想賺錢（求媽祖聖杯），送過「大富翁」禮物。養了一隻摩羯座的貓（焦慮到膀胱炎）。晨型人，週末會早起。",
    keyInteractions: "想賺大錢、送大富翁禮物、養了摩羯座的焦慮貓、晨型人。",
    interactionLog: [
      { time: "07:00", content: "能不能讓我賺大錢🤣" },
      { time: "09:10", content: "送出「大富翁」禮物" },
      { time: "15:20", content: "焦慮到膀胱炎去看醫生" },
      { time: "15:35", content: "可能因為他摩羯座" },
      { time: "48:00", content: "不會，我現在已演化到晨型人了" }
    ]
  },
  {
    nickname: "傻史尬",
    about: "水瓶座，已婚七年，育有小孩。與老婆（白羊座）是在戀愛網站認識三個月閃婚。2024年工作轉念，被建議2026年要建立專業品牌。",
    keyInteractions: "水瓶座，網戀閃婚七年（老婆白羊），被建議明年要打磨專業。",
    interactionLog: [
      { time: "20:00", content: "水瓶座" },
      { time: "22:15", content: "今年轉念頭" },
      { time: "23:00", content: "交友網路" },
      { time: "24:35", content: "3個月閃婚🤣🤣" },
      { time: "25:00", content: "兩個魔獸在一起，大家開心" }
    ]
  },
  {
    nickname: "會計家教 Rock",
    about: "處女座，職業是會計家教。體育迷，愛看英超（支持布萊頓，關注日本球員）和棒球（喜歡啦啦隊，去過大巨蛋20次）。剛生小孩，是新手爸爸，早起送小孩。",
    keyInteractions: "處女座老師，英超/棒球狂熱，剛生小孩的新手爸爸。",
    interactionLog: [
      { time: "49:00", content: "通通都要" },
      { time: "49:30", content: "等等10點還有英超可以看捨不得睡" },
      { time: "50:00", content: "我是處女座" },
      { time: "51:00", content: "因為小的剛出生" },
      { time: "52:00", content: "有喔，應該去了20次了(去大巨蛋)" }
    ]
  },
  {
    nickname: "丹尼",
    about: "雙魚座，單身。極度熱愛工作與公司（讓主播驚訝），自稱口風緊。以前追過足球（亞洲球員），現在較少看。覺得大巨蛋演唱會票難搶。",
    keyInteractions: "雙魚座工作狂，單身，以前看足球，覺得公司很棒。",
    interactionLog: [
      { time: "12:45", content: "雙♓️" },
      { time: "13:00", content: "1工作 2工作 3工作" },
      { time: "13:30", content: "我口風都很緊" },
      { time: "14:00", content: "近十年沒有(不想上班的感覺)" },
      { time: "50:30", content: "我以前會針對亞洲球員追" }
    ]
  },
  {
    nickname: "米老鬼不是米老鼠",
    about: "射手座。個性Chill，唯一焦慮是沒菸抽。很怕摩羯座（前主管磨合久、曾因得知追求對象是摩羯而放棄）。",
    keyInteractions: "射手座，沒菸抽會焦慮，討厭/害怕摩羯座。",
    interactionLog: [
      { time: "16:00", content: "射手代表來了" },
      { time: "16:20", content: "不會 我很chill" },
      { time: "16:40", content: "唯一焦慮...我沒煙了 但附近沒711" },
      { time: "17:00", content: "我以前主管是摩羯 超麻煩了 花了一年磨合" }
    ]
  },
  {
    nickname: "胖胖小飯糰",
    about: "白羊座。送過禮物「一口爆香」。",
    keyInteractions: "白羊座，送禮物。",
    interactionLog: [
      { time: "38:42", content: "送出「一口爆香」禮物" },
      { time: "39:00", content: "白羊" }
    ]
  }
];

// 直播總時長（秒）
const totalDuration = 3780; // 63 分鐘
