import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { day1Words } from './day1_data.js';
import { day2Words } from './day2_data.js';
import { day3Words } from './day3_data.js';
import { day4Words } from './day4_data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Day 1: ${day1Words.length} words`);
console.log(`Day 2: ${day2Words.length} words`);
console.log(`Day 3: ${day3Words.length} words`);
console.log(`Day 4: ${day4Words.length} words`);

let idCounter = 1;
const allWords = [
  ...day1Words.map(w => ({ ...w, id: idCounter++, day: 1 })),
  ...day2Words.map(w => ({ ...w, id: idCounter++, day: 2 })),
  ...day3Words.map(w => ({ ...w, id: idCounter++, day: 3 })),
  ...day4Words.map(w => ({ ...w, id: idCounter++, day: 4 })),
];

console.log(`Total HSK 1 3.0 words compiled: ${allWords.length}`);

const targetFile = path.join(__dirname, '../src/data/hsk1Words.js');

const content = `// HSK 1 Turbo (Standar 3.0) - Complete 500 Vocabulary Words Dataset
// Categorized precisely across a 4-Day Sprint (125 words/day)

export const HSK1_WORDS = ${JSON.stringify(allWords, null, 2)};

export const DAYS_CONFIG = [
  {
    day: 1,
    title: "Hari 1: Fondasi & Kebutuhan Dasar",
    targetWords: "1 - 125",
    desc: "Kuasai kata ganti orang, sistem angka, waktu, salam sopan, dan kata kerja esensial.",
    color: "from-rose-500 to-red-600",
    badge: "Fondasi",
    icon: "Compass",
  },
  {
    day: 2,
    title: "Hari 2: Lingkungan & Kehidupan Nyata",
    targetWords: "126 - 250",
    desc: "Kuasai relasi keluarga, makanan & minuman, tata letak tempat kota, dan objek sekitar.",
    color: "from-amber-500 to-orange-600",
    badge: "Kehidupan",
    icon: "Home",
  },
  {
    day: 3,
    title: "Hari 3: Aktivitas, Belanja & Mobilitas",
    targetWords: "251 - 375",
    desc: "Kuasai aksi harian, transaksi jual-beli uang, naik transportasi umum, dan komunikasi digital.",
    color: "from-emerald-500 to-teal-600",
    badge: "Aktivitas",
    icon: "Zap",
  },
  {
    day: 4,
    title: "Hari 4: Sifat, Logika & Partikel Grammar",
    targetWords: "376 - 500",
    desc: "Kuasai kata sifat, emosi perasaan, preposisi, perbandingan, dan partikel tata bahasa intinya.",
    color: "from-blue-500 to-indigo-600",
    badge: "Kelulusan",
    icon: "Award",
  },
];
`;

fs.writeFileSync(targetFile, content, 'utf-8');
console.log(`Successfully written to ${targetFile}!`);
