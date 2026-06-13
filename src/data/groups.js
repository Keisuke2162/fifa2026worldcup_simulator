export const GROUPS = {
  A: {
    name: 'グループ A',
    teams: ['メキシコ', '韓国', 'チェコ', '南アフリカ'],
    matches: [
      { home: 'メキシコ',   away: '南アフリカ', date: '6/11' },
      { home: '韓国',       away: 'チェコ',     date: '6/12' },
      { home: 'チェコ',     away: '南アフリカ', date: '6/18' },
      { home: 'メキシコ',   away: '韓国',       date: '6/19' },
      { home: '南アフリカ', away: '韓国',       date: '6/25' },
      { home: 'チェコ',     away: 'メキシコ',   date: '6/25' },
    ],
  },
  B: {
    name: 'グループ B',
    teams: ['カナダ', 'ボスニア・ヘルツェゴビナ', 'スイス', 'カタール'],
    matches: [
      { home: 'カナダ',               away: 'ボスニア・ヘルツェゴビナ', date: '6/12' },
      { home: 'カタール',             away: 'スイス',                   date: '6/13' },
      { home: 'スイス',               away: 'ボスニア・ヘルツェゴビナ', date: '6/18' },
      { home: 'カナダ',               away: 'カタール',                 date: '6/18' },
      { home: 'スイス',               away: 'カナダ',                   date: '6/24' },
      { home: 'ボスニア・ヘルツェゴビナ', away: 'カタール',             date: '6/24' },
    ],
  },
  C: {
    name: 'グループ C',
    teams: ['ブラジル', 'ハイチ', 'モロッコ', 'スコットランド'],
    matches: [
      { home: 'ブラジル',     away: 'モロッコ',     date: '6/13' },
      { home: 'ハイチ',       away: 'スコットランド', date: '6/14' },
      { home: 'スコットランド', away: 'モロッコ',   date: '6/19' },
      { home: 'ブラジル',     away: 'ハイチ',       date: '6/20' },
      { home: 'モロッコ',     away: 'ハイチ',       date: '6/24' },
      { home: 'スコットランド', away: 'ブラジル',   date: '6/24' },
    ],
  },
  D: {
    name: 'グループ D',
    teams: ['オーストラリア', 'パラグアイ', 'トルコ', 'アメリカ'],
    matches: [
      { home: 'アメリカ',       away: 'パラグアイ',     date: '6/13' },
      { home: 'オーストラリア', away: 'トルコ',         date: '6/14' },
      { home: 'アメリカ',       away: 'オーストラリア', date: '6/19' },
      { home: 'トルコ',         away: 'パラグアイ',     date: '6/20' },
      { home: 'トルコ',         away: 'アメリカ',       date: '6/26' },
      { home: 'パラグアイ',     away: 'オーストラリア', date: '6/26' },
    ],
  },
  E: {
    name: 'グループ E',
    teams: ['キュラソー', 'エクアドル', 'ドイツ', 'コートジボワール'],
    matches: [
      { home: 'ドイツ',         away: 'キュラソー',     date: '6/14' },
      { home: 'コートジボワール', away: 'エクアドル',   date: '6/15' },
      { home: 'ドイツ',         away: 'コートジボワール', date: '6/20' },
      { home: 'エクアドル',     away: 'キュラソー',     date: '6/21' },
      { home: 'キュラソー',     away: 'コートジボワール', date: '6/25' },
      { home: 'エクアドル',     away: 'ドイツ',         date: '6/25' },
    ],
  },
  F: {
    name: 'グループ F',
    teams: ['日本', 'オランダ', 'スウェーデン', 'チュニジア'],
    matches: [
      { home: 'オランダ',   away: '日本',       date: '6/14' },
      { home: 'スウェーデン', away: 'チュニジア', date: '6/15' },
      { home: 'オランダ',   away: 'スウェーデン', date: '6/20' },
      { home: 'チュニジア', away: '日本',       date: '6/21' },
      { home: 'チュニジア', away: 'オランダ',   date: '6/26' },
      { home: '日本',       away: 'スウェーデン', date: '6/26' },
    ],
  },
  G: {
    name: 'グループ G',
    teams: ['ベルギー', 'エジプト', 'イラン', 'ニュージーランド'],
    matches: [
      { home: 'ベルギー',       away: 'エジプト',       date: '6/15' },
      { home: 'イラン',         away: 'ニュージーランド', date: '6/16' },
      { home: 'ベルギー',       away: 'イラン',         date: '6/21' },
      { home: 'ニュージーランド', away: 'エジプト',     date: '6/22' },
      { home: 'ニュージーランド', away: 'ベルギー',     date: '6/27' },
      { home: 'エジプト',       away: 'イラン',         date: '6/27' },
    ],
  },
  H: {
    name: 'グループ H',
    teams: ['カーボベルデ', 'サウジアラビア', 'スペイン', 'ウルグアイ'],
    matches: [
      { home: 'スペイン',       away: 'カーボベルデ',   date: '6/15' },
      { home: 'サウジアラビア', away: 'ウルグアイ',     date: '6/15' },
      { home: 'スペイン',       away: 'サウジアラビア', date: '6/21' },
      { home: 'ウルグアイ',     away: 'カーボベルデ',   date: '6/21' },
      { home: 'カーボベルデ',   away: 'サウジアラビア', date: '6/27' },
      { home: 'ウルグアイ',     away: 'スペイン',       date: '6/27' },
    ],
  },
  I: {
    name: 'グループ I',
    teams: ['フランス', 'イラク', 'ノルウェー', 'セネガル'],
    matches: [
      { home: 'フランス',   away: 'セネガル', date: '6/16' },
      { home: 'イラク',     away: 'ノルウェー', date: '6/16' },
      { home: 'フランス',   away: 'イラク',   date: '6/22' },
      { home: 'ノルウェー', away: 'セネガル', date: '6/23' },
      { home: 'ノルウェー', away: 'フランス', date: '6/26' },
      { home: 'セネガル',   away: 'イラク',   date: '6/26' },
    ],
  },
  J: {
    name: 'グループ J',
    teams: ['アルジェリア', 'アルゼンチン', 'オーストリア', 'ヨルダン'],
    matches: [
      { home: 'アルゼンチン', away: 'アルジェリア', date: '6/17' },
      { home: 'オーストリア', away: 'ヨルダン',     date: '6/17' },
      { home: 'アルゼンチン', away: 'オーストリア', date: '6/22' },
      { home: 'ヨルダン',     away: 'アルジェリア', date: '6/23' },
      { home: 'アルジェリア', away: 'オーストリア', date: '6/28' },
      { home: 'ヨルダン',     away: 'アルゼンチン', date: '6/28' },
    ],
  },
  K: {
    name: 'グループ K',
    teams: ['コロンビア', 'コンゴ民主共和国', 'ポルトガル', 'ウズベキスタン'],
    matches: [
      { home: 'ポルトガル',       away: 'コンゴ民主共和国', date: '6/17' },
      { home: 'ウズベキスタン',   away: 'コロンビア',       date: '6/18' },
      { home: 'ポルトガル',       away: 'ウズベキスタン',   date: '6/23' },
      { home: 'コロンビア',       away: 'コンゴ民主共和国', date: '6/24' },
      { home: 'コロンビア',       away: 'ポルトガル',       date: '6/28' },
      { home: 'コンゴ民主共和国', away: 'ウズベキスタン',   date: '6/28' },
    ],
  },
  L: {
    name: 'グループ L',
    teams: ['クロアチア', 'イングランド', 'ガーナ', 'パナマ'],
    matches: [
      { home: 'イングランド', away: 'クロアチア', date: '6/17' },
      { home: 'ガーナ',       away: 'パナマ',     date: '6/18' },
      { home: 'イングランド', away: 'ガーナ',     date: '6/23' },
      { home: 'パナマ',       away: 'クロアチア', date: '6/24' },
      { home: 'パナマ',       away: 'イングランド', date: '6/27' },
      { home: 'クロアチア',   away: 'ガーナ',     date: '6/27' },
    ],
  },
};

export const GROUP_KEYS = Object.keys(GROUPS);

export function initialMatchState() {
  const state = {};
  for (const key of GROUP_KEYS) {
    state[key] = GROUPS[key].matches.map((m) => ({ ...m, homeScore: '', awayScore: '' }));
  }
  return state;
}
