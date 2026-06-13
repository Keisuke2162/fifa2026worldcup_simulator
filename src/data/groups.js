export const GROUPS = {
  A: {
    name: 'グループ A',
    teams: ['メキシコ', '韓国', 'チェコ', '南アフリカ'],
  },
  B: {
    name: 'グループ B',
    teams: ['カナダ', 'ボスニア・ヘルツェゴビナ', 'スイス', 'カタール'],
  },
  C: {
    name: 'グループ C',
    teams: ['ブラジル', 'ハイチ', 'モロッコ', 'スコットランド'],
  },
  D: {
    name: 'グループ D',
    teams: ['オーストラリア', 'パラグアイ', 'トルコ', 'アメリカ'],
  },
  E: {
    name: 'グループ E',
    teams: ['キュラソー', 'エクアドル', 'ドイツ', 'コートジボワール'],
  },
  F: {
    name: 'グループ F',
    teams: ['日本', 'オランダ', 'スウェーデン', 'チュニジア'],
  },
  G: {
    name: 'グループ G',
    teams: ['ベルギー', 'エジプト', 'イラン', 'ニュージーランド'],
  },
  H: {
    name: 'グループ H',
    teams: ['カーボベルデ', 'サウジアラビア', 'スペイン', 'ウルグアイ'],
  },
  I: {
    name: 'グループ I',
    teams: ['フランス', 'イラク', 'ノルウェー', 'セネガル'],
  },
  J: {
    name: 'グループ J',
    teams: ['アルジェリア', 'アルゼンチン', 'オーストリア', 'ヨルダン'],
  },
  K: {
    name: 'グループ K',
    teams: ['コロンビア', 'コンゴ民主共和国', 'ポルトガル', 'ウズベキスタン'],
  },
  L: {
    name: 'グループ L',
    teams: ['クロアチア', 'イングランド', 'ガーナ', 'パナマ'],
  },
};

export const GROUP_KEYS = Object.keys(GROUPS);

// Generate all 6 round-robin matches for a group
export function generateMatches(teams) {
  const matches = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matches.push({ home: teams[i], away: teams[j], homeScore: '', awayScore: '' });
    }
  }
  return matches;
}

// Initial state: all matches with empty scores
export function initialMatchState() {
  const state = {};
  for (const key of GROUP_KEYS) {
    state[key] = generateMatches(GROUPS[key].teams);
  }
  return state;
}
