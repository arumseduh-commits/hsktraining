// Generator Soal Ujian Resmi HSK 1 (Standar 3.0)
// Menghasilkan paket soal acak dan bervariasi setiap kali ujian dimulai
// Format Resmi: 听力 (Listening 100 Poin) + 阅读 (Reading 100 Poin) = Total 200 Poin

export function generateOfficialExam(words) {
  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const listeningQuestions = [];
  const readingQuestions = [];

  // ==========================================
  // BAGIAN 1: 听力 (LISTENING) - 10 SOAL @ 10 POIN
  // ==========================================

  // 1. Soal 1 - 4: True/False Audio (对 / 错)
  // Mengetes apakah audio sesuai dengan pernyataan gambar/arti
  const tfWords = shuffle(words).slice(0, 4);
  tfWords.forEach((word, idx) => {
    const isCorrect = Math.random() > 0.5;
    let statement = "";
    if (isCorrect) {
      statement = word.contohArti || `Arti dari kata yang diucapkan adalah: "${word.arti}".`;
    } else {
      const otherWord = words.find(w => w.id !== word.id && w.cat !== word.cat) || words[0];
      statement = otherWord.contohArti || `Arti dari kata yang diucapkan adalah: "${otherWord.arti}".`;
    }

    listeningQuestions.push({
      id: idx + 1,
      part: "Part I (听力判断 - Benar/Salah)",
      type: "listening_tf",
      audioText: word.contoh || word.hanzi,
      audioDisplay: word.contoh || word.hanzi,
      prompt: `Dengarkan audio Mandarin berikut dengan saksama. Apakah arti pernyataan di bawah ini SESUAI dengan apa yang diucapkan?`,
      statementText: `"${statement}"`,
      options: ["Benar (对)", "Salah (错)"],
      answer: isCorrect ? 0 : 1,
      explanation: `Audio yang diucapkan adalah: "${word.contoh || word.hanzi}" (${word.pinyin}). Arti sebenarnya: "${word.contohArti || word.arti}". Maka pernyataan tersebut ${isCorrect ? 'BENAR (对)' : 'SALAH (错)'}.`
    });
  });

  // 2. Soal 5 - 7: Percakapan Pendek A & B (对话选择)
  const dialogTemplates = [
    {
      audio: "你好，请问洗手间在哪里？洗手间在前面的商店旁边。",
      display: "A: 你好，请问洗手间在哪里？\nB: 洗手间在前面的商店旁边。",
      q: "Menurut percakapan audio, di manakah letak toilet (洗手间)?",
      correct: "Di samping toko di depan",
      wrongs: ["Di dalam stasiun kereta", "Di lantai dua sekolah", "Di belakang rumah sakit"],
      exp: "B mengatakan: 洗手间在前面的商店旁边 (Toilet di samping toko depan)."
    },
    {
      audio: "师傅，去北京机场多少钱？一共八十块钱。",
      display: "A: 师傅，去北京机场多少钱？\nB: 一共八十块钱。",
      q: "Menurut percakapan audio, berapa ongkos taksi ke bandara?",
      correct: "80 Yuan (八十块)",
      wrongs: ["18 Yuan (十八块)", "800 Yuan (八百块)", "8 Yuan (八块)"],
      exp: "B menjawab: 一共八十块钱 (Total 80 yuan)."
    },
    {
      audio: "你喜欢喝茶还是咖啡？我想喝一杯热茶。",
      display: "A: 你喜欢喝茶还是咖啡？\nB: 我想喝一杯热茶。",
      q: "Apa yang ingin diminum oleh pembicara kedua?",
      correct: "Teh panas (热茶)",
      wrongs: ["Kopi hitam (咖啡)", "Susu sapi (牛奶)", "Air es (冰水)"],
      exp: "B menyatakan: 我想喝一杯热茶 (Saya ingin minum secangkir teh panas)."
    },
    {
      audio: "今天下午天气怎么样？外面在下雨，非常冷。",
      display: "A: 今天下午天气怎么样？\nB: 外面在下雨，非常冷。",
      q: "Bagaimana kondisi cuaca menurut percakapan audio?",
      correct: "Sedang turun hujan dan sangat dingin",
      wrongs: ["Cerah dan panas", "Angin kencang tetapi cerah", "Turun salju lebat"],
      exp: "B mengatakan: 外面在下雨，非常冷 (Di luar sedang hujan, sangat dingin)."
    },
    {
      audio: "你在做什么呢？我在用电脑工作。",
      display: "A: 你在做什么呢？\nB: 我在用电脑工作。",
      q: "Apa aktivitas yang sedang dilakukan oleh pembicara kedua?",
      correct: "Bekerja menggunakan komputer",
      wrongs: ["Menonton film di televisi", "Membaca buku cerita", "Menelepon teman"],
      exp: "B menyatakan: 我在用电脑工作 (Saya sedang memakai komputer untuk kerja)."
    },
    {
      audio: "昨天你买了几本书？我买了两本汉语书。",
      display: "A: 昨天你买了几本书？\nB: 我买了两本汉语书。",
      q: "Berapa banyak buku yang dibeli kemarin?",
      correct: "2 buah buku bahasa Mandarin",
      wrongs: ["3 buah buku cerita", "1 buah kamus", "4 buah buku"],
      exp: "B menjawab: 我买了两本汉语书 (Saya membeli 2 buku bahasa Mandarin)."
    }
  ];

  const pickedDialogs = shuffle(dialogTemplates).slice(0, 3);
  pickedDialogs.forEach((diag, idx) => {
    const rawOpts = shuffle([diag.correct, ...diag.wrongs.slice(0, 2)]);
    listeningQuestions.push({
      id: idx + 5,
      part: "Part II (对话问答 - Tanya Jawab Dialog)",
      type: "listening_mc",
      audioText: diag.audio,
      audioDisplay: diag.display,
      prompt: diag.q,
      options: rawOpts,
      answer: rawOpts.indexOf(diag.correct),
      explanation: diag.exp
    });
  });

  // 3. Soal 8 - 10: Monolog & Detail Angka/Waktu/Aksi (短文理解)
  const monologTemplates = [
    {
      audio: "我们学校有三位汉语老师，都很年轻漂亮。",
      q: "Berapa banyak guru bahasa Mandarin yang ada di sekolah tersebut?",
      correct: "3 orang guru (三位老师)",
      wrongs: ["4 orang guru", "2 orang guru", "1 orang guru"],
      exp: "Audio menyebutkan 三位 (3 orang) guru."
    },
    {
      audio: "现在是上午十点半，王医生正在医院给病人看病。",
      q: "Jam berapakah saat ini dan di manakah Dokter Wang berada?",
      correct: "Jam 10:30 di rumah sakit",
      wrongs: ["Jam 11:30 di sekolah", "Jam 10:00 di rumah", "Jam 09:30 di kantor"],
      exp: "Audio: 上午十点半 (10:30 pagi), 在医院 (di rumah sakit)."
    },
    {
      audio: "他明天要坐火车去上海旅游。",
      q: "Kendaraan apa yang akan dia tumpangi besok untuk bepergian?",
      correct: "Kereta api (火车)",
      wrongs: ["Pesawat terbang (飞机)", "Bus umum (公交车)", "Kapal laut (船)"],
      exp: "Audio: 坐火车 (naik kereta api)."
    },
    {
      audio: "这双鞋太贵了，三百块钱，我想买便宜一点的。",
      q: "Mengapa dia tidak langsung membeli sepatu tersebut?",
      correct: "Karena terlalu mahal (300 Yuan)",
      wrongs: ["Karena ukurannya terlalu kecil", "Karena warnanya jelek", "Karena tidak ada uang tunai"],
      exp: "Audio: 这双鞋太贵了 (Sepatu ini terlalu mahal, 300 yuan)."
    }
  ];

  const pickedMonologs = shuffle(monologTemplates).slice(0, 3);
  pickedMonologs.forEach((mono, idx) => {
    const rawOpts = shuffle([mono.correct, ...mono.wrongs.slice(0, 2)]);
    listeningQuestions.push({
      id: idx + 8,
      part: "Part III (情景细节 - Informasi Detail)",
      type: "listening_mc",
      audioText: mono.audio,
      audioDisplay: mono.audio,
      prompt: mono.q,
      options: rawOpts,
      answer: rawOpts.indexOf(mono.correct),
      explanation: mono.exp
    });
  });

  // ==========================================
  // BAGIAN 2: 阅读 (READING) - 10 SOAL @ 10 POIN
  // ==========================================

  // 4. Soal 11 - 13: Pencocokan Karakter & Arti (词义正误)
  const readingTfWords = shuffle(words.slice(50, 450)).slice(0, 3);
  readingTfWords.forEach((word, idx) => {
    const isCorrect = Math.random() > 0.5;
    let displayedMeaning = word.arti;
    if (!isCorrect) {
      const wrongWord = words.find(w => w.id !== word.id && w.cat !== word.cat) || words[10];
      displayedMeaning = wrongWord.arti;
    }

    readingQuestions.push({
      id: idx + 11,
      part: "Part I (词义判断 - Kesesuaian Makna)",
      type: "reading_tf",
      text: `${word.hanzi}  (${word.pinyin})`,
      prompt: `Perhatikan karakter dan Pinyin di atas. Apakah artinya "${displayedMeaning}"?`,
      options: ["Benar (对)", "Salah (错)"],
      answer: isCorrect ? 0 : 1,
      explanation: `Karakter ${word.hanzi} (${word.pinyin}) memiliki arti asli: "${word.arti}". Jawaban yang benar adalah: ${isCorrect ? 'Benar (对)' : 'Salah (错)'}.`
    });
  });

  // 5. Soal 14 - 16: Kalimat Rumpang (选词填空)
  const clozeTemplates = [
    {
      text: "桌子上有两_____书和一台电脑。",
      q: "Pilihlah kata satuan (量词) yang tepat untuk melengkapi kalimat:",
      correct: "本 (běn - satuan buku)",
      wrongs: ["只 (zhī)", "张 (zhāng)", "件 (jiàn)"],
      exp: "Satuan standar untuk buku adalah 本 (běn)."
    },
    {
      text: "他每天早上六点_____，然后去公园跑步。",
      q: "Pilihlah kata kerja rutinitas yang tepat:",
      correct: "起床 (qǐchuáng - bangun tidur)",
      wrongs: ["睡觉 (shuìjiào)", "休息 (xiūxi)", "唱歌 (chànggē)"],
      exp: "Pagi hari jam 6 bangun tidur (起床) lalu jogging."
    },
    {
      text: "A: 你好，请问这个手机多少钱？\nB: 一千_____。",
      q: "Pilihlah satuan mata uang lisan yang tepat:",
      correct: "块 (kuài - yuan lisan)",
      wrongs: ["本 (běn)", "个 (gè)", "点 (diǎn)"],
      exp: "Menyatakan harga uang dalam percakapan lisan menggunakan 块 (kuài)."
    },
    {
      text: "因为今天下大雨，_____我们没有去踢足球。",
      q: "Pilihlah kata sambung pasangan '因为' yang tepat:",
      correct: "所以 (suǒyǐ - oleh karena itu)",
      wrongs: ["但是 (dànshì)", "虽然 (suīrán)", "如果 (rúguǒ)"],
      exp: "Pasangan tetap tata bahasa Mandarin: 因为 (karena)... 所以 (maka)..."
    },
    {
      text: "妈妈在_____里做饭，菜很香。",
      q: "Pilihlah ruangan rumah yang tepat untuk memasak:",
      correct: "厨房 (chúfáng - dapur)",
      wrongs: ["洗手间 (xǐshǒujiān)", "教室 (jiàoshì)", "机场 (jīchǎng)"],
      exp: "Memasak makanan (做饭) dilakukan di dapur (厨房)."
    }
  ];

  const pickedCloze = shuffle(clozeTemplates).slice(0, 3);
  pickedCloze.forEach((clz, idx) => {
    const rawOpts = shuffle([clz.correct, ...clz.wrongs.slice(0, 2)]);
    readingQuestions.push({
      id: idx + 14,
      part: "Part II (选词填空 - Kalimat Rumpang)",
      type: "reading_mc",
      text: clz.text,
      prompt: clz.q,
      options: rawOpts,
      answer: rawOpts.indexOf(clz.correct),
      explanation: clz.exp
    });
  });

  // 6. Soal 17 - 18: Pencocokan Respon Percakapan (问答配对)
  const qaTemplates = [
    {
      text: "A: 谢谢你今天帮我修电脑！\nB: _______________。",
      q: "Respon santun yang paling tepat untuk ucapan terima kasih adalah:",
      correct: "不客气 (Bú kèqi - sama-sama)",
      wrongs: ["对不起 (Duìbuqǐ)", "没关系 (Méi guānxi)", "再见 (Zàijiàn)"],
      exp: "Respon untuk '谢谢' adalah '不客气'."
    },
    {
      text: "A: 昨天你为什么没有来上学？\nB: _______________。",
      q: "Alasan yang paling logis dan gramatikal untuk menjawab adalah:",
      correct: "因为我生病了，在医院看病 (Karena saya sakit di RS)",
      wrongs: ["因为我明天要去北京", "因为我很喜欢学习汉语", "没问题，很高兴"],
      exp: "Menjawab alasan kemarin tidak masuk sekolah: karena jatuh sakit (生病)."
    },
    {
      text: "A: 你认识王老师的女儿吗？\nB: _______________。",
      q: "Pilihlah jawaban yang tepat untuk pertanyaan di atas:",
      correct: "认识，她是我的同班同学 (Kenal, dia teman sekelas saya)",
      wrongs: ["太贵了，便宜点儿吧", "我不想喝咖啡", "现在是下午三点"],
      exp: "Pertanyaan '认识...吗' dijawab dengan '认识' beserta penjelasannya."
    }
  ];

  const pickedQa = shuffle(qaTemplates).slice(0, 2);
  pickedQa.forEach((qa, idx) => {
    const rawOpts = shuffle([qa.correct, ...qa.wrongs]);
    readingQuestions.push({
      id: idx + 17,
      part: "Part III (问答搭配 - Respon Percakapan)",
      type: "reading_mc",
      text: qa.text,
      prompt: qa.q,
      options: rawOpts,
      answer: rawOpts.indexOf(qa.correct),
      explanation: qa.exp
    });
  });

  // 7. Soal 19 - 20: Pemahaman Paragraf Pendek (短文阅读理解)
  const passageTemplates = [
    {
      text: "大卫是美国人，今年二十岁。他在北京的一所大学学习汉语。他觉得汉语发音很容易，但是汉字有点儿难写。他很喜欢吃中国菜，特别是北京烤鸭。",
      q: "Berdasarkan teks di atas, apa yang dirasakan David tentang bahasa Mandarin?",
      correct: "Pelafalan mudah, tetapi Hanzi agak susah ditulis",
      wrongs: [
        "Semua aspek bahasa Mandarin sangat gampang",
        "Hanzi gampang, tetapi pelafalan sangat susah",
        "Dia tidak suka tinggal di Beijing"
      ],
      exp: "Dalam teks tertulis: 汉语发音很容易，但是汉字有点儿难写 (Pelafalan gampang tapi karakter Hanzi agak susah ditulis)."
    },
    {
      text: "王先生一家有四口人：爸爸、妈妈、哥哥和他。爸爸是医生，妈妈是小学老师。哥哥比他大三岁，现在在一家电脑公司工作。每天晚上，他们一家人都一起吃晚饭、看电视。",
      q: "Apa pekerjaan kakak laki-laki dari narator?",
      correct: "Bekerja di sebuah perusahaan komputer",
      wrongs: [
        "Menjadi dokter di rumah sakit",
        "Menjadi guru sekolah dasar",
        "Masih bersekolah di SMA"
      ],
      exp: "Teks menyebutkan: 哥哥... 在一家电脑公司工作 (Kakak bekerja di perusahaan komputer)."
    },
    {
      text: "今天星期日，外面天气很好，不冷也不热。我和李朋一起骑自行车去公园。公园里有很多花和绿草，很多人在跑步、打球。我们在树下喝茶聊天，玩得很开心。",
      q: "Bagaimana cara mereka pergi ke taman pada hari Minggu?",
      correct: "Mengendarai sepeda bersama (骑自行车)",
      wrongs: [
        "Naik bus umum (坐公共汽车)",
        "Naik kereta bawah tanah (坐地铁)",
        "Berjalan kaki santai"
      ],
      exp: "Teks menyatakan: 我和李朋一起骑自行车去公园 (Saya dan Li Peng naik sepeda ke taman)."
    }
  ];

  const pickedPassages = shuffle(passageTemplates).slice(0, 2);
  pickedPassages.forEach((pas, idx) => {
    const rawOpts = shuffle([pas.correct, ...pas.wrongs]);
    readingQuestions.push({
      id: idx + 19,
      part: "Part IV (阅读理解 - Pemahaman Teks)",
      type: "reading_mc",
      text: pas.text,
      prompt: pas.q,
      options: rawOpts,
      answer: rawOpts.indexOf(pas.correct),
      explanation: pas.exp
    });
  });

  return {
    examId: `HSK1-3.0-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    totalQuestions: 20,
    passingScore: 120, // out of 200
    listeningQuestions,
    readingQuestions,
    allQuestions: [...listeningQuestions, ...readingQuestions]
  };
}
