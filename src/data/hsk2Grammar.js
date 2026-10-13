// 50 Tata Bahasa Lengkap HSK 2 (Standar 3.0 Kurikulum Resmi CTI / MOE)
// Mencakup seluruh struktur kunci HSK 2: perbandingan (比/一样), preposisi (从到/离/往/对),
// kata kerja bantu (可以/应该/得), aspek (过/着/快要), pelengkap (完/好/到/得/来去), dan kalimat majemuk (因为所以/虽然但是/如果就).

export const HSK2_GRAMMAR_CATEGORIES = [
  "Semua",
  "Kata Ganti & Penunjuk",
  "Preposisi & Arah",
  "Perbandingan",
  "Kata Kerja Bantu (Modal)",
  "Kata Keterangan & Derajat",
  "Waktu & Urutan",
  "Partikel Aspek",
  "Pelengkap Kalimat (Komplemen)",
  "Kalimat Majemuk & Hubungan",
  "Pola Ekspresi Khusus"
];

export const HSK2_GRAMMAR = [
  // 1. KATA GANTI & PENUNJUK (代词)
  {
    id: 101,
    title: "1. Menanyakan Alasan: 为什么 (Wèishénme)",
    category: "Kata Ganti & Penunjuk",
    formula: "Subjek + 为什么 + Predikat / Kata Kerja + ?",
    desc: "Digunakan untuk menanyakan alasan atau sebab ('Kenapa / Mengapa'). Dapat dijawab menggunakan 因为 (karena).",
    contoh: [
      {
        hz: "你为什么不喝咖啡？",
        py: "Nǐ wèishénme bù hē kāfēi?",
        id: "Kenapa kamu tidak minum kopi?"
      },
      {
        hz: "他今天为什么没来上班？",
        py: "Tā jīntiān wèishénme méi lái shàngbān?",
        id: "Kenapa hari ini dia tidak datang bekerja?"
      }
    ]
  },
  {
    id: 102,
    title: "2. Menanyakan Cara / Sebab: 怎么 (Zěnme) + V",
    category: "Kata Ganti & Penunjuk",
    formula: "怎么 + Kata Kerja / Predikat",
    desc: "Menanyakan cara melakukan sesuatu ('Bagaimana cara...') atau menanyakan penyebab dengan nada terheran-heran ('Kok bisa...').",
    contoh: [
      {
        hz: "请问这个字怎么读？",
        py: "Qǐngwèn zhège zì zěnme dú?",
        id: "Permisi, bagaimana cara membaca karakter ini?"
      },
      {
        hz: "你怎么还没吃早饭？",
        py: "Nǐ zěnme hái méi chī zǎofàn?",
        id: "Kok kamu masih belum sarapan?"
      }
    ]
  },
  {
    id: 103,
    title: "3. Penunjuk Derajat: 这么 / 那么 (Zhème / Nàme)",
    category: "Kata Ganti & Penunjuk",
    formula: "这么 / 那么 + Kata Sifat / Kata Kerja Perasaan",
    desc: "Menyatakan derajat kualitas atau intensitas yang luar biasa ('Sebegitu / Begitu / Sedemikian'). 这么 untuk hal dekat, 那么 untuk hal jauh.",
    contoh: [
      {
        hz: "今天天气怎么这么冷？",
        py: "Jīntiān tiānqì zěnme zhème lěng?",
        id: "Kenapa cuaca hari ini sebegitu dingin?"
      },
      {
        hz: "那本书没有那么贵。",
        py: "Nà běn shū méiyǒu nàme guì.",
        id: "Buku itu tidak semahal itu."
      }
    ]
  },
  {
    id: 104,
    title: "4. Merujuk Semua Orang: 大家 (Dàjiā)",
    category: "Kata Ganti & Penunjuk",
    formula: "大家 + (都) + Predikat",
    desc: "Kata ganti orang yang berarti 'semua orang' atau 'hadirin sekalian'. Sering berpasangan dengan 都 (semuanya).",
    contoh: [
      {
        hz: "大家都准备好了吗？",
        py: "Dàjiā dōu zhǔnbèi hǎo le ma?",
        id: "Apakah semua orang sudah siap?"
      },
      {
        hz: "请大家坐下。",
        py: "Qǐng dàjiā zuò xià.",
        id: "Silakan hadirin sekalian duduk."
      }
    ]
  },
  {
    id: 105,
    title: "5. Merujuk Orang Lain: 别人 (Biérén)",
    category: "Kata Ganti & Penunjuk",
    formula: "Subjek / Objek = 别人",
    desc: "Menyatakan orang lain di luar penutur dan lawan bicara ('orang lain / pihak lain').",
    contoh: [
      {
        hz: "不要笑话别人。",
        py: "Bú yào xiàohuà biérén.",
        id: "Jangan menertawakan orang lain."
      },
      {
        hz: "这本字典是别人的。",
        py: "Zhè běn zìdiǎn shì biérén de.",
        id: "Kamus ini adalah milik orang lain."
      }
    ]
  },
  {
    id: 106,
    title: "6. Diri Sendiri / Mandiri: 自己 (Zìjǐ)",
    category: "Kata Ganti & Penunjuk",
    formula: "Kata Ganti / Nama + 自己 (+ Kata Kerja)",
    desc: "Menekankan diri sendiri atau melakukan sesuatu secara mandiri tanpa bantuan orang lain.",
    contoh: [
      {
        hz: "我自己去做这件事。",
        py: "Wǒ zìjǐ qù zuò zhè jiàn shì.",
        id: "Saya sendiri yang akan mengerjakan hal ini."
      },
      {
        hz: "照顾好你自己。",
        py: "Zhàogù hǎo nǐ zìjǐ.",
        id: "Jaga dirimu sendiri baik-baik."
      }
    ]
  },
  {
    id: 107,
    title: "7. Penyelarasan Menyeluruh: 每...都... (Měi... dōu...)",
    category: "Kata Ganti & Penunjuk",
    formula: "每 + Satuan + Benda + 都 + Predikat",
    desc: "Pola baku HSK 2 untuk menyatakan setiap individu/elemen tanpa terkecuali ('Setiap... selalu/semuanya...').",
    contoh: [
      {
        hz: "他每天都去跑步。",
        py: "Tā měitiān dōu qù pǎobù.",
        id: "Dia setiap hari selalu pergi lari."
      },
      {
        hz: "每个苹果都很甜。",
        py: "Měi ge píngguǒ dōu hěn tián.",
        id: "Setiap apel semuanya sangat manis."
      }
    ]
  },

  // 2. PREPOSISI & ARAH (介词与方位词)
  {
    id: 108,
    title: "8. Rentang Tempat / Waktu: 从...到... (Cóng... dào...)",
    category: "Preposisi & Arah",
    formula: "从 + Titik Awal + 到 + Titik Akhir",
    desc: "Menyatakan cakupan ruang dari satu titik ke titik lain, atau kurun waktu awal hingga akhir ('Dari... sampai/ke...').",
    contoh: [
      {
        hz: "从北京到上海坐高铁很快。",
        py: "Cóng Běijīng dào Shànghǎi zuò gāotiě hěn kuài.",
        id: "Dari Beijing ke Shanghai naik kereta cepat sangat cepat."
      },
      {
        hz: "我们从早上八点学到下午四点。",
        py: "Wǒmen cóng zǎoshang bā diǎn xué dào xiàwǔ sì diǎn.",
        id: "Kami belajar dari jam 8 pagi sampai jam 4 sore."
      }
    ]
  },
  {
    id: 109,
    title: "9. Mengukur Jarak: A 离 B (Lí)",
    category: "Preposisi & Arah",
    formula: "Tempat A + 离 + Tempat B + 很远 / 很近 / Jarak",
    desc: "Preposisi penentu jarak antara dua tempat ('A berjarak dari B sejauh...'). Tidak boleh memakai '从' untuk jarak statis.",
    contoh: [
      {
        hz: "我家离学校很近。",
        py: "Wǒ jiā lí xuéxiào hěn jìn.",
        id: "Rumah saya berjarak sangat dekat dari sekolah."
      },
      {
        hz: "医院离这里不远。",
        py: "Yīyuàn lí zhèlǐ bù yuǎn.",
        id: "Rumah sakit tidak jauh dari sini."
      }
    ]
  },
  {
    id: 110,
    title: "10. Orientasi Arah Gerakan: 往 / 向 (Wǎng / Xiàng)",
    category: "Preposisi & Arah",
    formula: "往 / 向 + Arah + Kata Kerja Gerak",
    desc: "Menunjukkan orientasi ke mana gerakan ditujukan ('Ke arah / Menuju...'). Sering dipakai saat petunjuk jalan.",
    contoh: [
      {
        hz: "一直往前走，然后往右拐。",
        py: "Yìzhí wǎng qián zǒu, ránhòu wǎng yòu guǎi.",
        id: "Jalan lurus terus ke depan, kemudian belok ke kanan."
      },
      {
        hz: "请向左看。",
        py: "Qǐng xiàng zuǒ kàn.",
        id: "Silakan menoleh ke arah kiri."
      }
    ]
  },
  {
    id: 111,
    title: "11. Efek / Sasaran Sikap: 对 (Duì)",
    category: "Preposisi & Arah",
    formula: "Subjek + 对 + Objek + Kata Sifat / Kata Kerja",
    desc: "Menunjukkan sasaran perlakuan, kegunaan, atau efek terhadap seseorang/sesuatu ('Terhadap / Bagi...').",
    contoh: [
      {
        hz: "多吃水果对身体很好。",
        py: "Duō chī shuǐguǒ duì shēntǐ hěn hǎo.",
        id: "Banyak makan buah sangat baik bagi kesehatan tubuh."
      },
      {
        hz: "老师对学生非常热情。",
        py: "Lǎoshī duì xuésheng fēicháng rèqíng.",
        id: "Guru sangat ramah dan peduli terhadap murid."
      }
    ]
  },
  {
    id: 112,
    title: "12. Tujuan Aksi: 为 / 为了 (Wèi / Wèile)",
    category: "Preposisi & Arah",
    formula: "为(了) + Tujuan / Orang + Aksi",
    desc: "Menyatakan maksud, tujuan yang hendak dicapai, atau tindakan demi seseorang ('Demi / Untuk...').",
    contoh: [
      {
        hz: "为了学好汉语，他每天都练习。",
        py: "Wèile xué hǎo Hànyǔ, tā měitiān dōu liànxí.",
        id: "Demi menguasai bahasa Mandarin dengan baik, dia setiap hari berlatih."
      },
      {
        hz: "妈妈为我们准备了丰盛的晚饭。",
        py: "Māma wèi wǒmen zhǔnbèi le fēngshèng de wǎnfàn.",
        id: "Ibu menyiapkan makan malam yang berlimpah untuk kami."
      }
    ]
  },
  {
    id: 113,
    title: "13. Posisi Samping & Arah: 旁边 / 左边 / 右边",
    category: "Preposisi & Arah",
    formula: "Benda + 旁边 / 左边 / 右边",
    desc: "Kata penunjuk posisi ruang HSK 2: 旁边 (samping), 左边 (sebelah kiri), 右边 (sebelah kanan).",
    contoh: [
      {
        hz: "超市就在银行旁边。",
        py: "Chāoshì jiù zài yínháng pángbiān.",
        id: "Supermarket tepat berada di samping bank."
      },
      {
        hz: "坐在我左边的人是我的同桌。",
        py: "Zuò zài wǒ zuǒbiān de rén shì wǒ de tóngzhuō.",
        id: "Orang yang duduk di sebelah kiri saya adalah teman sebangku saya."
      }
    ]
  },

  // 3. PERBANDINGAN (比较句)
  {
    id: 114,
    title: "14. Pola Komparatif Dasar: A 比 B + Adjektiva",
    category: "Perbandingan",
    formula: "Subjek A + 比 + Subjek B + Kata Sifat",
    desc: "Struktur perbandingan utama bahasa Mandarin ('A lebih [sifat] daripada B'). Jangan tambahkan 很 (hěn).",
    contoh: [
      {
        hz: "哥哥比弟弟高。",
        py: "Gēge bǐ dìdi gāo.",
        id: "Kakak laki-laki lebih tinggi daripada adik laki-laki."
      },
      {
        hz: "今天的西瓜比昨天的甜。",
        py: "Jīntiān de xīguā bǐ zuótiān de tián.",
        id: "Semangka hari ini lebih manis daripada yang kemarin."
      }
    ]
  },
  {
    id: 115,
    title: "15. Perbandingan dengan Selisih Derajat: 比 + 一点儿 / 多了",
    category: "Perbandingan",
    formula: "A + 比 + B + Kata Sifat + 一点儿 / 得多 / 多了",
    desc: "Menyatakan selisih perbandingan secara spesifik: 一点儿 (sedikit lebih...), 得多 / 多了 (jauh lebih...).",
    contoh: [
      {
        hz: "这件衣服比那件便宜一点儿。",
        py: "Zhè jiàn yīfu bǐ nà jiàn piányi yìdiǎnr.",
        id: "Baju ini sedikit lebih murah daripada yang itu."
      },
      {
        hz: "现在的天气比上个月暖和多了。",
        py: "Xiànzài de tiānqì bǐ shàng ge yuè nuǎnhuo duō le.",
        id: "Cuaca sekarang jauh lebih hangat dibanding bulan lalu."
      }
    ]
  },
  {
    id: 116,
    title: "16. Perbandingan Negatif: A 没有 B (那么) + Adj",
    category: "Perbandingan",
    formula: "A + 没有 + B + (那么/这么) + Kata Sifat",
    desc: "Bentuk menyangkal kesetaraan sifat ('A tidak se-[sifat] B'). Menunjukkan B lebih unggul.",
    contoh: [
      {
        hz: "我没有他那么高。",
        py: "Wǒ méiyǒu tā nàme gāo.",
        id: "Saya tidak setinggi dia."
      },
      {
        hz: "坐公共汽车没有坐地铁快。",
        py: "Zuò gōnggòng qìchē méiyǒu zuò dìtiě kuài.",
        id: "Naik bus tidak secepat naik MRT / kereta bawah tanah."
      }
    ]
  },
  {
    id: 117,
    title: "17. Menyatakan Kesetaraan Sama: A 跟/和 B 一样",
    category: "Perbandingan",
    formula: "A + 跟 / 和 + B + 一样 (+ Kata Sifat)",
    desc: "Menyatakan dua subjek adalah sama persis, atau sama dalam hal tingkat sifat tertentu ('A sama seperti B').",
    contoh: [
      {
        hz: "他的爱好跟我一样。",
        py: "Tā de àihào gēn wǒ yíyàng.",
        id: "Hobinya sama dengan hobi saya."
      },
      {
        hz: "妹妹长得跟姐姐一样漂亮。",
        py: "Mèimei zhǎng de gēn jiějie yíyàng piàoliang.",
        id: "Adik perempuan berparas sama cantiknya dengan kakak perempuan."
      }
    ]
  },
  {
    id: 118,
    title: "18. Menyatakan Perbedaan: A 跟/和 B 不一样",
    category: "Perbandingan",
    formula: "A + 跟 / 和 + B + 不一样 (+ Kata Sifat)",
    desc: "Menyatakan dua subjek memiliki sifat atau identitas yang berbeda satu sama lain ('A tidak sama dengan B').",
    contoh: [
      {
        hz: "中国的天气跟印尼不一样。",
        py: "Zhōngguó de tiānqì gēn Yìnní bù yíyàng.",
        id: "Cuaca di Tiongkok berbeda dengan di Indonesia."
      },
      {
        hz: "这两件衬衫的颜色不一样。",
        py: "Zhè liǎng jiàn chènshān de yánsè bù yíyàng.",
        id: "Warna kedua kemeja ini berbeda."
      }
    ]
  },

  // 4. KATA KERJA BANTU / MODAL (能愿动词)
  {
    id: 119,
    title: "19. Izin & Kelayakan: 可以 (Kěyǐ)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 可以 + Kata Kerja",
    desc: "Menyatakan izin ('boleh') atau menyarankan solusi yang layak dilakukan ('bisa / dapat'). Negasinya 不可以 atau 不能.",
    contoh: [
      {
        hz: "我可以用一下你的手机吗？",
        py: "Wǒ kěyǐ yòng yíxià nǐ de shǒujī ma?",
        id: "Bolehkah saya memakai sebentar ponselmu?"
      },
      {
        hz: "周末我们可以去公园散步。",
        py: "Zhōumò wǒmen kěyǐ qù gōngyuán sànbù.",
        id: "Akhir pekan kita bisa pergi jalan-jalan ke taman."
      }
    ]
  },
  {
    id: 120,
    title: "20. Keharusan / Saran Moral: 应该 (Yīnggāi)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 应该 + Kata Kerja",
    desc: "Menyatakan anjuran moral, kewajaran, atau hal yang semestinya dilakukan ('Seharusnya / Semestinya').",
    contoh: [
      {
        hz: "生病了就应该多喝水休息。",
        py: "Shēngbìng le jiù yīnggāi duō hē shuǐ xiūxi.",
        id: "Kalau sakit seharusnya banyak minum air dan istirahat."
      },
      {
        hz: "你不应该上课迟到。",
        py: "Nǐ bù yīnggāi shàngkè chídào.",
        id: "Kamu tidak seharusnya terlambat masuk kelas."
      }
    ]
  },
  {
    id: 121,
    title: "21. Keharusan Kuat Lisan: 得 (Děi)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 得 + Kata Kerja (dibaca: děi)",
    desc: "Menyatakan keharusan mendesak yang tak terhindarkan dalam ragam lisan ('Harus / Mesti'). Lawannya 不用 (tidak perlu).",
    contoh: [
      {
        hz: "时间不早了，我得走了。",
        py: "Shíjiān bù zǎo le, wǒ děi zǒu le.",
        id: "Sudah tidak pagi lagi, saya harus segera pergi."
      },
      {
        hz: "明天有考试，今晚得复习。",
        py: "Míngtiān yǒu kǎoshì, jīnwǎn děi fùxí.",
        id: "Besok ada ujian, malam ini harus mengulang pelajaran."
      }
    ]
  },
  {
    id: 122,
    title: "22. Kesediaan Hati: 愿意 (Yuànyì)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + 愿意 + Kata Kerja",
    desc: "Menyatakan kerelaan, keikhlasan, atau persetujuan tulus dari lubuk hati ('Bersedia / Sudi / Mau').",
    contoh: [
      {
        hz: "你愿意和我一起去旅行吗？",
        py: "Nǐ yuànyì hé wǒ yìqǐ qù lǚxíng ma?",
        id: "Maukah kamu pergi berlibur bersama saya?"
      },
      {
        hz: "他很愿意帮助新同学。",
        py: "Tā hěn yuànyì bāngzhù xīn tóngxué.",
        id: "Dia sangat bersedia membantu teman sekelas baru."
      }
    ]
  },
  {
    id: 123,
    title: "23. Keberanian Mental / Fisik: 敢 (Gǎn)",
    category: "Kata Kerja Bantu (Modal)",
    formula: "Subjek + (不)敢 + Kata Kerja",
    desc: "Menyatakan keberanian untuk mengambil tindakan ('Berani'). Bentuk negatif 不敢 sering dipakai untuk rasa takut/sungkan.",
    contoh: [
      {
        hz: "他不敢在大家面前唱歌。",
        py: "Tā bù gǎn zài dàjiā miànqián chànggē.",
        id: "Dia tidak berani bernyanyi di hadapan semua orang."
      },
      {
        hz: "你敢一个人走夜路吗？",
        py: "Nǐ gǎn yí ge rén zǒu yèlù ma?",
        id: "Apakah kamu berani berjalan di jalan malam seorang diri?"
      }
    ]
  },

  // 5. KATA KETERANGAN & DERAJAT (副词与程度)
  {
    id: 124,
    title: "24. Superlatif Puncak: 最 (Zuì) + Kata Sifat",
    category: "Kata Keterangan & Derajat",
    formula: "最 + Kata Sifat / Kata Kerja Perasaan",
    desc: "Menyatakan tingkat tertinggi atau paling mutlak dalam kelompoknya ('Paling / Ter-').",
    contoh: [
      {
        hz: "我最喜欢吃妈妈做的菜。",
        py: "Wǒ zuì xǐhuan chī māma zuò de cài.",
        id: "Saya paling suka makan masakan buatan ibu."
      },
      {
        hz: "他是我们班里最高的学生。",
        py: "Tā shì wǒmen bān lǐ zuì gāo de xuésheng.",
        id: "Dia adalah murid paling tinggi di kelas kami."
      }
    ]
  },
  {
    id: 125,
    title: "25. Tingkat Bertambah Lebih: 更 (Gèng)",
    category: "Kata Keterangan & Derajat",
    formula: "更 + Kata Sifat / Kata Kerja Mental",
    desc: "Menyatakan pertambahan derajat yang lebih tinggi dibanding taraf sebelumnya ('Lebih / Makin...').",
    contoh: [
      {
        hz: "这本小说更有意思。",
        py: "Zhè běn xiǎoshuō gèng yǒu yìsi.",
        id: "Novel yang ini lebih menarik."
      },
      {
        hz: "多运动会让身体更健康。",
        py: "Duō yùndòng huì ràng shēntǐ gèng jiànkāng.",
        id: "Banyak berolahraga akan membuat tubuh makin sehat."
      }
    ]
  },
  {
    id: 126,
    title: "26. Tingkat Ekstrem Tinggi: 非常 (Fēicháng)",
    category: "Kata Keterangan & Derajat",
    formula: "非常 + Kata Sifat / Kata Kerja Emosi",
    desc: "Menyatakan derajat yang luar biasa tinggi, tingkatannya lebih kuat dan formal dibandingkan 很 ('Amat sangat / Luar biasa').",
    contoh: [
      {
        hz: "这道中国菜味道非常香。",
        py: "Zhè dào Zhōngguó cài wèidao fēicháng xiāng.",
        id: "Hidangan masakan Tiongkok ini aromanya sangat wangi."
      },
      {
        hz: "听到这个好消息，大家非常高兴。",
        py: "Tīngdào zhège hǎo xiāoxi, dàjiā fēicháng gāoxìng.",
        id: "Mendengar kabar baik ini, semua orang sangat bergembira."
      }
    ]
  },
  {
    id: 127,
    title: "27. Penegasan Nada Sungguh: 真 (Zhēn) + Kata Sifat",
    category: "Kata Keterangan & Derajat",
    formula: "真 + Kata Sifat (+ 啊 / 了)",
    desc: "Menyatakan perasaan kagum, keheranan, atau pengakuan yang tulus spontan ('Sungguh / Benar-benar...').",
    contoh: [
      {
        hz: "你写的汉字真好看！",
        py: "Nǐ xiě de Hànzì zhēn hǎokàn!",
        id: "Karakter Hanzi yang kamu tulis sungguh bagus!"
      },
      {
        hz: "今天时间过得真快。",
        py: "Jīntiān shíjiān guò de zhēn kuài.",
        id: "Hari ini waktu berlalu benar-benar cepat."
      }
    ]
  },
  {
    id: 128,
    title: "28. Kepastian & Komitmen: 一定 (Yídìng)",
    category: "Kata Keterangan & Derajat",
    formula: "Subjek + 一定 + (要/会) + Predikat",
    desc: "Menunjukkan kepastian mutlak ('pasti') atau tekad bulat pantang menyerah ('harus/bertekad').",
    contoh: [
      {
        hz: "明天有时间我一定会来。",
        py: "Míngtiān yǒu shíjiān wǒ yídìng huì lái.",
        id: "Besok kalau ada waktu saya pasti akan datang."
      },
      {
        hz: "我们一定要学好汉语。",
        py: "Wǒmen yídìng yào xué hǎo Hànyǔ.",
        id: "Kita harus bertekad menguasai bahasa Mandarin dengan baik."
      }
    ]
  },
  {
    id: 129,
    title: "29. Mengungkap Fakta: 其实 (Qíshí)",
    category: "Kata Keterangan & Derajat",
    formula: "其实 + Kalimat Penjelas",
    desc: "Mengoreksi asumsi yang keliru dan membeberkan kenyataan sesungguhnya ('Sebenarnya / Faktanya').",
    contoh: [
      {
        hz: "其实学汉语并没有那么难。",
        py: "Qíshí xué Hànyǔ bìng méiyǒu nàme nán.",
        id: "Sebenarnya belajar bahasa Mandarin tidaklah sesulit itu."
      },
      {
        hz: "他看着年轻，其实已经四十岁了。",
        py: "Tā kàn zhe niánqīng, qíshí yǐjīng sìshí suì le.",
        id: "Dia terlihat muda, padahal sebenarnya sudah berusia empat puluh tahun."
      }
    ]
  },

  // 6. WAKTU & URUTAN (时间副词与时序)
  {
    id: 130,
    title: "30. Aksi Telah Selesai: 已经...了 (Yǐjīng... le)",
    category: "Waktu & Urutan",
    formula: "Subjek + 已经 + Kata Kerja / Frasa + 了",
    desc: "Menandakan suatu peristiwa atau kondisi sudah rampung terwujud ('Sudah / Telah...').",
    contoh: [
      {
        hz: "电影已经开始了，快进场吧。",
        py: "Diànyǐng yǐjīng kāishǐ le, kuài jìn chǎng ba.",
        id: "Filmnya sudah mulai, ayo cepat masuk ruangan."
      },
      {
        hz: "他们已经学完第二课了。",
        py: "Tāmen yǐjīng xué wán dì-èr kè le.",
        id: "Mereka sudah selesai mempelajari bab kedua."
      }
    ]
  },
  {
    id: 131,
    title: "31. Cepat vs Terlambat: 就 (Jiù) vs 才 (Cái)",
    category: "Waktu & Urutan",
    formula: "Waktu + 就 (cepat/awal) vs Waktu + 才 (terlambat/lambat)",
    desc: "就 menandakan aksi terjadi lebih awal, mudah, atau cepat. 才 menandakan aksi memakan waktu lama, sulit, atau terlambat.",
    contoh: [
      {
        hz: "他早上六点就起床了。",
        py: "Tā zǎoshang liù diǎn jiù qǐchuáng le.",
        id: "Dia jam enam pagi sudah langsung bangun (dianggap awal)."
      },
      {
        hz: "他晚上十点才下班回家。",
        py: "Tā wǎnshang shí diǎn cái xiàbān huíjiā.",
        id: "Dia jam sepuluh malam baru selesai kerja dan pulang (dianggap larut)."
      }
    ]
  },
  {
    id: 132,
    title: "32. Masih Berlanjut: 还 (Hái)",
    category: "Waktu & Urutan",
    formula: "Subjek + 还 + Kata Kerja / Kata Sifat",
    desc: "Menunjukkan keadaan atau tindakan yang masih terus berlangsung tanpa henti ('Masih / Belum juga').",
    contoh: [
      {
        hz: "现在外面还在下雨。",
        py: "Xiànzài wàimiàn hái zài xià yǔ.",
        id: "Sekarang di luar masih turun hujan."
      },
      {
        hz: "你还想喝一杯水吗？",
        py: "Nǐ hái xiǎng hē yì bēi shuǐ ma?",
        id: "Apakah kamu masih ingin minum segelas air lagi?"
      }
    ]
  },
  {
    id: 133,
    title: "33. Pengulangan di Masa Depan: 再 (Zài)",
    category: "Waktu & Urutan",
    formula: "再 + Kata Kerja",
    desc: "Menyatakan pengulangan aksi yang belum terjadi atau akan dilakukan di waktu mendatang ('Lagi / Nanti... lagi').",
    contoh: [
      {
        hz: "请您再说一遍，我没听懂。",
        py: "Qǐng nín zài shuō yí biàn, wǒ méi tīngdǒng.",
        id: "Tolong Anda ucapkan sekali lagi, saya belum paham."
      },
      {
        hz: "我们明天再聊吧。",
        py: "Wǒmen míngtiān zài liáo ba.",
        id: "Besok kita mengobrol lagi ya."
      }
    ]
  },
  {
    id: 134,
    title: "34. Pengulangan Masa Lampau: 又 (Yòu)",
    category: "Waktu & Urutan",
    formula: "又 + Kata Kerja + 了",
    desc: "Menyatakan tindakan yang berulang kembali di masa lampau atau di luar harapan ('Lagi-lagi / Kembali...').",
    contoh: [
      {
        hz: "他今天上班又迟到了。",
        py: "Tā jīntiān shàngbān yòu chídào le.",
        id: "Hari ini dia berangkat kerja terlambat lagi."
      },
      {
        hz: "这道题我又做错了。",
        py: "Zhè dào tí wǒ yòu zuò cuò le.",
        id: "Soal yang ini saya salah kerjakan lagi."
      }
    ]
  },
  {
    id: 135,
    title: "35. Dua Aksi Bersamaan: 一边...一边... (Yìbiān... yìbiān...)",
    category: "Waktu & Urutan",
    formula: "Subjek + 一边 + Aksi 1 + 一边 + Aksi 2",
    desc: "Menyatakan dua tindakan yang dilakukan secara simultan/serempak dalam satu waktu ('Sambil... sambil...').",
    contoh: [
      {
        hz: "妈妈喜欢一边做饭一边听音乐。",
        py: "Māma xǐhuan yìbiān zuòfàn yìbiān tīng yīnyuè.",
        id: "Ibu suka sambil memasak sambil mendengarkan musik."
      },
      {
        hz: "我们一边喝咖啡一边聊天吧。",
        py: "Wǒmen yìbiān hē kāfēi yìbiān liáotiān ba.",
        id: "Mari kita sambil minum kopi sambil mengobrol."
      }
    ]
  },
  {
    id: 136,
    title: "36. Urutan Kronologis: 先...然后... (Xiān... ránhòu...)",
    category: "Waktu & Urutan",
    formula: "先 + Aksi 1 + 然后 + Aksi 2",
    desc: "Menyusun tahapan kronologis kegiatan ('Pertama-tama... kemudian/setelah itu...').",
    contoh: [
      {
        hz: "你先洗手，然后吃晚饭。",
        py: "Nǐ xiān xǐ shǒu, ránhòu chī wǎnfàn.",
        id: "Kamu cuci tangan dulu, setelah itu baru makan malam."
      },
      {
        hz: "我们先去买票，然后进火车站。",
        py: "Wǒmen xiān qù mǎi piào, ránhòu jìn huǒchēzhàn.",
        id: "Kita pertama-tama pergi beli tiket, kemudian masuk ke stasiun kereta."
      }
    ]
  },

  // 7. PARTIKEL ASPEK (动态助词)
  {
    id: 137,
    title: "37. Pengalaman Pernah Terjadi: Kata Kerja + 过 (Guo)",
    category: "Partikel Aspek",
    formula: "Subjek + Kata Kerja + 过 + Objek",
    desc: "Menunjukkan pengalaman yang pernah dialami di masa lalu ('Pernah...'). Negasinya memakai 没(有) + V + 过.",
    contoh: [
      {
        hz: "我去过一次北京。",
        py: "Wǒ qù guo yí cì Běijīng.",
        id: "Saya pernah pergi satu kali ke Beijing."
      },
      {
        hz: "你吃过北京烤鸭吗？我没吃过。",
        py: "Nǐ chī guo Běijīng kǎoyā ma? Wǒ méi chī guo.",
        id: "Apakah kamu pernah makan bebek panggang Beijing? Saya belum pernah."
      }
    ]
  },
  {
    id: 138,
    title: "38. Status Kondisi Berkelanjutan: Kata Kerja + 着 (Zhe)",
    category: "Partikel Aspek",
    formula: "Subjek / Tempat + Kata Kerja + 着 + Objek",
    desc: "Menandakan kondisi atau postur status yang sedang bertahan/berlangsung ('Dalam keadaan... / Sedang ter-...').",
    contoh: [
      {
        hz: "房间的门开着呢。",
        py: "Fángjiān de mén kāi zhe ne.",
        id: "Pintu kamar dalam keadaan terbuka."
      },
      {
        hz: "他穿着一件黑色的衣服。",
        py: "Tā chuān zhe yí jiàn hēisè de yīfu.",
        id: "Dia sedang mengenakan sehelai pakaian berwarna hitam."
      }
    ]
  },
  {
    id: 139,
    title: "39. Peristiwa Segera Terjadi: 快要...了 / 就要...了",
    category: "Partikel Aspek",
    formula: "快要 / 就要 / 快 + Predikat + 了",
    desc: "Menyatakan peristiwa yang akan segera terjadi dalam waktu sangat dekat ('Sebentar lagi akan / Segera...').",
    contoh: [
      {
        hz: "火车快要开了，大家准备上车。",
        py: "Huǒchē kuàiyào kāi le, dàjiā zhǔnbèi shàng chē.",
        id: "Kereta sebentar lagi akan berangkat, semua bersiap naik kereta."
      },
      {
        hz: "新年就要到了。",
        py: "Xīnnián jiù yào dào le.",
        id: "Tahun Baru sebentar lagi akan tiba."
      }
    ]
  },

  // 8. PELENGKAP KALIMAT (补语 - COMPLEMENTS)
  {
    id: 140,
    title: "40. Pelengkap Hasil Selesai: V + 完 (Wán)",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 完 (+ Objek) + 了",
    desc: "Menunjukkan tindakan telah selesai tuntas tanpa sisa ('Selesai melakukan...').",
    contoh: [
      {
        hz: "今天的作业我已经做完了。",
        py: "Jīntiān de zuòyè wǒ yǐjīng zuò wán le.",
        id: "Tugas hari ini sudah selesai saya kerjakan."
      },
      {
        hz: "这本书你读完了吗？",
        py: "Zhè běn shū nǐ dú wán le ma?",
        id: "Apakah buku ini sudah selesai kamu baca?"
      }
    ]
  },
  {
    id: 141,
    title: "41. Pelengkap Hasil Sempurna: V + 好 (Hǎo)",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 好 (+ 了)",
    desc: "Menunjukkan tindakan selesai dengan kualitas baik, memuaskan, atau siap dipakai ('Selesai dengan baik / Sudah beres').",
    contoh: [
      {
        hz: "晚饭妈妈已经做好了。",
        py: "Wǎnfàn māma yǐjīng zuò hǎo le.",
        id: "Makan malam sudah selesai dimasak dengan baik oleh ibu."
      },
      {
        hz: "旅行的东西我都准备好了。",
        py: "Lǚxíng de dōngxi wǒ dōu zhǔnbèi hǎo le.",
        id: "Barang-barang untuk wisata sudah siap semua saya persiapkan."
      }
    ]
  },
  {
    id: 142,
    title: "42. Pelengkap Hasil Paham / Tepat: V + 懂 / 错",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "听 / 看 + 懂 (paham) vs 做 / 说 + 错 (salah)",
    desc: "Pelengkap hasil persepsi kognitif: 听懂 (mendengar dan paham), 看懂 (membaca dan paham), 说错 (salah bicara).",
    contoh: [
      {
        hz: "这个语法点你听懂了吗？",
        py: "Zhège yǔfǎ diǎn nǐ tīngdǒng le ma?",
        id: "Apakah poin tata bahasa ini sudah kamu pahami dari mendengar penjelasan?"
      },
      {
        hz: "对不起，我记错你的名字了。",
        py: "Duìbuqǐ, wǒ jì cuò nǐ de míngzi le.",
        id: "Maaf, saya salah mengingat namamu."
      }
    ]
  },
  {
    id: 143,
    title: "43. Pelengkap Hasil Tercapai: V + 到 / 见",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 到 / 见 (+ Objek)",
    desc: "Menunjukkan tujuan aksi tercapai atau tertangkap panca indra: 买到 (berhasil membeli), 找到 (menemukan), 看见 (melihat).",
    contoh: [
      {
        hz: "我终于买到了回家的车票。",
        py: "Wǒ zhōngyú mǎi dào le huí jiā de chēpiào.",
        id: "Saya akhirnya berhasil membeli tiket pulang ke rumah."
      },
      {
        hz: "你看见我的钥匙了吗？",
        py: "Nǐ kànjiàn wǒ de yàoshi le ma?",
        id: "Apakah kamu melihat kunci saya?"
      }
    ]
  },
  {
    id: 144,
    title: "44. Pelengkap Derajat / Status Tindakan: V + 得 (De) + Sifat",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + 得 + 很 / 非常 + Kata Sifat",
    desc: "Kaidah fundamental HSK 2 untuk menilai cara, kelancaran, atau kecepatan suatu perbuatan ('Melakukan sesuatu dengan [sifat]').",
    contoh: [
      {
        hz: "他汉语说得非常流利。",
        py: "Tā Hànyǔ shuō de fēicháng liúlì.",
        id: "Dia berbicara bahasa Mandarin dengan sangat fasih."
      },
      {
        hz: "今天早上弟弟跑得很快。",
        py: "Jīntiān zǎoshang dìdi pǎo de hěn kuài.",
        id: "Tadi pagi adik laki-laki berlari dengan sangat cepat."
      }
    ]
  },
  {
    id: 145,
    title: "45. Pelengkap Durasi Waktu: S + V + Durasi Waktu",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Subjek + Kata Kerja + (了) + Durasi Waktu (+ 的 + Objek)",
    desc: "Menyatakan berapa lama suatu kegiatan berlangsung ('Selama ... jam / hari / tahun').",
    contoh: [
      {
        hz: "我学了一年汉语。",
        py: "Wǒ xué le yì nián Hànyǔ.",
        id: "Saya telah belajar bahasa Mandarin selama satu tahun."
      },
      {
        hz: "昨天晚上他睡了八个小时。",
        py: "Zuótiān wǎnshang tā shuì le bā ge xiǎoshí.",
        id: "Tadi malam dia tidur selama delapan jam."
      }
    ]
  },
  {
    id: 146,
    title: "46. Pelengkap Frekuensi: V + Angka + 次 / 遍",
    category: "Pelengkap Kalimat (Komplemen)",
    formula: "Kata Kerja + (过) + Angka + 次 (cì) / 遍 (biàn)",
    desc: "Menunjukkan berapa kali suatu perbuatan berulang: 次 (kali umum), 遍 (kali dari awal sampai tuntas).",
    contoh: [
      {
        hz: "这部中国电影我看过三次。",
        py: "Zhè bù Zhōngguó diànyǐng wǒ kàn guo sān cì.",
        id: "Film Tiongkok ini pernah saya tonton tiga kali."
      },
      {
        hz: "请把生词读两遍。",
        py: "Qǐng bǎ shēngcí dú liǎng biàn.",
        id: "Silakan baca kosakata baru ini sebanyak dua kali (dari awal sampai selesai)."
      }
    ]
  },

  // 9. KALIMAT MAJEMUK & HUBUNGAN LOGIKA (复句连接词)
  {
    id: 147,
    title: "47. Kausalitas Sebab-Akibat: 因为...所以... (Yīnwèi... suǒyǐ...)",
    category: "Kalimat Majemuk & Hubungan",
    formula: "因为 + Sebab / Alasan, 所以 + Akibat / Hasil",
    desc: "Menghubungkan dua klausa sebab-akibat ('Karena... oleh sebab itu...').",
    contoh: [
      {
        hz: "因为今天下大雨，所以我们没去踢足球。",
        py: "Yīnwèi jīntiān xià dàyǔ, suǒyǐ wǒmen méi qù tī zúqiú.",
        id: "Karena hari ini hujan lebat, oleh sebab itu kami tidak pergi main sepak bola."
      },
      {
        hz: "因为他天天努力学习，所以考试成绩很好。",
        py: "Yīnwèi tā tiāntiān nǔlì xuéxí, suǒyǐ kǎoshì chéngjì hěn hǎo.",
        id: "Karena dia setiap hari rajin belajar, nilai ujiannya sangat memuaskan."
      }
    ]
  },
  {
    id: 148,
    title: "48. Pertentangan Konsesif: 虽然...但是... (Suīrán... dànshì...)",
    category: "Kalimat Majemuk & Hubungan",
    formula: "虽然 + Pernyataan Mengalah, 但是 + Pernyataan Utama",
    desc: "Menyatakan kontras atau pertentangan konsesif ('Meskipun / Walaupun... tetapi...').",
    contoh: [
      {
        hz: "虽然汉语汉字很多，但是很有意思。",
        py: "Suīrán Hànyǔ Hànzì hěn duō, dànshì hěn yǒu yìsi.",
        id: "Meskipun karakter Hanzi sangat banyak, tetapi sangat menarik."
      },
      {
        hz: "虽然外面很冷，但是房间里很暖和。",
        py: "Suīrán wàimiàn hěn lěng, dànshì fángjiān lǐ hěn nuǎnhuo.",
        id: "Meskipun di luar sangat dingin, tetapi di dalam kamar sangat hangat."
      }
    ]
  },
  {
    id: 149,
    title: "49. Kalimat Pengandaian: 如果 / 要是...就... (Rúguǒ... jiù...)",
    category: "Kalimat Majemuk & Hubungan",
    formula: "如果 / 要是 + Syarat Pengandaian, (Subjek) + 就 + Konsekuensi",
    desc: "Menyatakan syarat hipotetis dan hasil yang menyertainya ('Jika / Seandainya... maka...').",
    contoh: [
      {
        hz: "如果明天下雨，我们就不去爬山了。",
        py: "Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù páshān le.",
        id: "Jika besok turun hujan, maka kita tidak akan pergi mendaki gunung."
      },
      {
        hz: "要是你觉得累，就早点休息吧。",
        py: "Yàoshi nǐ juéde lèi, jiù zǎodiǎn xiūxi ba.",
        id: "Seandainya kamu merasa lelah, istirahatlah lebih awal."
      }
    ]
  },

  // 10. POLA EKSPRESI KHUSUS (特殊句式)
  {
    id: 150,
    title: "50. Reduplikasi Kata Kerja & Sifat: VV & AA",
    category: "Pola Ekspresi Khusus",
    formula: "Kata Kerja Ganda: 看看 / 听听 / 试一试 | Kata Sifat: 高高的 / 红红的",
    desc: "Pengulangan kata kerja menunjukkan tindakan santai, sebentar, atau mencoba. Pengulangan kata sifat mempertegas kesan hidup, imut, atau estetis.",
    contoh: [
      {
        hz: "这件新衣服你试一试吧。",
        py: "Zhè jiàn xīn yīfu nǐ shì yi shì ba.",
        id: "Coba kenakan sebentar pakaian baru ini."
      },
      {
        hz: "他长着一双大大的眼睛。",
        py: "Tā zhǎng zhe yì shuāng dàdà de yǎnjing.",
        id: "Dia memiliki sepasang mata yang bulat besar dan indah."
      }
    ]
  }
];

export default HSK2_GRAMMAR;
