export const SPOTIFY_SHOW_ID = '1AjJaPVapB5v1PpeFqWm1j'

export const episodes = [
  {
    id: 3,
    num: '第2歩',
    part: '後編',
    title: '発電所に巣箱？生物多様性×再エネ',
    fullTitle: '【第2歩】＜後編＞発電所に巣箱？生物多様性×再エネ',
    date: '2026年3月23日',
    duration: '33分',
    description: '再エネと生き物たちは共存できるのか―最近世界を渦巻く大きなテーマについて、再エネも広めたいけど生き物も大好きな3人が語り合いました！',
    tags: ['生物多様性', '再エネ', 'ネイチャーポジティブ'],
    refs: [
      { label: '昆明・モントリオール生物多様性枠組み', url: 'https://shizenenergy.net/decarbonization_support/column_seminar/biodiversity/' },
      { label: '中国の砂漠に太陽光パネルを設置した際の生態系への影響', url: 'https://www.frontiersin.org/journals/environmental-science/articles/10.3389/fenvs.2024.1406546/full' },
      { label: '太陽光発電施設はその敷地内の草地が「草原」という希少な環境を提供できる可能性', url: 'https://www.mizuho-rt.co.jp/business/consulting/articles/2024-k0061/index.html' },
    ],
    spotifyUrl: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
    appleUrl: 'https://podcasts.apple.com/us/podcast/ガジュマルのさんぽ/id1861681070',
    amazonUrl: 'https://x.gd/MfDnn',
  },
  {
    id: 2,
    num: '第2歩',
    part: '前編',
    title: '発電所に巣箱？生物多様性×再エネ',
    fullTitle: '【第2歩】＜前編＞発電所に巣箱？生物多様性×再エネ',
    date: '2026年3月23日',
    duration: '36分',
    description: '再エネと生き物たちは共存できるのか―最近世界を渦巻く大きなテーマについて、再エネも広めたいけど生き物も大好きな3人が語り合いました！',
    tags: ['生物多様性', '再エネ', '自然共生'],
    refs: [
      { label: 'イギリスの生物多様性ネットゲイン（BNG）法制化', url: 'https://www.sompo-ri.co.jp/2024/07/26/13164/' },
      { label: '生物多様性が急速に減少することによる経済的損失（世界経済フォーラム）', url: 'https://www3.weforum.org/docs/WEF_The_Global_Risks_Report_2020_JP.pdf' },
    ],
    spotifyUrl: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
    appleUrl: 'https://podcasts.apple.com/us/podcast/ガジュマルのさんぽ/id1861681070',
    amazonUrl: 'https://x.gd/MfDnn',
  },
  {
    id: 1,
    num: '第1歩',
    part: null,
    title: '床を踏んで発電？エネルギーハーベスティング',
    fullTitle: '【第1歩】 床を踏んで発電？エネルギーハーベスティング',
    date: '2025年12月15日',
    duration: '36分',
    description: '人が日常の動きの中で生み出す微小なエネルギーを集めて電力に変える技術──「エネルギーハーベスティング（環境発電）」がエネルギーと私たちの距離を縮めるきっかけに？3人で自由に妄想していく回です。',
    tags: ['エネルギーハーベスティング', '環境発電', 'テクノロジー'],
    refs: [
      { label: 'pavegen（床発電のパネルメーカー）', url: 'https://www.pavegen.com/' },
      { label: '産総研「新しいタイプの環境発電技術『湿度変動電池』を開発」', url: 'https://www.aist.go.jp/aist_j/magazine/20220131.html' },
      { label: 'パーソル「おならで発電できる？メタンガス発電でシミュレーション」', url: 'https://staff.persol-xtech.co.jp/i-engineer/interesting/methanegas' },
    ],
    spotifyUrl: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
    appleUrl: 'https://podcasts.apple.com/us/podcast/ガジュマルのさんぽ/id1861681070',
    amazonUrl: 'https://x.gd/MfDnn',
  },
]

export const hosts = [
  {
    name: '田中 翔',
    role: 'メインパーソナリティ',
    bio: '元FM局アナウンサー。ラジオ業界歴12年。テクノロジーと音楽に精通。',
    emoji: '🎙️',
    color: '#6c63ff',
  },
  {
    name: '山田 花',
    role: 'パーソナリティ',
    bio: 'ポッドキャスター・ライター。音声コンテンツのマネタイズ研究家。',
    emoji: '🎧',
    color: '#ff6b9d',
  },
  {
    name: '鈴木 一郎',
    role: 'パーソナリティ',
    bio: '音楽プロデューサー出身。邦楽・洋楽問わず最新チャートをウォッチ中。',
    emoji: '🎵',
    color: '#48cfad',
  },
]
