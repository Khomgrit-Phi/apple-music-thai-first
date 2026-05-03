// Real Thai artists & content — ported from design prototype

export const TH_ARTISTS = {
  bodyslam: { name: 'Bodyslam',                nameTh: 'บอดี้สแลม' },
  tilly:    { name: 'Tilly Birds',             nameTh: 'ทิลลี่ เบิร์ดส์' },
  phum:     { name: 'Phum Viphurit',           nameTh: 'ภูมิ วิภูริศ' },
  bowky:    { name: 'Bowkylion',               nameTh: 'โบกี้ไลอ้อน' },
  ink:      { name: 'Ink Waruntorn',           nameTh: 'อิ้งค์ วรันธร' },
  threeman: { name: 'Three Man Down',          nameTh: 'ทรีแมนดาวน์' },
  polycat:  { name: 'Polycat',                 nameTh: 'โพลีแคท' },
  cocktail: { name: 'Cocktail',                nameTh: 'ค็อกเทล' },
  stamp:    { name: 'STAMP',                   nameTh: 'แสตมป์' },
  slot:     { name: 'Slot Machine',            nameTh: 'สล็อต แมชชีน' },
  labanoon: { name: 'Labanoon',                nameTh: 'ลาบานูน' },
}

export const TRACKS = [
  { id: 't1',  art: '/assets/artwork/album-01.jpg', title: 'รักล้นใจ',          titleEn: 'Overflow Heart',     artist: TH_ARTISTS.labanoon, genre: 'pop',   duration: 218 },
  { id: 't2',  art: '/assets/artwork/album-02.jpg', title: 'แสงสุดท้าย',        titleEn: 'The Last Light',     artist: TH_ARTISTS.bodyslam, genre: 'rock',  duration: 264 },
  { id: 't3',  art: '/assets/artwork/album-03.jpg', title: 'แสงดาว',            titleEn: 'Starlight',          artist: TH_ARTISTS.bodyslam, genre: 'rock',  duration: 245 },
  { id: 't4',  art: '/assets/artwork/album-04.jpg', title: 'Long Gone',          titleEn: 'Long Gone',          artist: TH_ARTISTS.phum,     genre: 'indie', duration: 198 },
  { id: 't5',  art: '/assets/artwork/album-05.jpg', title: 'เพลงรักไม่จำเป็น',  titleEn: 'Love Song Not Needed', artist: TH_ARTISTS.bodyslam, genre: 'rock', duration: 252 },
  { id: 't6',  art: '/assets/artwork/album-06.jpg', title: 'ใจกลางเมือง',       titleEn: 'Heart of the City',  artist: TH_ARTISTS.polycat,  genre: 'pop',   duration: 232 },
  { id: 't7',  art: '/assets/artwork/album-07.jpg', title: 'ภูมิแพ้กรุงเทพ',   titleEn: 'Bangkok Allergy',    artist: TH_ARTISTS.labanoon, genre: 'pop',   duration: 226 },
  { id: 't8',  art: '/assets/artwork/album-08.jpg', title: 'ชอบตัวเอง',         titleEn: 'Love Myself',        artist: TH_ARTISTS.threeman, genre: 'tpop',  duration: 211 },
  { id: 't9',  art: '/assets/artwork/album-09.jpg', title: 'ไม่บอกเธอ',         titleEn: "Won't Tell You",     artist: TH_ARTISTS.bodyslam, genre: 'rock',  duration: 248 },
  { id: 't10', art: '/assets/artwork/album-10.jpg', title: 'รอวันที่ฉันพร้อม', titleEn: "When I'm Ready",     artist: TH_ARTISTS.cocktail, genre: 'pop',   duration: 257 },
  { id: 't11', art: '/assets/artwork/album-11.jpg', title: 'ฤดูที่ฉันเหงา',    titleEn: 'Lonely Season',      artist: TH_ARTISTS.stamp,    genre: 'pop',   duration: 243 },
  { id: 't12', art: '/assets/artwork/album-12.jpg', title: 'ดาวกระดาษ',         titleEn: 'Paper Star',         artist: TH_ARTISTS.slot,     genre: 'rock',  duration: 268 },
]

export const COPY = {
  th: {
    listenNow: 'ฟังเลย', radio: 'วิทยุ', library: 'คลังเพลง', search: 'ค้นหา', browse: 'สำรวจ',
    seeAll: 'ดูทั้งหมด', trending: 'กำลังเป็นที่นิยม', newReleases: 'ใหม่ล่าสุด',
    madeForYou: 'ทำมาเพื่อคุณ', topCharts: 'ชาร์ตไทย', thaiHeroTitle: 'เพลงไทยที่กำลังมาแรง',
    thaiHeroMeta: 'อัปเดตทุกวัน · Apple Music', nowPlaying: 'กำลังเล่น',
    play: 'ฟังเลย', shuffle: 'สุ่มเล่น', artists: 'ศิลปิน', albums: 'อัลบั้ม',
    songs: 'เพลง', playlists: 'เพลย์ลิสต์', downloaded: 'ดาวน์โหลด',
    recentlyPlayed: 'เล่นล่าสุด', searchHint: 'ศิลปิน, เพลง, เนื้อเพลง...',
    spotlight: 'ศิลปินไทยประจำสัปดาห์', featuredOn: 'ศิลปินเด่น', forArtist: 'แฟนคลับชอบ',
    monthly: 'ผู้ฟังต่อเดือน', follow: 'ติดตาม', following: 'กำลังติดตาม',
    pricing: '129 ฿/เดือน · จ่ายผ่าน TrueMoney หรือ PromptPay',
    pickGenre: 'เลือกแนวเพลงที่ใช่', luktung: 'ลูกทุ่ง', morlam: 'หมอลำ', tpop: 'ที-ป๊อป',
    pleng: 'เพลงเพื่อชีวิต', indie: 'อินดี้', rock: 'ร็อก', hiphop: 'ฮิปฮอป',
    dance: 'แดนซ์', all: 'ทั้งหมด', pop: 'ป๊อป', fromAlbum: 'จากอัลบั้ม',
    topSongs: 'เพลงยอดฮิต', browseCategories: 'หมวดหมู่ยอดนิยm',
  },
  en: {
    listenNow: 'Listen Now', radio: 'Radio', library: 'Library', search: 'Search', browse: 'Browse',
    seeAll: 'See All', trending: 'Trending Now', newReleases: 'New Releases',
    madeForYou: 'Made for You', topCharts: 'Thailand Top 100', thaiHeroTitle: 'Thai Music on the Rise',
    thaiHeroMeta: 'Updated daily · Apple Music', nowPlaying: 'Now Playing',
    play: 'Play', shuffle: 'Shuffle', artists: 'Artists', albums: 'Albums',
    songs: 'Songs', playlists: 'Playlists', downloaded: 'Downloaded',
    recentlyPlayed: 'Recently Played', searchHint: 'Artists, songs, lyrics...',
    spotlight: 'Thai Artist of the Week', featuredOn: 'Featured Artist', forArtist: 'Fans Also Like',
    monthly: 'monthly listeners', follow: 'Follow', following: 'Following',
    pricing: '฿129/month · Pay with TrueMoney or PromptPay',
    pickGenre: 'Pick your sound', luktung: 'Luk Thung', morlam: 'Mor Lam', tpop: 'T-Pop',
    pleng: 'Songs for Life', indie: 'Indie', rock: 'Rock', hiphop: 'Hip-Hop',
    dance: 'Dance', all: 'All', pop: 'Pop', fromAlbum: 'From the album',
    topSongs: 'Top Songs', browseCategories: 'Browse Categories',
  },
}

export const GENRE_MATCH = {
  all:     ['pop', 'rock', 'indie', 'tpop'],
  tpop:    ['tpop', 'pop'],
  luktung: ['pop'],
  morlam:  ['pop', 'rock'],
  pleng:   ['pop', 'rock'],
  indie:   ['indie', 'pop'],
  hiphop:  ['tpop', 'pop'],
  rock:    ['rock', 'indie'],
  dance:   ['tpop', 'pop'],
}

export const GENRE_FAMILIES = [
  { id: 'tpop',    th: 'ที-ป๊อป',         en: 'T-Pop',         color: '#FA233B', accent: '#FFD0D9' },
  { id: 'luktung', th: 'ลูกทุ่ง',          en: 'Luk Thung',     color: '#C9342C', accent: '#FFE3B0' },
  { id: 'morlam',  th: 'หมอลำ',            en: 'Mor Lam',       color: '#7A2E1E', accent: '#FFC97A' },
  { id: 'pleng',   th: 'เพลงเพื่อชีวิต',  en: 'Songs for Life', color: '#3C5A3C', accent: '#D5E1B8' },
  { id: 'indie',   th: 'อินดี้',           en: 'Indie',         color: '#3A3F8E', accent: '#C9D0F2' },
  { id: 'hiphop',  th: 'ฮิปฮอป',          en: 'Hip-Hop',       color: '#1D1D1F', accent: '#E8B958' },
  { id: 'rock',    th: 'ร็อก',             en: 'Rock',          color: '#2A1E1A', accent: '#E8D8BD' },
  { id: 'dance',   th: 'แดนซ์',            en: 'Dance',         color: '#5B2A8F', accent: '#F0B8FF' },
]

export const ARTIST_ART = {
  bodyslam: '/assets/artwork/album-03.jpg',
  tilly:    '/assets/artwork/artist-tilly.jpg',
  phum:     '/assets/artwork/album-04.jpg',
  bowky:    '/assets/artwork/artist-bowky.jpg',
  ink:      '/assets/artwork/artist-ink.jpg',
  threeman: '/assets/artwork/album-08.jpg',
  polycat:  '/assets/artwork/album-06.jpg',
  cocktail: '/assets/artwork/album-10.jpg',
  stamp:    '/assets/artwork/album-11.jpg',
  slot:     '/assets/artwork/album-12.jpg',
  labanoon: '/assets/artwork/album-01.jpg',
}

export const EDITORIAL_HERO = {
  th: { kind: 'EDITORIAL', title: 'แสงสุดท้าย ของ Bodyslam', subtitle: 'ครบรอบ 22 ปี เพลงที่กำหนดยุคของวงร็อกไทย', meta: 'สัปดาห์นี้ · Apple Music' },
  en: { kind: 'EDITORIAL', title: 'Bodyslam: 22 Years of Thai Rock', subtitle: 'The songs that defined a generation', meta: 'This Week · Apple Music' },
}

export const SAMPLE_LYRICS_TH = [
  'แสงแห่งดาวที่ส่องลงมา',
  'นำพาเรา ผ่านค่ำคืนนี้',
  'เธอคือดาวที่สว่างที่สุด',
  'ในใจที่ฉันเฝ้ามอง',
  'ไม่ว่าวันคืนจะนานเท่าใด',
  'หัวใจฉันยังคงเดิม',
  'ขอให้เธอรู้สิ่งหนึ่ง',
  'ว่าฉันรักเธอเสมอ',
]

export const SAMPLE_LYRICS_EN = [
  'The starlight shining down on us',
  'Carries us through this night',
  'You are the brightest star',
  'In the heart that watches',
  'No matter how long the days and nights',
  'My heart will stay the same',
  'I want you to know one thing',
  'That I love you always',
]

export function getTitle(track, lang) {
  return lang === 'en' ? track.titleEn : track.title
}

export function getArtist(track, lang) {
  return lang === 'en' ? track.artist.name : track.artist.nameTh
}
