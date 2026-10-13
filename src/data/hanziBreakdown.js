// Kamus Bedah Karakter Hanzi & Radikal (Kangxi Radicals & Character Decomposition)
// Mencakup kosakata HSK 1 & HSK 2 Standar 3.0 dengan penjelasan radikal dan etimologi pembentukan karakter

export const COMMON_RADICALS = {
  '日': { name: 'Matahari / Hari', desc: 'Melambangkan waktu, cahaya, siang, atau kehangatan' },
  '月': { name: 'Bulan / Daging (肉)', desc: 'Melambangkan malam, waktu, atau bagian tubuh fisik' },
  '水': { name: 'Air (氵)', desc: 'Melambangkan cairan, sungai, mencuci, minum, atau sifat basah' },
  '氵': { name: 'Tiga Titik Air', desc: 'Bentuk radikal air saat berada di sisi kiri karakter' },
  '火': { name: 'Api (灬)', desc: 'Melambangkan panas, memasak, membakar, atau cahaya' },
  '灬': { name: 'Empat Titik Api', desc: 'Bentuk radikal api saat berada di bawah karakter (misal: 热, 点)' },
  '土': { name: 'Tanah / Bumi', desc: 'Melambangkan daratan, tempat, lantai, atau debu' },
  '木': { name: 'Kayu / Pohon', desc: 'Melambangkan tanaman berkayu, perabot meja/kursi, atau hutan' },
  '金': { name: 'Logam / Emas (钅)', desc: 'Melambangkan perkakas besi, koin/uang, jam, atau barang logam' },
  '钅': { name: 'Besi / Logam', desc: 'Bentuk radikal logam di sisi kiri karakter (misal: 钱, 错)' },
  '人': { name: 'Manusia / Orang (亻)', desc: 'Melambangkan perilaku manusia, profesi, atau sifat sosial' },
  '亻': { name: 'Orang Menyamping', desc: 'Bentuk radikal manusia di sisi kiri (misal: 你, 他, 们, 什)' },
  '女': { name: 'Wanita / Perempuan', desc: 'Melambangkan figur wanita, keindahan, ibu, atau keluarga (misal: 她, 妈, 好)' },
  '子': { name: 'Anak / Keturunan', desc: 'Melambangkan generasi penerus, benih, atau anak kecil' },
  '口': { name: 'Mulut', desc: 'Melambangkan berbicara, makan, minum, berseru, atau lubang (misal: 吃, 喝, 听, 叫)' },
  '讠': { name: 'Kata / Ucapan (言)', desc: 'Melambangkan bahasa, kata-kata, percakapan, atau pikiran (misal: 说, 话, 语, 谢)' },
  '言': { name: 'Bicara / Bahasa', desc: 'Bentuk utuh radikal ucapan' },
  '饣': { name: 'Makanan / Santapan (食)', desc: 'Melambangkan nasi, roti, makan, atau kenyang (misal: 饭, 馆)' },
  '食': { name: 'Makanan', desc: 'Bentuk utuh radikal makanan' },
  '心': { name: 'Hati / Perasaan (忄)', desc: 'Melambangkan emosi, pikiran, kasih sayang, atau kehendak' },
  '忄': { name: 'Hati Tegak', desc: 'Bentuk radikal hati di sisi kiri (misal: 快, 慢, 怕)' },
  '目': { name: 'Mata', desc: 'Melambangkan penglihatan, melirik, atau mata (misal: 看, 睡, 睛)' },
  '手': { name: 'Tangan (扌)', desc: 'Melambangkan aksi menggunakan tangan, memegang, memukul, atau mengambil' },
  '扌': { name: 'Tangan Menangkis', desc: 'Bentuk radikal tangan di sisi kiri (misal: 打, 找, 提)' },
  '足': { name: 'Kaki (𧾷)', desc: 'Melambangkan berjalan, menendang, berlari, atau jarak (misal: 跑, 跳, 踢)' },
  '𧾷': { name: 'Kaki Berjalan', desc: 'Bentuk radikal kaki di sisi kiri karakter' },
  '辶': { name: 'Berjalan / Melangkah (走)', desc: 'Melambangkan perpindahan tempat, perjalanan, atau jarak (misal: 这, 迎, 进, 近, 远)' },
  '走': { name: 'Berjalan / Pergi', desc: 'Radikal melangkah atau berjalan kaki' },
  '宀': { name: 'Atap Rumah', desc: 'Melambangkan bangunan, kamar, tempat tinggal, atau ketenangan (misal: 家, 安, 字)' },
  '冖': { name: 'Tudung / Penutup', desc: 'Melambangkan atap atau penutup atas' },
  '艹': { name: 'Rumput / Tanaman', desc: 'Melambangkan tumbuhan obat, bunga, daun teh, atau buah (misal: 茶, 菜, 药, 苹)' },
  '门': { name: 'Pintu Gerbang', desc: 'Melambangkan pintu, ruangan tertutup, atau batas masuk (misal: 问, 闪, 间)' },
  '车': { name: 'Kendaraan / Kereta', desc: 'Melambangkan transportasi atau roda (misal: 转, 辆)' },
  '田': { name: 'Sawah / Ladang', desc: 'Melambangkan area tanah pertanian atau batas petak' },
  '力': { name: 'Tenaga / Kekuatan', desc: 'Melambangkan otot, energi, bekerja keras, atau bantuan' },
  '大': { name: 'Besar', desc: 'Melambangkan sosok membentang luas, agung, atau langit' },
  '小': { name: 'Kecil', desc: 'Melambangkan sesuatu yang ramping, sedikit, atau terbagi' },
  '纟': { name: 'Benang / Sutra', desc: 'Melambangkan rajutan, hubungan, tali, atau kain' },
  '父': { name: 'Ayah / Leluhur', desc: 'Melambangkan sosok kepala keluarga atau bapak' },
  '白': { name: 'Putih / Terang', desc: 'Melambangkan warna putih, jelas, atau siang hari' },
  '雨': { name: 'Hujan / Cuaca', desc: 'Melambangkan awan, embun, salju, petir, atau hujan' },
  '广': { name: 'Bangunan Tebing', desc: 'Melambangkan gedung luas, toko, atau paviliun' },
  '厂': { name: 'Tebing / Pabrik', desc: 'Melambangkan tempat kerja terbuka atau tebing' },
  '匚': { name: 'Kotak Wadah', desc: 'Melambangkan peti penyimpanan atau wadah perkakas (misal: 医)' },
  '犭': { name: 'Hewan / Binatang', desc: 'Melambangkan binatang berkaki empat (misal: 猫, 狗)' },
  '鸟': { name: 'Burung', desc: 'Melambangkan unggas atau burung bersayap' },
  '鱼': { name: 'Ikan', desc: 'Melambangkan hewan air atau perikanan' },
  '生': { name: 'Kehidupan / Lahir', desc: 'Melambangkan tunas bertumbuh, lahir, atau orang' },
  '一': { name: 'Satu / Garis Acuan', desc: 'Garis pembatas horizontal atau angka satu' }
};

// Kamus Bedah Karakter Lengkap HSK 1 & HSK 2
export const HANZI_BREAKDOWN_DICT = {
  // Kata Ganti & Orang
  '我': { pinyin: 'wǒ', meaning: 'Saya / aku', radical: '手', radicalDesc: 'Tangan', logic: 'Tangan (手) memegang senjata/tombak (戈) untuk melindungi diri sendiri.' },
  '你': { pinyin: 'nǐ', meaning: 'Kamu / anda', radical: '亻', radicalDesc: 'Manusia', logic: 'Sosok orang (亻) di depanmu (尔) yang diajak berbicara.' },
  '他': { pinyin: 'tā', meaning: 'Dia (laki-laki / umum)', radical: '亻', radicalDesc: 'Manusia', logic: 'Sosok orang (亻) lain di luar percakapan.' },
  '她': { pinyin: 'tā', meaning: 'Dia (perempuan)', radical: '女', radicalDesc: 'Wanita', logic: 'Sosok wanita (女) lain yang sedang dibicarakan.' },
  '它': { pinyin: 'tā', meaning: 'Dia (benda / hewan)', radical: '宀', radicalDesc: 'Atap rumah', logic: 'Benda atau makhluk yang berada di bawah naungan atap.' },
  '们': { pinyin: 'men', meaning: 'Akhiran jamak', radical: '亻', radicalDesc: 'Manusia', logic: 'Banyak orang (亻) berkumpul bersama di gerbang (门).' },
  '人': { pinyin: 'rén', meaning: 'Orang / manusia', radical: '人', radicalDesc: 'Manusia', logic: 'Piktograf sosok manusia yang berdiri dengan kedua kaki tegak melangkah.' },
  '爸': { pinyin: 'bà', meaning: 'Ayah / bapak', radical: '父', radicalDesc: 'Ayah', logic: 'Sosok ayah (父) di bagian atas ditambah bunyi fonetik 巴 (ba).' },
  '妈': { pinyin: 'mā', meaning: 'Ibu / mama', radical: '女', radicalDesc: 'Wanita', logic: 'Wanita (女) penyayang ditambah komponen bunyi 马 (ma).' },
  '儿': { pinyin: 'ér', meaning: 'Anak / putra', radical: '儿', radicalDesc: 'Kaki manusia', logic: 'Piktograf seorang anak kecil dengan kaki yang sedang belajar berdiri.' },
  '子': { pinyin: 'zǐ', meaning: 'Anak / akhiran benda', radical: '子', radicalDesc: 'Anak', logic: 'Gambar bayi/anak kecil yang sedang merentangkan tangannya.' },
  '朋': { pinyin: 'péng', meaning: 'Kawan / sahabat', radical: '月', radicalDesc: 'Bulan / seikat kerang uang', logic: 'Dua untai untaian kerang kembar yang melambangkan kesetaraan antarsahabat.' },
  '友': { pinyin: 'yǒu', meaning: 'Teman / persahabatan', radical: '又', radicalDesc: 'Tangan kanan', logic: 'Dua tangan kanan yang saling bergandengan erat dalam persahabatan.' },
  '老': { pinyin: 'lǎo', meaning: 'Tua / senior / terhormat', radical: '老', radicalDesc: 'Orang tua berambut panjang', logic: 'Sosok tetua berambut panjang yang memegang tongkat, melambangkan kebijaksanaan.' },
  '师': { pinyin: 'shī', meaning: 'Guru / ahli', radical: '巾', radicalDesc: 'Kain bendera tentara', logic: 'Pemimpin panji pasukan yang berilmu dan menuntun banyak orang.' },
  '同': { pinyin: 'tóng', meaning: 'Sama / bersama', radical: '口', radicalDesc: 'Mulut', logic: 'Bersatu dalam satu atap dengan satu suara/mulut (口).' },
  '生': { pinyin: 'shēng', meaning: 'Lahir / hidup / pelajar', radical: '生', radicalDesc: 'Kehidupan', logic: 'Tunas tanaman yang baru bertumbuh keluar dari dalam tanah.' },

  // Waktu & Hari
  '今': { pinyin: 'jīn', meaning: 'Sekarang / saat ini', radical: '人', radicalDesc: 'Manusia', logic: 'Titik waktu yang sedang dialami manusia pada masa ini.' },
  '明': { pinyin: 'míng', meaning: 'Terang / besok', radical: '日', radicalDesc: 'Matahari', logic: 'Matahari (日) dan bulan (月) berdampingan memancarkan terang benderang.' },
  '昨': { pinyin: 'zuó', meaning: 'Kemarin', radical: '日', radicalDesc: 'Matahari / hari', logic: 'Matahari (日) pada masa yang telah lampau (乍).' },
  '年': { pinyin: 'nián', meaning: 'Tahun', radical: '干', radicalDesc: 'Perisai / tangkai', logic: 'Awalnya melambangkan siklus panen padi tahunan yang matang.' },
  '月': { pinyin: 'yuè', meaning: 'Bulan (kalender / langit)', radical: '月', radicalDesc: 'Bulan sabit', logic: 'Piktograf bentuk bulan sabit di langit malam yang menandai siklus bulanan.' },
  '日': { pinyin: 'rì', meaning: 'Matahari / tanggal / hari', radical: '日', radicalDesc: 'Matahari', logic: 'Piktograf bundaran matahari dengan titik energi di tengahnya.' },
  '号': { pinyin: 'hào', meaning: 'Nomor / tanggal', radical: '口', radicalDesc: 'Mulut', logic: 'Menyerukan (口) urutan penanda atau tanggal.' },
  '点': { pinyin: 'diǎn', meaning: 'Jam / titik', radical: '灬', radicalDesc: 'Api', logic: 'Tanda bintik api (灬) penunjuk angka satuan jam atau tetesan.' },
  '分': { pinyin: 'fēn', meaning: 'Menit / membagi', radical: '刀', radicalDesc: 'Pisau', logic: 'Pisau (刀) yang memotong benda menjadi bagian-bagian menit yang presisi.' },
  '早': { pinyin: 'zǎo', meaning: 'Pagi / awal', radical: '日', radicalDesc: 'Matahari', logic: 'Matahari (日) yang baru terbit menyembul di atas semak rumput (十).' },
  '午': { pinyin: 'wǔ', meaning: 'Tengah hari / siang', radical: '十', radicalDesc: 'Alu penumbuk', logic: 'Matahari berada tegak lurus tepat di tengah langit.' },
  '晚': { pinyin: 'wǎn', meaning: 'Malam / larut', radical: '日', radicalDesc: 'Matahari', logic: 'Matahari (日) telah terbenam (免) sehingga berganti menjadi waktu malam.' },
  '上': { pinyin: 'shàng', meaning: 'Atas / menjelang', radical: '一', radicalDesc: 'Garis acuan', logic: 'Garis acuan dengan tanda di atasnya, menandakan posisi atas atau permulaan.' },
  '下': { pinyin: 'xià', meaning: 'Bawah / turun', radical: '一', radicalDesc: 'Garis acuan', logic: 'Garis acuan dengan penanda di bawahnya, menandakan posisi bawah atau turunan.' },
  '前': { pinyin: 'qián', meaning: 'Depan / sebelum', radical: '刂', radicalDesc: 'Pisau potong', logic: 'Kaki yang terus melangkah maju ke arah depan.' },
  '后': { pinyin: 'hòu', meaning: 'Belakang / setelah', radical: '口', radicalDesc: 'Mulut', logic: 'Instruksi penguasa yang ditaati dari belakang.' },
  '现': { pinyin: 'xiàn', meaning: 'Kini / tampak', radical: '王', radicalDesc: 'Giok / permata', logic: 'Batu giok (王/玉) yang diasah hingga tampak jelas (见) saat ini.' },
  '在': { pinyin: 'zài', meaning: 'Berada di / sedang', radical: '土', radicalDesc: 'Tanah / bumi', logic: 'Tanaman yang tumbuh kokoh bertumpu di atas tanah (土).' },
  '时': { pinyin: 'shí', meaning: 'Waktu / saat', radical: '日', radicalDesc: 'Matahari', logic: 'Pergerakan matahari (日) yang diukur dengan satuan ukuran (寸).' },
  '候': { pinyin: 'hòu', meaning: 'Menunggu / saat', radical: '亻', radicalDesc: 'Manusia', logic: 'Manusia (亻) yang mengamati anak panah mengukur perubahan musim.' },

  // Kata Kerja Utama
  '看': { pinyin: 'kàn', meaning: 'Melihat / menonton / membaca', radical: '目', radicalDesc: 'Mata', logic: 'Tangan (手) menaungi mata (目) dari silau agar bisa melihat dengan jelas.' },
  '听': { pinyin: 'tīng', meaning: 'Mendengar', radical: '口', radicalDesc: 'Mulut / suara', logic: 'Mulut (口) yang menyuarakan bunyi dan diterima telinga.' },
  '说': { pinyin: 'shuō', meaning: 'Berbicara / berkata', radical: '讠', radicalDesc: 'Kata / ucapan', logic: 'Kata-kata (讠) yang diucapkan dengan riang gembira (兑).' },
  '读': { pinyin: 'dú', meaning: 'Membaca (bersuara)', radical: '讠', radicalDesc: 'Kata / ucapan', logic: 'Kata-kata tertulis (讠) yang dilafalkan saat menelaah teks.' },
  '写': { pinyin: 'xiě', meaning: 'Menulis', radical: '冖', radicalDesc: 'Tudung atap', logic: 'Menggoreskan kuas di bawah atap (冖) di atas kertas.' },
  '吃': { pinyin: 'chī', meaning: 'Makan', radical: '口', radicalDesc: 'Mulut', logic: 'Aktivitas memasukkan santapan bergizi ke dalam mulut (口).' },
  '喝': { pinyin: 'hē', meaning: 'Minum', radical: '口', radicalDesc: 'Mulut', logic: 'Membuka mulut (口) untuk meneguk cairan saat dahaga (曷).' },
  '做': { pinyin: 'zuò', meaning: 'Membuat / mengerjakan', radical: '亻', radicalDesc: 'Manusia', logic: 'Manusia (亻) yang menggunakan tangan dan akal untuk menghasilkan karya (故).' },
  '买': { pinyin: 'mǎi', meaning: 'Membeli', radical: '乙', radicalDesc: 'Kait jaring', logic: 'Jaring (网) yang mengambil barang dengan menukarkan uang.' },
  '开': { pinyin: 'kāi', meaning: 'Membuka / menyetir', radical: '廾', radicalDesc: 'Dua tangan', logic: 'Dua tangan yang mendorong membuka palang pintu gerbang.' },
  '坐': { pinyin: 'zuò', meaning: 'Duduk', radical: '土', radicalDesc: 'Tanah / lantai', logic: 'Dua orang (从) duduk bersila berhadap-hadapan di atas tanah (土).' },
  '住': { pinyin: 'zhù', meaning: 'Tinggal / menetap', radical: '亻', radicalDesc: 'Manusia', logic: 'Manusia (亻) yang menyalakan lilin pelita (主) untuk menetap di satu rumah.' },
  '想': { pinyin: 'xiǎng', meaning: 'Ingin / rindu / berpikir', radical: '心', radicalDesc: 'Hati / pikiran', logic: 'Membayangkan wujud (相) seseorang di dalam lubuk hati (心).' },
  '会': { pinyin: 'huì', meaning: 'Bisa (karena belajar) / akan', radical: '人', radicalDesc: 'Manusia', logic: 'Pertemuan banyak manusia (人) yang mengumpulkan kepandaian bersama.' },
  '能': { pinyin: 'néng', meaning: 'Mampu / boleh', radical: '月', radicalDesc: 'Daging / tubuh', logic: 'Awalnya melambangkan sosok beruang kuat yang memiliki daya kemampuan fisik.' },
  '爱': { pinyin: 'ài', meaning: 'Mencintai / suka', radical: '爫', radicalDesc: 'Cakar tangan', logic: 'Tangan yang menyayangi dan merangkul perasaan hati (心).' },
  '来': { pinyin: 'lái', meaning: 'Datang', radical: '木', radicalDesc: 'Tanaman gandum', logic: 'Tanaman gandum berbuah lebat yang datang dari langit memberi rezeki.' },
  '去': { pinyin: 'qù', meaning: 'Pergi', radical: '厶', radicalDesc: 'Pribadi', logic: 'Seseorang yang melangkah meninggalkan tempat semula.' },
  '回': { pinyin: 'huí', meaning: 'Kembali / pulang', radical: '囗', radicalDesc: 'Pusaran / batas', logic: 'Pusaran air yang berputar kembali ke titik asalnya.' },
  '叫': { pinyin: 'jiào', meaning: 'Bernama / memanggil', radical: '口', radicalDesc: 'Mulut', logic: 'Mulut (口) yang berteriak memanggil nama seseorang.' },
  '打': { pinyin: 'dǎ', meaning: 'Memukul / menelepon', radical: '扌', radicalDesc: 'Tangan', logic: 'Aksi tangan (扌) yang beraktivitas memegang gagang telepon.' },

  // Benda, Makanan, Minuman, Tempat
  '水': { pinyin: 'shuǐ', meaning: 'Air', radical: '水', radicalDesc: 'Air', logic: 'Piktograf riak gelombang air sungai yang mengalir deras.' },
  '茶': { pinyin: 'chá', meaning: 'Teh', radical: '艹', radicalDesc: 'Tanaman / daun', logic: 'Pucuk daun tanaman (艹) dipetik manusia (人) dari pohon kayu (木).' },
  '米': { pinyin: 'mǐ', meaning: 'Beras / butir padi', radical: '米', radicalDesc: 'Biji-bijian', logic: 'Piktograf sebutir biji padi yang terbelah saat digiling.' },
  '饭': { pinyin: 'fàn', meaning: 'Nasi / makanan', radical: '饣', radicalDesc: 'Makanan', logic: 'Olahan makanan (饣) yang dibolak-balik (反) saat dimasak.' },
  '菜': { pinyin: 'cài', meaning: 'Sayur / masakan', radical: '艹', radicalDesc: 'Sayuran', logic: 'Tanaman hijau (艹) yang dipetik tangan (采) untuk dimasak menjadi hidangan.' },
  '苹': { pinyin: 'píng', meaning: 'Apel', radical: '艹', radicalDesc: 'Tanaman buah', logic: 'Tanaman pohon (艹) berbuah yang memberikan kedamaian (平).' },
  '果': { pinyin: 'guǒ', meaning: 'Buah', radical: '木', radicalDesc: 'Pohon kayu', logic: 'Buah bulat yang bergelantungan ranum di atas dahan pohon (木).' },
  '电': { pinyin: 'diàn', meaning: 'Listrik', radical: '田', radicalDesc: 'Sawah / kilat petir', logic: 'Kilatan petir yang menyambar menerangi langit ladang.' },
  '视': { pinyin: 'shì', meaning: 'Melihat / pandangan', radical: '礻', radicalDesc: 'Tanda berkah', logic: 'Mengamati dan melihat (见) pertunjukan dengan teliti.' },
  '脑': { pinyin: 'nǎo', meaning: 'Otak', radical: '月', radicalDesc: 'Organ tubuh', logic: 'Bagian organ fisik (月/肉) manusia tempat bersemayamnya pikiran.' },
  '影': { pinyin: 'yǐng', meaning: 'Bayangan / film', radical: '彡', radicalDesc: 'Sinar cahaya', logic: 'Pemandangan alam (景) yang diproyeksikan pantulan cahayanya (彡).' },
  '书': { pinyin: 'shū', meaning: 'Buku', radical: '乛', radicalDesc: 'Kuas tulis', logic: 'Piktograf tangan memegang kuas yang mencatat kata-kata di atas naskah gulungan.' },
  '字': { pinyin: 'zì', meaning: 'Huruf / karakter Hanzi', radical: '宀', radicalDesc: 'Atap rumah', logic: 'Anak (子) di bawah atap rumah (宀) yang tekun belajar menulis huruf.' },
  '家': { pinyin: 'jiā', meaning: 'Rumah / keluarga', radical: '宀', radicalDesc: 'Atap rumah', logic: 'Di bawah atap rumah (宀) terdapat hewan ternak (豕) melambangkan kesejahteraan keluarga.' },
  '学': { pinyin: 'xué', meaning: 'Belajar', radical: '子', radicalDesc: 'Anak', logic: 'Anak (子) di bawah atap ruang kelas yang menerima pencerahan ilmu.' },
  '校': { pinyin: 'xiào', meaning: 'Sekolah', radical: '木', radicalDesc: 'Kayu', logic: 'Bangunan berbahan kayu (木) tempat bertukar dan membandingkan ilmu (交).' },
  '店': { pinyin: 'diàn', meaning: 'Toko / kedai', radical: '广', radicalDesc: 'Gedung luas', logic: 'Gedung naungan (广) tempat memajang barang jualan (占).' },
  '商': { pinyin: 'shāng', meaning: 'Perniagaan / pedagang', radical: '口', radicalDesc: 'Mulut', logic: 'Bermusyawarah menawar barang dagangan di pasar.' },
  '院': { pinyin: 'yuàn', meaning: 'Halaman / gedung institusi', radical: '阝', radicalDesc: 'Dinding bukit', logic: 'Kompleks bangunan yang dilingkupi dinding pelindung (阝).' },
  '医': { pinyin: 'yī', meaning: 'Medis / dokter', radical: '匚', radicalDesc: 'Kotak wadah', logic: 'Kotak (匚) perkakas anak panah/alat bedah untuk menyembuhkan luka.' },
  '站': { pinyin: 'zhàn', meaning: 'Stasiun / berdiri', radical: '立', radicalDesc: 'Berdiri tegak', logic: 'Berdiri tegak (立) di pos perhentian menanti kedatangan kendaraan.' },
  '机': { pinyin: 'jī', meaning: 'Mesin / pesawat', radical: '木', radicalDesc: 'Kayu / mekanisme', logic: 'Rangkaian komponen kayu (木) yang saling terhubung membentuk mesin.' },
  '车': { pinyin: 'chē', meaning: 'Mobil / kendaraan', radical: '车', radicalDesc: 'Roda kereta', logic: 'Piktograf kereta roda dua tampak atas dengan gandar di tengahnya.' },
  '飞': { pinyin: 'fēi', meaning: 'Terbang', radical: '飞', radicalDesc: 'Sayap terbang', logic: 'Piktograf kepakan sayap burung yang membubung meluncur di angkasa.' },
  '猫': { pinyin: 'māo', meaning: 'Kucing', radical: '犭', radicalDesc: 'Hewan', logic: 'Hewan berkaki empat (犭) yang mengeong lincah di ladang tanaman (苗).' },
  '狗': { pinyin: 'gǒu', meaning: 'Anjing', radical: '犭', radicalDesc: 'Hewan', logic: 'Hewan setia (犭) penjaga rumah dengan bunyi gonggongan (句).' },
  '杯': { pinyin: 'bēi', meaning: 'Gelas / cangkir', radical: '木', radicalDesc: 'Kayu', logic: 'Wadah minum yang dahulu dipahat dari kayu (木).' },
  '桌': { pinyin: 'zhuō', meaning: 'Meja', radical: '木', radicalDesc: 'Kayu', logic: 'Perabot berkaki tinggi (卓) yang terbuat dari bahan kayu (木).' },
  '椅': { pinyin: 'yǐ', meaning: 'Kursi', radical: '木', radicalDesc: 'Kayu', logic: 'Tempat duduk dari kayu (木) tempat menyandarkan tubuh dengan nyaman (奇).' },
  '钱': { pinyin: 'qián', meaning: 'Uang', radical: '钅', radicalDesc: 'Logam', logic: 'Benda tempaan logam (钅) yang sangat dijaga (戋) sebagai alat tukar sah.' },
  '衣': { pinyin: 'yī', meaning: 'Pakaian / baju', radical: '衣', radicalDesc: 'Pakaian', logic: 'Piktograf potongan jubah tradisional yang menutup badan.' },
  '服': { pinyin: 'fú', meaning: 'Baju / tunduk', radical: '月', radicalDesc: 'Daging / tubuh', logic: 'Kain busana yang melekat pas membungkus badan fisik (月).' },

  // Sifat & Keterangan
  '好': { pinyin: 'hǎo', meaning: 'Baik / bagus', radical: '女', radicalDesc: 'Wanita', logic: 'Seorang wanita (女) yang memeluk anak bayinya (子) melambangkan kebaikan sempurna.' },
  '大': { pinyin: 'dà', meaning: 'Besar', radical: '大', radicalDesc: 'Besar', logic: 'Piktograf seseorang merentangkan kedua tangan dan kaki selebar-lebarnya.' },
  '小': { pinyin: 'xiǎo', meaning: 'Kecil', radical: '小', radicalDesc: 'Kecil', logic: 'Garis yang terbagi menjadi bagian-bagian sangat tipis dan kecil.' },
  '冷': { pinyin: 'lěng', meaning: 'Dingin', radical: '冫', radicalDesc: 'Es / beku', logic: 'Dua tetes kristal es (冫) yang membekukan suhu udara.' },
  '热': { pinyin: 'rè', meaning: 'Panas', radical: '灬', radicalDesc: 'Api', logic: 'Tanaman di atas tanah (土) yang disinari panas terik bara api (灬).' },
  '高': { pinyin: 'gāo', meaning: 'Tinggi', radical: '高', radicalDesc: 'Menara tinggi', logic: 'Piktograf menara pengawas beratap tinggi bertingkat.' },
  '兴': { pinyin: 'xìng', meaning: 'Gembira / bangkit', radical: '八', radicalDesc: 'Dua tangan bersorak', logic: 'Banyak tangan bersama-sama mengangkat benda dengan penuh semangat.' },
  '多': { pinyin: 'duō', meaning: 'Banyak', radical: '夕', radicalDesc: 'Malam / bulan sabit', logic: 'Dua bulan sabit (夕) bertumpuk menandakan malam yang berlipat ganda.' },
  '少': { pinyin: 'shǎo', meaning: 'Sedikit', radical: '小', radicalDesc: 'Kecil', logic: 'Benda kecil (小) yang dipotong satu goresan lagi sehingga kian sedikit.' },
  '很': { pinyin: 'hěn', meaning: 'Sangat', radical: '彳', radicalDesc: 'Langkah kaki', logic: 'Langkah kaki yang melangkah maju dengan determinasi kuat (艮).' },
  '太': { pinyin: 'tài', meaning: 'Terlalu / teramat', radical: '大', radicalDesc: 'Besar', logic: 'Karakter besar (大) yang diberi satu titik ekstra di bawahnya, melampaui batas.' },
  '都': { pinyin: 'dōu', meaning: 'Semua / seluruhnya', radical: '阝', radicalDesc: 'Kota / wilayah', logic: 'Seluruh warga di perkotaan (阝) berkumpul bersama tanpa terkecuali.' },
  '白': { pinyin: 'bái', meaning: 'Putih / terang', radical: '白', radicalDesc: 'Putih', logic: 'Pancaran sinar matahari murni berwarna putih bersih.' },
  '黑': { pinyin: 'hēi', meaning: 'Hitam / gelap', radical: '黑', radicalDesc: 'Jelaga hitam', logic: 'Asap jelaga perapian yang menghitamkan dinding tungku.' },
  '红': { pinyin: 'hóng', meaning: 'Merah', radical: '纟', radicalDesc: 'Benang sutra', logic: 'Benang kain sutra (纟) yang dicelup zat pewarna merah cerah.' },
  '远': { pinyin: 'yuǎn', meaning: 'Jauh', radical: '辶', radicalDesc: 'Berjalan', logic: 'Langkah kaki (辶) yang telah menempuh perjalanan panjang berjarak jauh.' },
  '近': { pinyin: 'jìn', meaning: 'Dekat', radical: '辶', radicalDesc: 'Berjalan', logic: 'Langkah kaki (辶) yang berjarak hanya seukuran satu kapak (斤).' },
  '快': { pinyin: 'kuài', meaning: 'Cepat / gembira', radical: '忄', radicalDesc: 'Hati', logic: 'Detak perasaan hati (忄) yang berdegup kencang bersemangat.' },
  '慢': { pinyin: 'màn', meaning: 'Lambat', radical: '忄', radicalDesc: 'Hati', logic: 'Suasana hati (忄) yang santai dan perlahan tanpa terburu-buru.' },

  // Penunjuk, Tanya & Partikel
  '这': { pinyin: 'zhè', meaning: 'Ini', radical: '辶', radicalDesc: 'Berjalan', logic: 'Sesuatu yang berada persis dekat di samping langkah kaki (辶) kita.' },
  '那': { pinyin: 'nà', meaning: 'Itu', radical: '阝', radicalDesc: 'Wilayah / kota', logic: 'Sesuatu yang berada di seberang sana pada jarak pandang.' },
  '哪': { pinyin: 'nǎ', meaning: 'Mana / yang mana', radical: '口', radicalDesc: 'Mulut', logic: 'Membuka mulut (口) menanyakan pilihan lokasi "itu" (那).' },
  '谁': { pinyin: 'shéi', meaning: 'Siapa', radical: '讠', radicalDesc: 'Kata / ucapan', logic: 'Kata pertanyaan (讠) menanyakan identitas burung/orang (隹).' },
  '什': { pinyin: 'shén', meaning: 'Apa', radical: '亻', radicalDesc: 'Manusia', logic: 'Karakter pembentuk kata tanya benda atau hal.' },
  '么': { pinyin: 'me', meaning: 'Partikel tanya/akhiran', radical: '丿', radicalDesc: 'Goresan miring', logic: 'Partikel pembantu pembentuk kata tanya seperti 什么, 怎么.' },
  '几': { pinyin: 'jǐ', meaning: 'Berapa (jumlah kecil < 10)', radical: '几', radicalDesc: 'Meja kecil', logic: 'Piktograf meja kecil tempat menghitung sedikit barang.' },
  '怎': { pinyin: 'zěn', meaning: 'Bagaimana', radical: '心', radicalDesc: 'Hati / pikiran', logic: 'Perasaan batin (心) yang bertanya-tanya mencari jalan keluar.' },
  '样': { pinyin: 'yàng', meaning: 'Macam / bentuk / rupa', radical: '木', radicalDesc: 'Kayu', logic: 'Pola kayu (木) yang dibentuk menyerupai rupa domba (羊).' },
  '不': { pinyin: 'bù', meaning: 'Tidak / bukan', radical: '一', radicalDesc: 'Satu', logic: 'Awalnya melambangkan benih yang belum menembus tanah, bermakna negasi/belum.' },
  '没': { pinyin: 'méi', meaning: 'Tidak ada / belum', radical: '氵', radicalDesc: 'Air', logic: 'Benda yang tenggelam ke dalam air (氵) sehingga tak tampak lagi.' },
  '谢': { pinyin: 'xiè', meaning: 'Terima kasih', radical: '讠', radicalDesc: 'Kata / ucapan', logic: 'Menyampaikan kata-kata tulus (讠) dengan membungkukkan tubuh (身).' },
  '对': { pinyin: 'duì', meaning: 'Benar / tepat / terhadap', radical: '寸', radicalDesc: 'Inci / aturan', logic: 'Tindakan yang tepat sesuai ukuran standar timbangan (寸).' },
  '起': { pinyin: 'qǐ', meaning: 'Bangun / bangkit', radical: '走', radicalDesc: 'Melangkah', logic: 'Berdiri melangkah (走) untuk bangkit menuju tujuan (己).' },
  '客': { pinyin: 'kè', meaning: 'Tamu', radical: '宀', radicalDesc: 'Atap rumah', logic: 'Sosok orang asing yang datang bertamu ke dalam rumah (宀).' },
  '气': { pinyin: 'qì', meaning: 'Udara / gas / suasana', radical: '气', radicalDesc: 'Uap udara', logic: 'Piktograf hembusan uap awan atau udara yang mengalir di atmosfer.' },
  '再': { pinyin: 'zài', meaning: 'Lagi / kembali', radical: '冂', radicalDesc: 'Garis batas', logic: 'Melakukan tindakan sekali lagi untuk kedua kalinya.' },
  '见': { pinyin: 'jiàn', meaning: 'Melihat / bertemu', radical: '见', radicalDesc: 'Melihat', logic: 'Sosok manusia berjongkok dengan mata besar memandang wajah seseorang.' },
  '吗': { pinyin: 'ma', meaning: 'Apakah (partikel tanya)', radical: '口', radicalDesc: 'Mulut', logic: 'Mulut (口) yang berseru mengajukan pertanyaan "ya atau tidak".' },
  '呢': { pinyin: 'ne', meaning: 'Bagaimana dengan... / sedang', radical: '口', radicalDesc: 'Mulut', logic: 'Mulut (口) yang menimpali pertanyaan balik bernada santai.' },
  '吧': { pinyin: 'ba', meaning: 'Mari / ya kan (saran)', radical: '口', radicalDesc: 'Mulut', logic: 'Mulut (口) yang melontarkan nada ajakan bersahabat.' },
  '了': { pinyin: 'le', meaning: 'Sudah (perubahan kondisi)', radical: '乙', radicalDesc: 'Garis bengkok', logic: 'Piktograf bayi yang telah terbungkus rapi menandakan selesainya proses.' }
};

// Fungsi pendeteksi otomatis bedah karakter & radikal
export function getHanziBreakdown(hanziString) {
  if (!hanziString) return [];
  // Ambil hanya karakter Hanzi (filter tanda baca seperti ，。？！)
  const hanziChars = hanziString.match(/[\u4e00-\u9fa5]/g) || [];
  if (hanziChars.length === 0) return [];

  // Deduplikasi karakter berturut-turut agar tidak dobel (misal 妈妈 -> 妈)
  const uniqueChars = Array.from(new Set(hanziChars));

  return uniqueChars.map(ch => {
    if (HANZI_BREAKDOWN_DICT[ch]) {
      const item = HANZI_BREAKDOWN_DICT[ch];
      return {
        char: ch,
        pinyin: item.pinyin,
        meaning: item.meaning,
        radical: item.radical,
        radicalMeaning: item.radicalDesc || COMMON_RADICALS[item.radical]?.name || 'Bagian Pembentuk',
        explanation: item.logic
      };
    }

    // Deteksi radikal otomatis jika belum ada di kamus spesifik
    let foundRad = '一';
    let radDesc = 'Garis dasar pembentuk';

    for (const [rad, info] of Object.entries(COMMON_RADICALS)) {
      if (ch.includes(rad) && rad !== '一') {
        foundRad = rad;
        radDesc = info.name;
        break;
      }
    }

    return {
      char: ch,
      pinyin: '',
      meaning: `Karakter pembentuk kata ${hanziString}`,
      radical: foundRad,
      radicalMeaning: radDesc,
      explanation: `Mengandung unsur radikal ${foundRad} (${radDesc}).`
    };
  });
}

export default getHanziBreakdown;
