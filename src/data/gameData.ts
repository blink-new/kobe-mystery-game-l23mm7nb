import { Question, Character, Ending } from '../types/game';

export const characters: Character[] = [
  {
    name: 'さくら',
    description: '天然系の女性キャラクター。優しく穏やかな性格で、時々不思議な発言をする。',
  },
  {
    name: 'カケル',
    description: '明るい男性キャラクター。エネルギッシュで前向き、仲間思いの性格。',
    imageUrl: '/kakeru-character.jpg',
  },
];

export const questions: Question[] = [
  {
    id: 1,
    title: 'ポートタワーに隠された合言葉',
    stage: '神戸ポートタワー',
    description: '赤き塔の根元に刻まれし"6文字の英語"――それは港町の入口を示す鍵。',
    memo: '『赤き塔の根元に刻まれし"6文字の英語"――それは港町の入口を示す鍵。』',
    sakuraDialogue: '見上げてごらん、タワーの足元に"白い文字"が浮かんでるの。まるで空に港の名前が描かれてるみたい…',
    kakeruDialogue: '本当だ！これってつまり…',
    choices: [
      { id: 'A', text: 'KOBE PORT' },
      { id: 'B', text: 'KOBE TOWER' },
      { id: 'C', text: 'KOBE CITY' },
      { id: 'D', text: 'KOBE SK' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 2,
    title: '白帆の重なりに秘められた数字',
    stage: '神戸海洋博物館',
    description: '波に乗る白き翼、重なる曲線はこの街のリズムを刻む。数を見極めよ、真のカケラへ至るために――',
    memo: '『波に乗る白き翼、重なる曲線はこの街のリズムを刻む。数を見極めよ、真のカケラへ至るために――』',
    sakuraDialogue: 'この建物、まるで帆船の帆が空に広がってるみたい…何枚の帆が重なってるのかな？',
    kakeruDialogue: '重なりのリズムに、秘密が隠れているのか？離れて見たり、下からのぞいて見れば分かるのか？',
    choices: [
      { id: 'A', text: '1枚' },
      { id: 'B', text: '2枚' },
      { id: 'C', text: '3枚' },
      { id: 'D', text: '4枚以上' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 3,
    title: 'ゆがんだ愛の傾き',
    stage: 'メリケンパーク（LOVEモニュメント）',
    description: '真っ直ぐじゃないからこそ、本物の想いが宿る。"L"に込められた角度こそ、カケラのひとつ',
    memo: '『真っ直ぐじゃないからこそ、本物の想いが宿る。"L"に込められた角度こそ、カケラのひとつ』',
    sakuraDialogue: 'LOVEの"L"、なんだかちょっと傾いてるよね…このナナメさ、気にならない？',
    kakeruDialogue: '"愛"はまっすぐじゃない。だけど、その傾きに意味があるらしい。Lの角度を見極めよう',
    choices: [
      { id: 'A', text: '10°' },
      { id: 'B', text: '15°' },
      { id: 'C', text: '30°' },
      { id: 'D', text: '45°' },
    ],
    correctAnswer: 'B',
  },
];

export const endings: Ending[] = [
  {
    type: 'bad',
    title: '迷いの航路（未達）',
    description: 'あなたは全てのスポットを巡ったが、肝心の"カケラ"を見つけ出すことはできなかった。',
    sakuraDialogue: 'でも…進もうとした気持ちは、きっとどこかで次の扉を開くよ。',
    kakeruDialogue: 'またいつか、もう一度チャレンジしようぜ！',
    imageDescription: '夕暮れの港を2人と見つめる主人公。',
  },
  {
    type: 'good',
    title: '希望の灯（途中発見）',
    description: 'あなたはいくつかの謎を解き、"カケラの一部"にたどり着いた。',
    sakuraDialogue: 'あと1歩で真実に届いたかも…でも、次に来るときはきっと。',
    kakeruDialogue: 'これって…財宝の入り口の"封印"じゃないか？すごい発見だ！',
    imageDescription: '半開きの宝箱と、キラリと光るカケラ',
  },
  {
    type: 'perfect',
    title: '港に眠る"光の財宝"',
    description: 'ついに、あなたは全ての謎を解き明かした。カケラを並べると、港のベンチの影が"鍵の形"を示し、地面の一部が開く。そこには、かつての神戸港を支えた者たちが未来に託した「言葉の宝箱」が眠っていた。',
    sakuraDialogue: 'これが…神戸に残された、想いのかたちなんだね。',
    kakeruDialogue: '君と一緒じゃなきゃ、見つけられなかったな。',
    imageDescription: '光る宝箱と、感動する3人の姿',
  },
];

export const introStory = {
  title: '港のまち 神戸に眠る謎と、3つのカケラ',
  subtitle: 'ヒントは"見える場所"にある。2人で協力し、3つのスポットを巡って、港町・神戸に隠された秘密を解き明かそう',
  narration: [
    '港の風が心地よく吹く午後、イベントの自由散策中に歩いていたあなたの前に、2人の不思議な通行人が現れる。',
  ],
  dialogues: [
    {
      character: 'さくら',
      text: 'ねえ、ちょっとお願いがあるんだけど…いま、この神戸で、どうしても一緒に探してほしい"謎"があるの。あなたなら、きっと見つけられる気がして…！',
    },
    {
      character: 'カケル',
      text: 'オレたち、ずっと探してたんだ。"神戸港に眠る3つのカケラ"。でも、どうしてもあと一歩届かなくて…',
    },
    {
      character: 'さくら',
      text: 'この地図と手がかり、もう私たちだけじゃ追えないの…。でも、あなたみたいに"偶然"ここに来てくれた人こそ、運命の鍵を持ってるって…',
    },
    {
      character: 'カケル',
      text: 'お願いだ。オレたちと一緒に、この謎を追ってくれないか？ 神戸の街に隠された"本当の物語"を、見つけるために。',
    },
  ],
  finalNarration: [
    'その瞬間、さくらが取り出したのは、ボロボロになった手帳と、謎めいた暗号メモだった。',
  ],
  finalDialogue: {
    character: 'さくら',
    text: '…これ、3つのスポットを巡る"試練の地図"。でも気をつけて。謎が解けなければ、真実には近づけない。けど、たとえ全部は分からなくても、あなたが見つけたものには意味があるわ。',
  },
  conclusion: [
    'あなたは、2人の差し出す手帳を受け取った。',
    'こうして、神戸港に隠された"3つのカケラ"を探す物語が始まった──。',
  ],
};