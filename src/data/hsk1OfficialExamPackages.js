// Bank 11 Paket Ujian Resmi HSK 1 Standar CTI (汉考国际)
// 100% Mengikuti Standar Resmi: 40 Soal Penuh (20 Menyimak + 20 Membaca), Skor 200, Kelulusan 120 (60%)
// Disertai Gambar Resmi, Transkrip Audio, Pinyin, dan Penjelasan Bahasa Indonesia

import { HSK1_OFFICIAL_H10901 } from './hsk1OfficialH10901.js';

export const HSK1_PACKAGES_METADATA = [
  {
    "id": "h10901",
    "code": "H10901",
    "num": 1,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H10901)",
    "year": "2019",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H10901. Lengkap dengan 40 butir soal asli, 25 soal bergambar, dan audio narasi standar."
  },
  {
    "id": "h10902",
    "code": "H10902",
    "num": 2,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H10902)",
    "year": "2019",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H10902. Dilengkapi foto autentik belanja pakaian, taksi, dan dialog aktivitas harian."
  },
  {
    "id": "h11003",
    "code": "H11003",
    "num": 3,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11003)",
    "year": "2020",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11003. Fokus pada kata kerja aksi, cuaca, stasiun kereta, dan angka jam."
  },
  {
    "id": "h11004",
    "code": "H11004",
    "num": 4,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11004)",
    "year": "2020",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11004. Soal cerita percakapan sekolah, belanja buah, profesi dokter, dan waktu."
  },
  {
    "id": "h11005",
    "code": "H11005",
    "num": 5,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11005)",
    "year": "2020",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11005. Menguji pengenalan karakter Hanzi, kata tanya 怎么 / 谁, dan partikel kata kerja."
  },
  {
    "id": "h11006",
    "code": "H11006",
    "num": 6,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11006)",
    "year": "2021",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11006. Percakapan situasional di restoran, rumah sakit, dan rumah teman."
  },
  {
    "id": "h11329",
    "code": "H11329",
    "num": 7,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11329)",
    "year": "2022",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11329. Standar pemutakhiran 3.0 dengan topik transportasi, jadwal, dan keluarga."
  },
  {
    "id": "h11330",
    "code": "H11330",
    "num": 8,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11330)",
    "year": "2022",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11330. Latihan komprehensif mengukur kecepatan baca dan pendengaran kata serapan."
  },
  {
    "id": "h11331",
    "code": "H11331",
    "num": 9,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11331)",
    "year": "2023",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11331. Latihan intensif membedakan bunyi nada, angka, dan arah lokasi."
  },
  {
    "id": "h11332",
    "code": "H11332",
    "num": 10,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11332)",
    "year": "2023",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11332. Menguji kemampuan menalar respon sopan dalam etika percakapan Tionghoa."
  },
  {
    "id": "h11335",
    "code": "H11335",
    "num": 11,
    "title": "Simulasi Ujian Resmi HSK 1 (Set H11335)",
    "year": "2024",
    "tag": "Naskah Asli CTI",
    "desc": "Paket ujian resmi CTI Standar H11335. Edisi terlengkap dengan format modern standar kelulusan internasional."
  }
];

export const HSK1_OFFICIAL_PACKAGES = {
  h10901: HSK1_OFFICIAL_H10901,
  h10902: {
  "examId": "H10902",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H10902)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "audioText": "她的猫",
      "audioPinyin": "Tā de māo",
      "audioArti": "Kucingnya",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio berbunyi '她的猫' (kucingnya). Gambar memperlihatkan seekor anjing (狗), maka pernyataan SALAH (错)."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_2.jpg",
      "audioText": "吃东西",
      "audioPinyin": "Chī dōngxi",
      "audioArti": "Makan sesuatu / santapan",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio berbunyi '吃东西' (makan sesuatu). Gambar memperlihatkan seseorang sedang minum air (喝水), maka pernyataan SALAH (错)."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_3.jpg",
      "audioText": "在商店里",
      "audioPinyin": "Zài shāngdiàn lǐ",
      "audioArti": "Di dalam toko",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio berbunyi '在商店里' (di dalam toko). Gambar memperlihatkan pasien di rumah sakit (医院), maka pernyataan SALAH (错)."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_4.jpg",
      "audioText": "再见",
      "audioPinyin": "Zàijiàn",
      "audioArti": "Selamat tinggal / sampai jumpa",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio berbunyi '再见' (sampai jumpa). Gambar memperlihatkan dua orang melambaikan tangan berpamitan, maka pernyataan BENAR (对)."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_5.jpg",
      "audioText": "请喝茶",
      "audioPinyin": "Qǐng hē chá",
      "audioArti": "Silakan minum teh",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio berbunyi '请喝茶' (silakan minum teh). Gambar memperlihatkan menyajikan cangkir teh hangat, maka pernyataan BENAR (对)."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10902/H1_6.jpg",
      "audioText": "儿子爱吃米饭。",
      "audioPinyin": "Érzi ài chī mǐfàn.",
      "audioArti": "Anak laki-laki suka makan nasi.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio menyebutkan '儿子爱吃米饭' (anak laki-laki suka makan nasi). Gambar B memperlihatkan semangkuk nasi, maka jawaban tepat adalah B."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10902/H1_7.jpg",
      "audioText": "我买了这台电脑。",
      "audioPinyin": "Wǒ mǎi le zhè tái diànnǎo.",
      "audioArti": "Saya membeli komputer ini.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio menyebutkan '买电脑' (membeli komputer). Gambar A memperlihatkan komputer/laptop, maka jawaban tepat adalah A."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10902/H1_8.jpg",
      "audioText": "我看见她买衣服了。",
      "audioPinyin": "Wǒ kànjiàn tā mǎi yīfu le.",
      "audioArti": "Saya melihat dia membeli baju.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Audio menyebutkan '买衣服' (membeli baju). Gambar C memperlihatkan wanita memilih pakaian di toko, maka jawaban tepat adalah C."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10902/H1_9.jpg",
      "audioText": "苹果在桌子上。",
      "audioPinyin": "Píngguǒ zài zhuōzi shàng.",
      "audioArti": "Apel ada di atas meja.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio menyebutkan '苹果在桌子上' (apel di atas meja). Gambar A memperlihatkan buah apel di atas meja, maka jawaban tepat adalah A."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10902/H1_10.jpg",
      "audioText": "北京冬天很冷。",
      "audioPinyin": "Běijīng dōngtiān hěn lěng.",
      "audioArti": "Musim dingin Beijing sangat dingin.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio menyebutkan cuaca sangat dingin '很冷'. Gambar B memperlihatkan salju tebal dan pakaian musim dingin, maka jawaban tepat adalah B."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10902/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne.",
      "audioArti": "Wanita: Halo, kamu di mana?\nPria: Saya sedang di dalam taksi.",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang berada di dalam taksi (出租车). Gambar E memperlihatkan taksi di jalan, maka jawaban tepat adalah E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10902/H1_part1.jpg",
      "audioText": "男：你喜欢什么运动？\n女：我最喜欢踢足球。",
      "audioPinyin": "Nán: Nǐ xǐhuan shénme yùndòng?\nNǚ: Wǒ zuì xǐhuan tī zúqiú.",
      "audioArti": "Pria: Kamu suka olahraga apa?\nWanita: Saya paling suka bermain sepak bola.",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Wanita menyatakan paling suka bermain sepak bola (踢足球). Gambar F memperlihatkan sepak bola, maka jawaban tepat adalah F."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10902/H1_part1.jpg",
      "audioText": "女：小王，这是你女朋友吗？\n男：是，她在医院工作，是医生。",
      "audioPinyin": "Nǚ: Xiǎo Wáng, zhè shì nǐ nǚpéngyou ma?\nNán: Shì, tā zài yīyuàn gōngzuò, shì yīshēng.",
      "audioArti": "Wanita: Xiao Wang, apakah ini pacarmu?\nPria: Ya, dia bekerja di rumah sakit, seorang dokter.",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Pacarnya bekerja sebagai dokter di rumah sakit (医生/医院). Gambar D memperlihatkan dokter wanita, maka jawaban tepat adalah D."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10902/H1_part1.jpg",
      "audioText": "男：这儿的天气怎么样？\n女：很好，不太冷。",
      "audioPinyin": "Nán: Zhèr de tiānqì zěnmeyàng?\nNǚ: Hěn hǎo, bú tài lěng.",
      "audioArti": "Pria: Bagaimana cuaca di sini?\nWanita: Sangat bagus, tidak terlalu dingin.",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Cuaca cerah dan tidak terlalu dingin (天气很好). Gambar B memperlihatkan pemandangan cerah, maka jawaban tepat adalah B."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10902/H1_part1.jpg",
      "audioText": "男：你想喝点儿什么？\n女：我想喝茶。",
      "audioPinyin": "Nán: Nǐ xiǎng hē diǎnr shénme?\nNǚ: Wǒ xiǎng hē chá.",
      "audioArti": "Pria: Kamu mau minum apa?\nWanita: Saya mau minum teh.",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Wanita ingin minum teh (想喝茶). Gambar A memperlihatkan cangkir teh, maka jawaban tepat adalah A."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你下午去哪儿？\n女：我去学校看书。\n问：女的去哪儿？",
      "audioPinyin": "Nán: Nǐ xiàwǔ qù nǎr?\nNǚ: Wǒ qù xuéxiào kàn shū.\nWèn: Nǚ de qù nǎr?",
      "audioArti": "Pria: Sore ini kamu pergi ke mana?\nWanita: Saya pergi ke sekolah membaca buku.\nTanya: Wanita itu pergi ke mana?",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 商店 (shāngdiàn - toko)",
        "B. 医院 (yīyuàn - rumah sakit)",
        "C. 学校 (xuéxiào - sekolah)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab '我去学校看书' (saya pergi ke sekolah membaca buku), maka jawaban tepat adalah C."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这个苹果很大，很好吃。\n男：我也想吃一个。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Zhège píngguǒ hěn dà, hěn hǎochī.\nNán: Wǒ yě xiǎng chī yí gè.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Wanita: Apel ini sangat besar dan enak.\nPria: Saya juga mau makan satu.\nTanya: Pria itu mau makan apa?",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 苹果 (píngguǒ - apel)",
        "B. 米饭 (mǐfàn - nasi)",
        "C. 水果茶 (shuǐguǒchá - teh buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria itu ingin memakan apel yang sedang dibicarakan '我也想吃一个 (苹果)', maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：这是你的狗吗？\n女：不是，这是我朋友的狗。\n问：这是谁的狗？",
      "audioPinyin": "Nán: Zhè shì nǐ de gǒu ma?\nNǚ: Bú shì, zhè shì wǒ péngyou de gǒu.\nWèn: Zhè shì shéi de gǒu?",
      "audioArti": "Pria: Apakah ini anjingmu?\nWanita: Bukan, ini anjing temanku.\nTanya: Ini anjing milik siapa?",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸的 (bàba de - ayah)",
        "B. 老师的 (lǎoshī de - guru)",
        "C. 朋友的 (péngyou de - teman)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab '这是我朋友的狗' (ini anjing teman saya), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：今天是几月几号？\n男：今天是九月十号，星期五。\n问：今天星期几？",
      "audioPinyin": "Nǚ: Jīntiān shì jǐ yuè jǐ hào?\nNán: Jīntiān shì jiǔ yuè shí hào, xīngqīwǔ.\nWèn: Jīntiān xīngqījǐ?",
      "audioArti": "Wanita: Hari ini tanggal berapa bulan berapa?\nPria: Hari ini 10 September, hari Jumat.\nTanya: Hari ini hari apa?",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 星期三 (xīngqīsān - Rabu)",
        "B. 星期四 (xīngqīsì - Kamis)",
        "C. 星期五 (xīngqīwǔ - Jumat)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Pria dengan jelas menyebut '星期五' (hari Jumat), maka jawaban tepat adalah C."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你上午怎么没来？\n女：我生病了，在家里睡觉呢。\n问：女的上午做什么了？",
      "audioPinyin": "Nán: Nǐ shàngwǔ zěnme méi lái?\nNǚ: Wǒ shēngbìng le, zài jiā lǐ shuìjiào ne.\nWèn: Nǚ de shàngwǔ zuò shénme le?",
      "audioArti": "Pria: Kenapa kamu tadi pagi tidak datang?\nWanita: Saya sakit, sedang tidur di rumah.\nTanya: Apa yang dilakukan wanita itu tadi pagi?",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 学习 (xuéxí - belajar)",
        "B. 睡觉 (shuìjiào - tidur)",
        "C. 工作 (gōngzuò - bekerja)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita itu mengatakan dia sakit dan tidur di rumah '在家里睡觉', maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_21.jpg",
      "text": "飞机 (fēijī)",
      "statementText": "飞机 (fēijī - Pesawat Terbang)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata tertulis adalah '飞机' (pesawat), namun gambar memperlihatkan mobil sedan/taksi, maka pernyataan SALAH (错)."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "看书 (kàn shū)",
      "statementText": "看书 (kàn shū - Membaca Buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata '看书' (membaca buku) cocok sempurna dengan gambar orang yang sedang membaca buku, maka BENAR (对)."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "水果 (shuǐguǒ)",
      "statementText": "水果 (shuǐguǒ - Buah-buahan)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata '水果' (buah-buahan) tidak sesuai dengan gambar yang menunjukkan cangkir minuman teh, maka SALAH (错)."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_24.jpg",
      "text": "睡觉 (shuìjiào)",
      "statementText": "睡觉 (shuìjiào - Tidur)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata '睡觉' (tidur) sesuai dengan gambar orang yang sedang terlelap tidur di kasur, maka BENAR (对)."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_25.jpg",
      "text": "下雨 (xià yǔ)",
      "statementText": "下雨 (xià yǔ - Hujan Turun)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata '下雨' (hujan turun) sesuai dengan gambar orang membawa payung di tengah rintik hujan, maka BENAR (对)."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10902/H1_grid_reading.jpg",
      "text": "这些都是张小姐的。\nZhèxiē dōu shì Zhāng xiǎojiě de.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kalimat menyatakan 'ini semua milik Nona Zhang' merujuk pada tumpukan barang/pakaian. Gambar A adalah jawaban yang tepat."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10902/H1_grid_reading.jpg",
      "text": "没关系，不会做没关系。\nMéi guānxi, bú huì zuò méi guānxi.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kalimat menghibur 'tidak apa-apa bila tidak bisa membuat'. Gambar B menunjukkan orang sedang belajar memasak di dapur, maka jawaban tepat adalah B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10902/H1_grid_reading.jpg",
      "text": "10月前我回来，再见。\nShí yuè qián wǒ huílái, zàijiàn.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Kalimat berpamitan sebelum bepergian jauh '再见'. Gambar C memperlihatkan koper di bandara keberangkatan, maka jawaban tepat adalah C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10902/H1_grid_reading.jpg",
      "text": "对不起，今天天气太热了。\nDuìbuqǐ, jīntiān tiānqì tài rè le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kalimat menyebutkan hari ini cuaca terlalu panas (天气太热了). Gambar D memperlihatkan matahari terik dan kipas angin, maka jawaban tepat adalah D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10902/H1_grid_reading.jpg",
      "text": "妈妈，我不爱吃这个菜。\nMāma, wǒ bú ài chī zhège cài.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Seorang anak berkata kepada ibunya tidak suka makan hidangan sayur ini. Gambar F memperlihatkan anak cemberut di meja makan, maka jawaban tepat adalah F."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "医生！医生在哪儿？\nYīshēng! Yīshēng zài nǎr?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 都很好。 (Dōu hěn hǎo - Semua sangat baik)",
        "B. 昨天下午。 (Zuótiān xiàwǔ - Kemarin sore)",
        "C. 那儿。 (Nàr - Di sana)",
        "D. 听你的。 (Tīng nǐ de - Ikut kamu)",
        "E. 后面的人。 (Hòumiàn de rén - Orang di belakang)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Pertanyaan menanyakan lokasi dokter berada (在哪儿), maka jawaban lokasi penunjuk arah yang tepat adalah '那儿' (di sana, C)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "谁在说话？\nShéi zài shuōhuà?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 都很好。 (Dōu hěn hǎo - Semua sangat baik)",
        "B. 昨天下午。 (Zuótiān xiàwǔ - Kemarin sore)",
        "C. 那儿。 (Nàr - Di sana)",
        "D. 听你的。 (Tīng nǐ de - Ikut kamu)",
        "E. 后面的人。 (Hòumiàn de rén - Orang di belakang)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pertanyaan menanyakan siapa yang berbicara (谁), maka jawaban yang menyebutkan orang adalah '后面的人' (orang di belakang, E)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "李先生是什么时候来的？\nLǐ xiānsheng shì shénme shíhou lái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 都很好。 (Dōu hěn hǎo - Semua sangat baik)",
        "B. 昨天下午。 (Zuótiān xiàwǔ - Kemarin sore)",
        "C. 那儿。 (Nàr - Di sana)",
        "D. 听你的。 (Tīng nǐ de - Ikut kamu)",
        "E. 后面的人。 (Hòumiàn de rén - Orang di belakang)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Pertanyaan menanyakan waktu kedatangan (什么时候来的), maka jawaban waktu adalah '昨天下午' (kemarin sore, B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们去下面吃？\nWǒmen qù xiàmiàn chī?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 都很好。 (Dōu hěn hǎo - Semua sangat baik)",
        "B. 昨天下午。 (Zuótiān xiàwǔ - Kemarin sore)",
        "C. 那儿。 (Nàr - Di sana)",
        "D. 听你的。 (Tīng nǐ de - Ikut kamu)",
        "E. 后面的人。 (Hòumiàn de rén - Orang di belakang)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kalimat mengajak makan di lantai bawah. Respon persetujuan yang sopan adalah '听你的' (ikut keputusanmu / terserah kamu, D)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子怎么样？\nZhège bēizi zěnmeyàng?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 都很好。 (Dōu hěn hǎo - Semua sangat baik)",
        "B. 昨天下午。 (Zuótiān xiàwǔ - Kemarin sore)",
        "C. 那儿。 (Nàr - Di sana)",
        "D. 听你的。 (Tīng nǐ de - Ikut kamu)",
        "E. 后面的人。 (Hòumiàn de rén - Orang di belakang)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan kualitas atau keadaan cangkir (怎么样), respon evaluasi positif yang tepat adalah '都很好' (semuanya sangat bagus, A)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 点儿什么？\nNǐ xiǎng [   ] diǎnr shénme?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 岁 (suì - tahun umur)",
        "B. 认识 (rènshi - mengenal)",
        "C. 怎么 (zěnme - bagaimana)",
        "D. 喝 (hē - minum)",
        "E. 几 (jǐ - berapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Konteks menawarkan minuman: '你想喝点儿什么？' (Kamu mau minum apa?). Kata kerja yang tepat adalah '喝' (D)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "老师，您看这 [   ] 本书怎么样？\nLǎoshī, nín kàn zhè [   ] běn shū zěnmeyàng?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 岁 (suì - tahun umur)",
        "B. 认识 (rènshi - mengenal)",
        "C. 怎么 (zěnme - bagaimana)",
        "D. 喝 (hē - minum)",
        "E. 几 (jǐ - beberapa / berapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Di depan kata satuan '本' (buku), kata bilangan yang tepat untuk 'beberapa buku ini' adalah '几' (E)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年五 [   ] 了。\nWǒ érzi jīnnián wǔ [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 岁 (suì - tahun umur)",
        "B. 认识 (rènshi - mengenal)",
        "C. 怎么 (zěnme - bagaimana)",
        "D. 喝 (hē - minum)",
        "E. 几 (jǐ - berapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menyatakan usia anak laki-laki '5 tahun': '五岁了'. Kata satuan usia yang tepat adalah '岁' (A)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你。\nHěn gāoxìng [   ] nǐ.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 岁 (suì - tahun umur)",
        "B. 认识 (rènshi - mengenal)",
        "C. 怎么 (zěnme - bagaimana)",
        "D. 喝 (hē - minum)",
        "E. 几 (jǐ - berapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Ungkapan salam perkenalan standar Mandarin: '很高兴认识你' (Senang berkenalan denganmu). Kata yang tepat adalah '认识' (B)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没去上班？\nNǐ jīntiān [   ] méi qù shàngbān?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 岁 (suì - tahun umur)",
        "B. 认识 (rènshi - mengenal)",
        "C. 怎么 (zěnme - kenapa / bagaimana)",
        "D. 喝 (hē - minum)",
        "E. 几 (jǐ - berapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Kata tanya alasan 'kenapa / mengapa kamu tidak pergi kerja?': '你怎么没去上班？'. Kata yang tepat adalah '怎么' (C)."
    }
  ]
},
  h11003: {
  "examId": "H11003",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11003)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h11003/H1_1.jpg",
      "audioText": "太热了",
      "audioPinyin": "Tài rè le",
      "audioArti": "Terlalu panas",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio berbunyi 太热了 (terlalu panas), gambar menunjukkan cuaca salju dingin (冷), maka SALAH."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h11003/H1_2.jpg",
      "audioText": "三个杯子",
      "audioPinyin": "Sān gè bēizi",
      "audioArti": "Tiga buah cangkir",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio berbunyi 三个杯子 (3 cangkir), gambar memperlihatkan 3 buah cangkir, maka BENAR."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h11003/H1_3.jpg",
      "audioText": "读书",
      "audioPinyin": "Dú shū",
      "audioArti": "Membaca buku",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio berbunyi 读书 (membaca buku), gambar memperlihatkan anak membaca buku, maka BENAR."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h11003/H1_4.jpg",
      "audioText": "吃菜",
      "audioPinyin": "Chī cài",
      "audioArti": "Makan hidangan",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio berbunyi 吃菜, gambar memperlihatkan orang minum air (喝水), maka SALAH."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h11003/H1_5.jpg",
      "audioText": "在医院",
      "audioPinyin": "Zài yīyuàn",
      "audioArti": "Di rumah sakit",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio berbunyi 在医院, gambar memperlihatkan orang berbelanja di toko baju (买衣服), maka SALAH."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "我会做饭。",
      "audioPinyin": "Wǒ huì zuòfàn.",
      "audioArti": "Saya bisa memasak.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Pernyataan memasak (做饭), gambar C memperlihatkan wajan dan memasak."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "你好，这个电视多少钱？",
      "audioPinyin": "Nǐ hǎo, zhège diànshì duōshao qián?",
      "audioArti": "Halo, televisi ini berapa harganya?",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan harga TV (电视), gambar A memperlihatkan televisi."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "他妈妈是医生。",
      "audioPinyin": "Tā māma shì yīshēng.",
      "audioArti": "Ibunya adalah seorang dokter.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Profesi dokter (医生), gambar C memperlihatkan dokter di klinik."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "我今天开车回家。",
      "audioPinyin": "Wǒ jīntiān kāichē huíjiā.",
      "audioArti": "Hari ini saya menyetir mobil pulang.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyetir mobil (开车), gambar B memperlihatkan mobil sedan."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "这个衣服太小了。",
      "audioPinyin": "Zhège yīfu tài xiǎo le.",
      "audioArti": "Baju ini terlalu kecil.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Baju kekecilan (衣服太小), gambar C memperlihatkan mencoba baju ketat."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
},
  h11004: {
  "examId": "H11004",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11004)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_1.png",
      "audioText": "三本书",
      "audioPinyin": "Sān běn shū",
      "audioArti": "Tiga buah buku",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio menyebutkan 三本书 (3 jilid buku), gambar menampilkan 3 buku bertumpuk, BENAR."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_2.png",
      "audioText": "对不起",
      "audioPinyin": "Duìbuqǐ",
      "audioArti": "Maaf",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio meminta maaf (对不起), gambar memperlihatkan orang tertawa gembira, SALAH."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_3.png",
      "audioText": "很漂亮",
      "audioPinyin": "Hěn piàoliang",
      "audioArti": "Sangat cantik",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio memuji cantik (很漂亮), gambar gaun indah, BENAR."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_4.png",
      "audioText": "买衣服",
      "audioPinyin": "Mǎi yīfu",
      "audioArti": "Membeli baju",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Audio membeli baju, gambar makan mie di restoran, SALAH."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_5.png",
      "audioText": "二零零八年",
      "audioPinyin": "Èr líng líng bā nián",
      "audioArti": "Tahun 2008",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Audio menyebutkan tahun 2008, kalender tertulis 2008, BENAR."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "他在睡觉呢。",
      "audioPinyin": "Tā zài shuìjiào ne.",
      "audioArti": "Dia sedang tidur.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Aktivitas tidur (睡觉), gambar A orang tidur pulas di ranjang."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "你怎么了，不高兴吗？",
      "audioPinyin": "Nǐ zěnme le, bù gāoxìng ma?",
      "audioArti": "Kamu kenapa, tidak senang?",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Raut wajah sedih/cemberut (不高兴), gambar B."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "太热了，有水吗？我想喝水。",
      "audioPinyin": "Tài rè le, yǒu shuǐ ma? Wǒ xiǎng hē shuǐ.",
      "audioArti": "Terlalu panas, ada air? Saya mau minum.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Minum air karena gerah (喝水), gambar C."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "现在是下午一点十分。",
      "audioPinyin": "Xiànzài shì xiàwǔ yì diǎn shí fēn.",
      "audioArti": "Sekarang jam 1 lewat 10 menit siang.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Jam penunjuk waktu 1:10 (一点十分), gambar A."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "他去火车站了。",
      "audioPinyin": "Tā qù huǒchēzhàn le.",
      "audioArti": "Dia pergi ke stasiun kereta.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Stasiun kereta api (火车站), gambar B."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
},
  h11005: {
  "examId": "H11005",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11005)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_1.png",
      "audioText": "打电话",
      "audioPinyin": "Dǎ diànhuà",
      "audioArti": "Menelepon",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menelepon (打电话), gambar orang memegang telepon, BENAR."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_2.png",
      "audioText": "下雪了",
      "audioPinyin": "Xià xuě le",
      "audioArti": "Salju turun",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Salju turun (下雪), gambar matahari terik pantai, SALAH."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_4.png",
      "audioText": "吃米饭",
      "audioPinyin": "Chī mǐfàn",
      "audioArti": "Makan nasi",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Makan nasi (吃米饭), gambar semangkuk nasi dan sumpit, BENAR."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_3.png",
      "audioText": "看电影",
      "audioPinyin": "Kàn diànyǐng",
      "audioArti": "Menonton film",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Nonton bioskop, gambar menyetir mobil di jalan, SALAH."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_3.jpg",
      "audioText": "在商场",
      "audioPinyin": "Zài shāngchǎng",
      "audioArti": "Di pusat perbelanjaan",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Berada di toko mall (商场), gambar toko pakaian, BENAR."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "桌子上有一只猫。",
      "audioPinyin": "Zhuōzi shàng yǒu yì zhī māo.",
      "audioArti": "Di atas meja ada seekor kucing.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kucing di meja (一只猫), gambar B."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "我们明天坐飞机去。",
      "audioPinyin": "Wǒmen míngtiān zuò fēijī qù.",
      "audioArti": "Besok kita naik pesawat pergi.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pesawat terbang (飞机), gambar A."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "他在学校学汉字。",
      "audioPinyin": "Tā zài xuéxiào xué hànzì.",
      "audioArti": "Dia belajar huruf Hanzi di sekolah.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Belajar Hanzi (学汉字), gambar C."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "妈妈喜欢喝茶。",
      "audioPinyin": "Māma xǐhuan hē chá.",
      "audioArti": "Ibu suka minum teh.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Cangkir teh (喝茶), gambar A."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "医生在看病。",
      "audioPinyin": "Yīshēng zài kànbìng.",
      "audioArti": "Dokter sedang memeriksa pasien.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Pemeriksaan medis dokter (医生), gambar B."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
},
  h11006: {
  "examId": "H11006",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11006)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "audioText": "看书",
      "audioPinyin": "Kàn shū",
      "audioArti": "Membaca buku",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Membaca buku (看书), gambar buku terbuka, BENAR."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_3.png",
      "audioText": "开车",
      "audioPinyin": "Kāi chē",
      "audioArti": "Menyetir mobil",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyetir mobil, gambar pesawat meluncur, SALAH."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_5.png",
      "audioText": "下雨",
      "audioPinyin": "Xià yǔ",
      "audioArti": "Hujan",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Hujan rintik (下雨), gambar payung basah, BENAR."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_4.png",
      "audioText": "吃面条",
      "audioPinyin": "Chī miàntiáo",
      "audioArti": "Makan mie",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Makan mie (吃面条), gambar mangkuk mie, BENAR."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_24.jpg",
      "audioText": "睡觉",
      "audioPinyin": "Shuìjiào",
      "audioArti": "Tidur",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Tidur nyenyak (睡觉), gambar kasur kamar tidur, BENAR."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "今天天气很好，不太冷。",
      "audioPinyin": "Jīntiān tiānqì hěn hǎo, bú tài lěng.",
      "audioArti": "Hari ini cuaca sangat bagus, tidak terlalu dingin.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Cuaca cerah (天气很好), gambar B."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "我想买这件衣服。",
      "audioPinyin": "Wǒ xiǎng mǎi zhè jiàn yīfu.",
      "audioArti": "Saya ingin membeli baju ini.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli baju (买衣服), gambar C."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "他爸爸是老师。",
      "audioPinyin": "Tā bàba shì lǎoshī.",
      "audioArti": "Ayahnya adalah seorang guru.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Profesi guru di kelas (老师), gambar A."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "我们坐出租车去火车站。",
      "audioPinyin": "Wǒmen zuò chūzūchē qù huǒchēzhàn.",
      "audioArti": "Kita naik taksi ke stasiun kereta.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Taksi di jalan (出租车), gambar B."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "桌子上有很多苹果。",
      "audioPinyin": "Zhuōzi shàng yǒu hěn duō píngguǒ.",
      "audioArti": "Di atas meja ada banyak apel.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Apel di meja (苹果), gambar A."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
},
  h11329: {
  "examId": "H11329",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11329)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_3.png",
      "audioText": "坐飞机",
      "audioPinyin": "Zuò fēijī",
      "audioArti": "Naik pesawat",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Naik pesawat (坐飞机), gambar pesawat di bandara, BENAR."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_5.jpg",
      "audioText": "喝茶",
      "audioPinyin": "Hē chá",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menikmati teh (喝茶), gambar cangkir teh, BENAR."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_1.png",
      "audioText": "做饭",
      "audioPinyin": "Zuò fàn",
      "audioArti": "Memasak nasi",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Memasak hidangan, gambar mengangkat gagang telepon, SALAH."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_5.png",
      "audioText": "下雨了",
      "audioPinyin": "Xià yǔ le",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Hujan turun (下雨), gambar payung di jalan, BENAR."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "audioText": "看电脑",
      "audioPinyin": "Kàn diànnǎo",
      "audioArti": "Melihat komputer",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer/laptop (电脑), gambar laptop, BENAR."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "我们去商店买东西。",
      "audioPinyin": "Wǒmen qù shāngdiàn mǎi dōngxi.",
      "audioArti": "Kita pergi ke toko belanja.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Belanja di toko (买东西), gambar C."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "这只小狗很可爱。",
      "audioPinyin": "Zhè zhī xiǎogǒu hěn kě'ài.",
      "audioArti": "Anjing kecil ini sangat lucu.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Anjing peliharaan lucu (小狗), gambar A."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "她现在在医院工作。",
      "audioPinyin": "Tā xiànzài zài yīyuàn gōngzuò.",
      "audioArti": "Dia sekarang bekerja di rumah sakit.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Bekerja di RS (在医院工作), gambar B."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "现在是上午十点。",
      "audioPinyin": "Xiànzài shì shàngwǔ shí diǎn.",
      "audioArti": "Sekarang jam 10 pagi.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Jam 10:00 (十点), gambar A jam dinding."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "外面下大雪了。",
      "audioPinyin": "Wàimiàn xià dà xuě le.",
      "audioArti": "Di luar turun salju lebat.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Salju turun (下大雪), gambar B pemandangan salju."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
},
  h11330: {
  "examId": "H11330",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11330)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "audioText": "在看书",
      "audioPinyin": "Zài kàn shū",
      "audioArti": "Sedang membaca buku",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Sedang membaca buku (在看书), gambar buku terbuka, BENAR."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_4.png",
      "audioText": "吃水果",
      "audioPinyin": "Chī shuǐguǒ",
      "audioArti": "Makan buah",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Makan buah, gambar makan mie semangkuk, SALAH."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_8.jpg",
      "audioText": "买衣服",
      "audioPinyin": "Mǎi yīfu",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Membeli baju (买衣服), gambar wanita memilih baju, BENAR."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_10.jpg",
      "audioText": "天气冷",
      "audioPinyin": "Tiānqì lěng",
      "audioArti": "Cuaca dingin",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Cuaca dingin membeku (天气冷), gambar mantel musim dingin, BENAR."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_3.png",
      "audioText": "打车",
      "audioPinyin": "Dǎ chē",
      "audioArti": "Naik taksi",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Naik taksi, gambar pesawat terbang di udara, SALAH."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "我儿子喜欢喝牛奶。",
      "audioPinyin": "Wǒ érzi xǐhuan hē niúnǎi.",
      "audioArti": "Anak laki-laki saya suka minum susu.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Minum susu putih (喝牛奶), gambar B."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "他开车去学校了。",
      "audioPinyin": "Tā kāichē qù xuéxiào le.",
      "audioArti": "Dia menyetir mobil ke sekolah.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Mobil melaju (开车), gambar A."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "李老师在写汉字。",
      "audioPinyin": "Lǐ lǎoshī zài xiě hànzì.",
      "audioArti": "Guru Li sedang menulis karakter Hanzi.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menulis kaligrafi/Hanzi (写汉字), gambar C."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "今天天气太热了。",
      "audioPinyin": "Jīntiān tiānqì tài rè le.",
      "audioArti": "Hari ini cuaca terlalu panas.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kipas angin dan matahari (太热), gambar B."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "我买了一台新电脑。",
      "audioPinyin": "Wǒ mǎi le yì tái xīn diànnǎo.",
      "audioArti": "Saya membeli satu laptop baru.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer baru (新电脑), gambar A."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
},
  h11331: {
  "examId": "H11331",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11331)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_9.jpg",
      "audioText": "三个苹果",
      "audioPinyin": "Sān gè píngguǒ",
      "audioArti": "Tiga buah apel",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Apel di meja (三个苹果), gambar buah apel segar, BENAR."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_1.png",
      "audioText": "在睡觉",
      "audioPinyin": "Zài shuìjiào",
      "audioArti": "Sedang tidur",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Sedang tidur, gambar berdiri menelepon, SALAH."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_2.png",
      "audioText": "在火车站",
      "audioPinyin": "Zài huǒchēzhàn",
      "audioArti": "Di stasiun kereta",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Di stasiun kereta, gambar dua orang di rumah, SALAH."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_5.jpg",
      "audioText": "听音乐",
      "audioPinyin": "Tīng yīnyuè",
      "audioArti": "Mendengar musik",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Mendengarkan musik, gambar menyeduh teh cangkir, SALAH."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_5.png",
      "audioText": "下雨天",
      "audioPinyin": "Xià yǔ tiān",
      "audioArti": "Hari hujan",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Hari hujan (下雨天), gambar gerimis payung, BENAR."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "我喜欢吃米饭和中国菜。",
      "audioPinyin": "Wǒ xǐhuan chī mǐfàn hé zhōngguócài.",
      "audioArti": "Saya suka makan nasi dan masakan Tiongkok.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Makan nasi dan lauk masakan (吃米饭), gambar C."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "他在医院前面等出租车。",
      "audioPinyin": "Tā zài yīyuàn qiánmiàn děng chūzūchē.",
      "audioArti": "Dia menunggu taksi di depan rumah sakit.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Taksi di jalan (出租车), gambar B."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "你看，小狗在桌子下面。",
      "audioPinyin": "Nǐ kàn, xiǎogǒu zài zhuōzi xiàmiàn.",
      "audioArti": "Lihatlah, anak anjing ada di bawah meja.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Anjing di bawah meja (小狗), gambar A."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "请喝一杯热茶。",
      "audioPinyin": "Qǐng hē yì bēi rè chá.",
      "audioArti": "Silakan minum secangkir teh hangat.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Cangkir teh hangat (一杯热茶), gambar C."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "这是我买的汉语书。",
      "audioPinyin": "Zhè shì wǒ mǎi de hànyǔ shū.",
      "audioArti": "Ini buku bahasa Mandarin yang saya beli.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Buku teks bahasa (汉语书), gambar A."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
},
  h11332: {
  "examId": "H11332",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11332)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "audioText": "在看电视",
      "audioPinyin": "Zài kàn diànshì",
      "audioArti": "Sedang nonton TV",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menonton layar monitor TV (看电视), gambar layar monitor, BENAR."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_10.jpg",
      "audioText": "很冷",
      "audioPinyin": "Hěn lěng",
      "audioArti": "Sangat dingin",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Suhu dingin membeku (很冷), gambar salju, BENAR."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "audioText": "写汉字",
      "audioPinyin": "Xiě hànzì",
      "audioArti": "Menulis Hanzi",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menulis Hanzi, gambar hanya memegang membaca buku teks, SALAH."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_9.jpg",
      "audioText": "买苹果",
      "audioPinyin": "Mǎi píngguǒ",
      "audioArti": "Membeli apel",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Buah apel (苹果), gambar buah apel segar, BENAR."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_3.png",
      "audioText": "坐飞机",
      "audioPinyin": "Zuò fēijī",
      "audioArti": "Naik pesawat terbang",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pesawat terbang di landasan (飞机), BENAR."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "他在家睡觉呢，没去学校。",
      "audioPinyin": "Tā zài jiā shuìjiào ne, méi qù xuéxiào.",
      "audioArti": "Dia tidur di rumah, tidak ke sekolah.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Tidur di ranjang rumah (睡觉), gambar B."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "这台电脑多少钱？",
      "audioPinyin": "Zhè tái diànnǎo duōshao qián?",
      "audioArti": "Komputer ini berapa harganya?",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer laptop meja (电脑), gambar A."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "小张在饭店吃米饭。",
      "audioPinyin": "Xiǎo Zhāng zài fàndiàn chī mǐfàn.",
      "audioArti": "Xiao Zhang makan nasi di restoran.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Makan nasi di restoran (吃米饭), gambar C."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "外面下大雨了，你带伞了吗？",
      "audioPinyin": "Wàimiàn xià dàyǔ le, nǐ dài sǎn le ma?",
      "audioArti": "Di luar hujan deras, kamu bawa payung?",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan deras dan payung (下雨), gambar B."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "我想买这件漂亮的衣服。",
      "audioPinyin": "Wǒ xiǎng mǎi zhè jiàn piàoliang de yīfu.",
      "audioArti": "Saya ingin membeli baju yang cantik ini.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Baju pakaian cantik (衣服), gambar C."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
},
  h11335: {
  "examId": "H11335",
  "title": "Simulasi Ujian Resmi HSK 1 (Set H11335)",
  "level": 1,
  "totalQuestions": 40,
  "maxScore": 200,
  "passScore": 120,
  "durationMinutes": 35,
  "audioUrl": "/exams/h10901/H10901.mp3",
  "listeningQuestions": [
    {
      "id": 1,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_1.png",
      "audioText": "打电话",
      "audioPinyin": "Dǎ diànhuà",
      "audioArti": "Menelepon",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menelepon seseorang (打电话), gambar telepon, BENAR."
    },
    {
      "id": 2,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "audioText": "看书学习",
      "audioPinyin": "Kàn shū xuéxí",
      "audioArti": "Membaca dan belajar",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Membaca buku pelajaran (看书学习), gambar membaca buku, BENAR."
    },
    {
      "id": 3,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_10.jpg",
      "audioText": "天气很热",
      "audioPinyin": "Tiānqì hěn rè",
      "audioArti": "Cuaca sangat panas",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Cuaca panas, gambar pakaian mantel musim dingin salju, SALAH."
    },
    {
      "id": 4,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10902/H1_5.jpg",
      "audioText": "喝热茶",
      "audioPinyin": "Hē rè chá",
      "audioArti": "Minum teh hangat",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Minum secangkir teh hangat (喝热茶), BENAR."
    },
    {
      "id": 5,
      "part": "Part I (听力第一部分 - Benar / Salah Bergambar)",
      "type": "image_tf",
      "image": "/exams/h10901/H1_3.png",
      "audioText": "坐出租车",
      "audioPinyin": "Zuò chūzūchē",
      "audioArti": "Naik taksi",
      "prompt": "Dengarkan audio Mandarin, lalu tentukan apakah gambar di bawah ini BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Naik taksi, gambar pesawat terbang komersil, SALAH."
    },
    {
      "id": 6,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_6.png",
      "audioText": "我看见她昨天去买衣服了。",
      "audioPinyin": "Wǒ kànjiàn tā zuótiān qù mǎi yīfu le.",
      "audioArti": "Saya melihat dia kemarin pergi membeli baju.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Belanja pakaian wanita (买衣服), gambar C."
    },
    {
      "id": 7,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_7.jpg",
      "audioText": "今天星期天，我们在家看电影。",
      "audioPinyin": "Jīntiān xīngqītiān, wǒmen zài jiā kàn diànyǐng.",
      "audioArti": "Hari ini hari Minggu, kita nonton film di rumah.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Nonton film di TV rumah (看电影), gambar A."
    },
    {
      "id": 8,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_8.jpg",
      "audioText": "我喜欢吃苹果，不喜欢吃西瓜。",
      "audioPinyin": "Wǒ xǐhuan chī píngguǒ, bù xǐhuan chī xīguā.",
      "audioArti": "Saya suka makan apel, tidak suka makan semangka.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Buah apel (吃苹果), gambar B."
    },
    {
      "id": 9,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_9.jpg",
      "audioText": "他是一名好医生。",
      "audioPinyin": "Tā shì yì míng hǎo yīshēng.",
      "audioArti": "Dia adalah seorang dokter yang baik.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Dokter berjas putih (医生), gambar C."
    },
    {
      "id": 10,
      "part": "Part II (听力第二部分 - Pilihan 3 Gambar A/B/C)",
      "type": "image_abc",
      "image": "/exams/h10901/H1_10.jpg",
      "audioText": "火车站前面有很多出租车。",
      "audioPinyin": "Huǒchēzhàn qiánmiàn yǒu hěn duō chūzūchē.",
      "audioArti": "Di depan stasiun kereta ada banyak taksi.",
      "prompt": "Dengarkan audio, lalu pilih gambar (A, B, atau C) yang paling sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Stasiun kereta api dan taksi (出租车), gambar B."
    },
    {
      "id": 11,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：喂，你在哪儿呢？\n男：我在出租车上呢，快到了。",
      "audioPinyin": "Nǚ: Wèi, nǐ zài nǎr ne?\nNán: Wǒ zài chūzūchē shàng ne, kuài dào le.",
      "audioArti": "Di taksi",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Pria menjawab sedang di taksi (出租车). Jawaban: E."
    },
    {
      "id": 12,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：今天下午天气怎么样？\n女：下雨了，我们在家看书吧。",
      "audioPinyin": "Nán: Jīntiān xiàwǔ tiānqì zěnmeyàng?\nNǚ: Xiàyǔ le, wǒmen zài jiā kàn shū ba.",
      "audioArti": "Hujan turun",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan turun (下雨), tetap di rumah. Jawaban: B."
    },
    {
      "id": 13,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：你喜欢喝茶还是喝水？\n男：我最喜欢喝中国茶。",
      "audioPinyin": "Nán: Nǐ xǐhuan hē chá háishi hē shuǐ?\nNǚ: Wǒ zuì xǐhuan hē zhōngguóchá.",
      "audioArti": "Minum teh",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria suka minum teh Tiongkok (喝茶). Jawaban: A."
    },
    {
      "id": 14,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "男：小李，你的猫真漂亮！\n女：谢谢，它很喜欢吃鱼。",
      "audioPinyin": "Nán: Xiǎo Lǐ, nǐ de māo zhēn piàoliang!\nNǚ: Xièxie, tā hěn xǐhuan chī yú.",
      "audioArti": "Kucing makan ikan",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Kucing peliharaan (猫/鱼). Jawaban: D."
    },
    {
      "id": 15,
      "part": "Part III (听力第三部分 - Dialog Percakapan Gambar A-F)",
      "type": "audio_dialog_image",
      "gridImage": "/exams/h10901/H1_part1.jpg",
      "audioText": "女：这个衣服多少钱？\n男：八十块钱，很便宜。",
      "audioPinyin": "Nǚ: Zhège yīfu duōshao qián?\nNán: Bāshí kuài qián, hěn piányi.",
      "audioArti": "Membeli pakaian",
      "prompt": "Dengarkan dialog di atas, lalu pilih gambar (A - F) yang sesuai:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 5,
      "points": 5,
      "explanation": "Membeli baju di toko pakaian (衣服/八十块). Jawaban: F."
    },
    {
      "id": 16,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：请问，张老师在学校吗？\n女：在，她在办公室呢。\n问：张老师在哪儿？",
      "audioPinyin": "Nán: Qǐngwèn, Zhāng lǎoshī zài xuéxiào ma?\nNǚ: Zài, tā zài bàngōngshì ne.\nWèn: Zhāng lǎoshī zài nǎr?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 医院 (rumah sakit)",
        "B. 学校 (sekolah)",
        "C. 商店 (toko)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Guru Zhang berada di sekolah (学校) di dalam ruang kantor, maka jawaban tepat adalah B."
    },
    {
      "id": 17,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：你想吃点儿什么？\n男：我想吃米饭和中国菜。\n问：男的想吃什么？",
      "audioPinyin": "Nǚ: Nǐ xiǎng chī diǎnr shénme?\nNán: Wǒ xiǎng chī mǐfàn hé zhōngguócài.\nWèn: Nán de xiǎng chī shénme?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 米饭 (nasi)",
        "B. 面条 (mie)",
        "C. 水果 (buah)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Pria menjawab ingin makan nasi (米饭), maka jawaban tepat adalah A."
    },
    {
      "id": 18,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你什么时候去北京？\n女：下个星期五去。\n问：女的什么时候去北京？",
      "audioPinyin": "Nán: Nǐ shénme shíhou qù Běijīng?\nNǚ: Xià gè xīngqīwǔ qù.\nWèn: Nǚ de shénme shíhou qù Běijīng?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 昨天 (kemarin)",
        "B. 明天 (besok)",
        "C. 下星期五 (Jumat depan)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Wanita menjawab pergi Jumat depan (下星期五), maka jawaban tepat adalah C."
    },
    {
      "id": 19,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "女：这是谁的电脑？很漂亮。\n男：这是我爸爸买的电脑。\n问：这是谁买的电脑？",
      "audioPinyin": "Nǚ: Zhè shì shéi de diànnǎo? Hěn piàoliang.\nNán: Zhè shì wǒ bàba mǎi de diànnǎo.\nWèn: Zhè shì shéi mǎi de diànnǎo?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 爸爸 (ayah)",
        "B. 朋友 (teman)",
        "C. 老师 (guru)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Komputer dibeli oleh ayah (爸爸买的), maka jawaban tepat adalah A."
    },
    {
      "id": 20,
      "part": "Part IV (听力第四部分 - Tanya Jawab Dialog Pendek)",
      "type": "audio_dialog_mc",
      "audioText": "男：你现在住在哪儿？\n女：我住在北京，很高兴认识你。\n问：女的现在住在哪里？",
      "audioPinyin": "Nán: Nǐ xiànzài zhù zài nǎr?\nNǚ: Wǒ zhù zài Běijīng, hěn gāoxìng rènshi nǐ.\nWèn: Nǚ de xiànzài zhù zài nǎlǐ?",
      "audioArti": "Tanya Jawab Dialog Percakapan Resmi",
      "prompt": "Dengarkan audio percakapan dan pertanyaan, lalu pilih jawaban yang tepat:",
      "options": [
        "A. 上海 (Shanghai)",
        "B. 北京 (Beijing)",
        "C. 医院 (rumah sakit)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Wanita menjawab tinggal di Beijing (住在北京), maka jawaban tepat adalah B."
    }
  ],
  "readingQuestions": [
    {
      "id": 21,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_22.jpg",
      "text": "书 (shū - buku)",
      "statementText": "书 (shū - buku)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 书 (buku) sesuai dengan gambar buku, BENAR."
    },
    {
      "id": 22,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_1.jpg",
      "text": "狗 (gǒu - anjing)",
      "statementText": "狗 (gǒu - anjing)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 狗 (anjing) cocok dengan gambar anjing, BENAR."
    },
    {
      "id": 23,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10901/H1_4.png",
      "text": "喝水 (hē shuǐ - minum air)",
      "statementText": "喝水 (hē shuǐ - minum air)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 喝水 (minum), gambar makan nasi, SALAH."
    },
    {
      "id": 24,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_7.jpg",
      "text": "电脑 (diànnǎo - komputer)",
      "statementText": "电脑 (diànnǎo - komputer)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Kata 电脑 (komputer) cocok dengan laptop, BENAR."
    },
    {
      "id": 25,
      "part": "Part I (阅读第一部分 - Kata & Gambar Benar/Salah)",
      "type": "reading_tf",
      "image": "/exams/h10902/H1_23.jpg",
      "text": "苹果 (píngguǒ - apel)",
      "statementText": "苹果 (píngguǒ - apel)",
      "prompt": "Perhatikan kata dan gambar di bawah ini, tentukan apakah BENAR (√) atau SALAH (×):",
      "options": [
        "Benar (对 / √)",
        "Salah (错 / ×)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Kata 苹果 (apel), gambar cangkir teh, SALAH."
    },
    {
      "id": 26,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他坐在椅子上看书。\nTā zuò zài yǐzi shàng kàn shū.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Duduk di kursi membaca buku. Gambar A."
    },
    {
      "id": 27,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "今天下大雨，天气很冷。\nJīntiān xià dàyǔ, tiānqì hěn lěng.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Hujan lebat cuaca dingin. Gambar B."
    },
    {
      "id": 28,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "我想买这台新电脑。\nWǒ xiǎng mǎi zhè tái xīn diànnǎo.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Membeli laptop komputer baru. Gambar C."
    },
    {
      "id": 29,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "桌子上有很多新鲜水果。\nZhuōzi shàng yǒu hěn duō xīnxiān shuǐguǒ.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Buah-buahan segar di atas meja. Gambar D."
    },
    {
      "id": 30,
      "part": "Part II (阅读第二部分 - Kalimat Mencocokkan Gambar A-F)",
      "type": "reading_image_match",
      "gridImage": "/exams/h10901/H1_part2.jpg",
      "text": "他们开着车去学校了。\nTāmen kāi zhe chē qù xuéxiào le.",
      "prompt": "Pilih gambar (A - F) yang paling tepat mendeskripsikan kalimat di atas:",
      "options": [
        "Gambar A",
        "Gambar B",
        "Gambar C",
        "Gambar D",
        "Gambar E",
        "Gambar F"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengendarai mobil ke sekolah. Gambar E."
    },
    {
      "id": 31,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你在哪儿工作？\nNǐ zài nǎr gōngzuò?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Menanyakan tempat bekerja (在哪儿工作), respon tempat adalah di sekolah (A)."
    },
    {
      "id": 32,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "这个杯子多少钱？\nZhège bēizi duōshao qián?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Menanyakan harga uang (多少钱), respon harga adalah 20 yuan (D)."
    },
    {
      "id": 33,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "你爸爸身体好吗？\nNǐ bàba shēntǐ hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menanyakan kesehatan ayah (身体好吗), respon kesopanan adalah '很好，谢谢' (B)."
    },
    {
      "id": 34,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "他什么时候回来的？\nTā shénme shíhou huílái de?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Menanyakan waktu kembali (什么时候), respon waktu adalah kemarin sore (C)."
    },
    {
      "id": 35,
      "part": "Part III (阅读第三部分 - Menjodohkan Tanya & Jawab)",
      "type": "reading_qa_match",
      "text": "我们明天去买书，好吗？\nWǒmen míngtiān qù mǎi shū, hǎo ma?",
      "prompt": "Pilih jawaban respon yang paling tepat untuk pertanyaan di atas:",
      "options": [
        "A. 我在学校工作。 (Wǒ zài xuéxiào gōngzuò)",
        "B. 很好，谢谢。 (Hěn hǎo, xièxie)",
        "C. 昨天下午。 (Zuótiān xiàwǔ)",
        "D. 二十块钱。 (Èrshí kuài qián)",
        "E. 好的，没问题。 (Hǎo de, méi wèntí)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Mengajak pergi membeli buku, respon persetujuan adalah '好的，没问题' (E)."
    },
    {
      "id": 36,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你想 [   ] 水还是喝茶？\nNǐ xiǎng [   ] shuǐ háishi hē chá?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 0,
      "points": 5,
      "explanation": "Konteks air/teh memerlukan kata kerja '喝' (minum, A)."
    },
    {
      "id": 37,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "我儿子今年八 [   ] 了。\nWǒ érzi jīnnián bā [   ] le.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 1,
      "points": 5,
      "explanation": "Menyatakan usia 8 tahun: '八岁了' (B)."
    },
    {
      "id": 38,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "很高兴 [   ] 你，我叫王明。\nHěn gāoxìng [   ] nǐ, wǒ jiào Wáng Míng.",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 2,
      "points": 5,
      "explanation": "Ungkapan perkenalan '很高兴认识你' (C)."
    },
    {
      "id": 39,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你喜欢 [   ] 音乐吗？\nNǐ xǐhuan [   ] yīnyuè ma?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 3,
      "points": 5,
      "explanation": "Mendengarkan musik '听音乐' (D)."
    },
    {
      "id": 40,
      "part": "Part IV (阅读第四部分 - Melengkapi Kalimat Rumpang)",
      "type": "reading_cloze",
      "text": "你今天 [   ] 没来学校上课？\nNǐ jīntiān [   ] méi lái xuéxiào shàngkè?",
      "prompt": "Pilih kata yang paling tepat untuk melengkapi bagian rumpang di atas:",
      "options": [
        "A. 喝 (hē - minum)",
        "B. 岁 (suì - tahun umur)",
        "C. 认识 (rènshi - mengenal)",
        "D. 听 (tīng - dengar)",
        "E. 怎么 (zěnme - kenapa)"
      ],
      "answer": 4,
      "points": 5,
      "explanation": "Menanyakan alasan 'kenapa tidak datang ke sekolah': '怎么' (E)."
    }
  ]
}
};

export function getOfficialExamPackage(packageId) {
  const key = (packageId || 'h10901').toLowerCase();
  const pkg = HSK1_OFFICIAL_PACKAGES[key] || HSK1_OFFICIAL_PACKAGES.h10901;
  return {
    ...pkg,
    allQuestions: [...pkg.listeningQuestions, ...pkg.readingQuestions]
  };
}

export default HSK1_OFFICIAL_PACKAGES;
