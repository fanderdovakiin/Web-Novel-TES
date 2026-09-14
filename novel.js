const novels = [
  {
    id: 1,
    judul: "Book 1: AURBIS — PENCIPTAAN & KOSMOLOGI",
    cover: "image/cover1.jpg",
    chapters: [
      {
        id: 1,
        judul: "BAB 1 - THE VOID & ANU/PADOMAY: SEBELUM SEGALANYA ADA",
        deskripsi: "Di mana tidak ada apa-apa, di situlah segalanya bermula.Dari Gulungan Pertama yang Tak Bernama",
        gambar: ["image/bab1/bab1-1.jpg", "image/bab1/bab1-2.jpg"],
        file: "content/isi_cerita/bab1.txt",
        grafik: "grafik/The Void&Anu.html"
      },
      {
        id: 2,
        judul: "BAB 2 — AURBIS: ARSITEKTUR REALITAS —",
        deskripsi: "Lihatlah ke atas, hai fana, dan saksikanlah: langit yang kaulihat bukanlah langit. Ia adalah lubang — ribuan lubang — yang ditinggalkan oleh mereka yang melarikan diri dari penjara ini.Dari catatan Athynic, Mata Psijic Ketujuh, tentang hakikat bintang-bintang",
        gambar: ["image/bab2/bab2-1.jpg", "image/bab2/bab2-2.jpg"],
        file: "content/isi_cerita/bab2.txt",
        grafik: "grafik/Arsitektur Realitas.html"
      },
      {
        id: 3,
        judul: "BAB 3 — ET'ADA: MAKHLUK PERTAMA —",
        deskripsi: "Sebelum ada manusia, sebelum ada Mer, sebelum ada Naga atau Hist atau hal lain yang bernyawa — ada mereka. Original Spirits. Et'Ada. Mereka yang datang sebelum nama-nama, sebelum bentuk-bentuk, sebelum batas antara dewa dan bukan-dewa ditemukan.Dari The Monomyth — versi Psijic, ditulis di Artaeum dalam bahasa yang tidak lagi diucapkan oleh lidah mana pun",
        gambar: ["image/bab3/bab3-1.jpg", "image/bab3/bab3-2.jpg"],
        file: "content/isi_cerita/bab3.txt",
        grafik: "grafik/Mahluk Pertama.html"
      },
      {
        id: 4,
        judul: "BAB 4 — LORKHAN DAN PENCIPTAAN MUNDUS —",
        deskripsi: "Ia datang kepada kami dengan kata-kata seperti madu dan janji seperti bintang-bintang. Ia berkata: 'Kita bisa menciptakan sesuatu yang belum pernah ada — sebuah dunia, sebuah arena, sebuah tempat di mana jiwa bisa membuktikan dirinya sendiri.' Dan kami percaya. Kami semua percaya. Bahkan mereka yang kemudian membencinya paling keras — pada mulanya, mereka percaya.Rekonstruksi dari kesaksian Auri-El, sebagaimana dicatat dalam The Monomyth — sumber tertua yang tersisa",
        gambar: ["image/bab4/bab4-1.jpg", "image/bab4/bab4-2.jpg"],
        file: "content/isi_cerita/bab4.txt",
        grafik: "grafik/Lorkhan.html"
      },
      {
        id: 5,
        judul: "BAB 5 — EHLNOFEY DAN HIST: NENEK MOYANG RAS-RAS —",
        deskripsi: "Sebelum ada Nord dan Altmer, sebelum ada Dunmer dan Khajiit dan Imperial dan semua yang mengisi tanah ini dengan keributan peradaban mereka — ada Ehlnofey. Dan sebelum Ehlnofey, ada Hist. Dan sebelum Hist... mungkin tidak ada yang bisa menjawab itu dengan jujur, karena Hist sendiri tidak berbicara kepada kita dengan kata-kata yang bisa dipahami.Dari Carta Primordialis — kronik yang diklaim ditulis oleh inisiat Psijic pertama, yang keberadaannya sendiri masih diperdebatkan",
        gambar: ["image/bab5/bab5-1.jpg", "image/bab5/bab5-2.jpg"],
        file: "content/isi_cerita/bab5.txt",
        grafik: "grafik/Nenek Moyang Ras.html"
      }
    ]
  },
  {
    id: 2,
    judul: "Book 2: ERA FAJAR & ERA PERTAMA",
    cover: "image/cover2.jpg",
    chapters: [
      {
        id: 6,
        judul: "BAB 6 — DAWN ERA: ERA FAJAR —",
        deskripsi: "Jangan tanyakan padaku apa yang terjadi di Era Fajar. Tanyakan padamu sendiri apa yang kamu rasakan ketika kamu bermimpi — ketika batas antara apa yang nyata dan apa yang hanya mungkin menjadi kabur, ketika kamu bisa terbang hanya karena kamu belum ingat bahwa kamu tidak bisa. Era Fajar adalah mimpi Aurbis yang belum sadar bahwa ia bermimpi.Dari Memoirs of a Sleeping God — teks yang ditemukan di Apocrypha, penulisnya tidak diketahui dan mungkin tidak pernah ada",
        gambar: ["image/bab6/bab6-1.jpg", "image/bab6/bab6-2.jpg"],
        file: "content/isi_cerita/bab6.txt",
        grafik: "grafik/Era Fajar.html"
      },
      {
        id: 7,
        judul: "BAB 7 — MERETHIC ERA: KETIKA DUNIA MENEMUKAN NAMANYA —",
        deskripsi: "Merethic Era dimulai ketika makhluk-makhluk pertama mengangkat wajah mereka ke langit dan bertanya: 'Di mana kita?' Dan berakhir ketika mereka akhirnya cukup berani untuk bertanya: 'Siapa yang berani mengambil ini dari kita?' Seluruh era adalah perjalanan dari satu pertanyaan ke pertanyaan lain — dan semua yang ada di antaranya adalah darah, keajaiban, dan klaim atas tanah yang belum pernah menjadi milik siapa pun.Dari Before the Ages of Man — Marobar Sul, edisi revisi oleh Aicantar of Shimmerene",
        gambar: ["image/bab7/bab7-1.jpg", "image/bab7/bab7-2.jpg"],
        file: "content/isi_cerita/bab7.txt",
        grafik: "grafik/Merethic Era.html"
      },
      {
        id: 8,
        judul: "BAB 8 — FIRST ERA (BAGIAN 1): API PEMBEBASAN —",
        deskripsi: "Ia bukan ratu. Ia bukan penyihir. Ia bukan jenderal. Ia adalah seorang budak — dan seorang budak yang berdoa lebih keras dari siapa pun yang pernah berdoa sebelumnya. Dan para dewa mendengar. Mereka mendengar karena tidak ada yang bisa menolak suara seseorang yang tidak memiliki apa pun kecuali doanya.Dari Shezarr and the Divines — teks teologis Imperial Era Kedua, penulis tidak diketahui",
        gambar: ["image/bab8/bab8-1.jpg", "image/bab8/bab8-2.jpg"],
        file: "content/isi_cerita/bab8.txt",
        grafik: "grafik/First Era.html"
      },
      {
        id: 9,
        judul: "BAB 9 — FIRST ERA (BAGIAN 2): PERANG, MISTERI, DAN DEWA PALSU —",
        deskripsi: "Apa yang terjadi di Red Mountain pada hari itu? Tanyakan kepada seratus sarjana dan kau akan mendapat seratus jawaban. Tanyakan kepada Vivec dan ia akan tersenyum. Tanyakan kepada Dagoth Ur dan ia akan membunuhmu. Tanyakan kepada Nerevar — tapi Nerevar sudah mati. Dan bagaimana ia mati, dan siapa yang membunuhnya — itulah pertanyaan yang telah membakar Morrowind selama tiga ribu tahun.Dari The War of the First Council — teks yang dilarang oleh Tribunal Temple namun yang terus beredar secara diam-diam di antara Dissident Priests",
        gambar: ["image/bab9/bab9-1.jpg", "image/bab9/bab9-2.jpg"],
        file: "content/isi_cerita/bab9.txt",
        grafik: "grafik/First Era bg2.html"
      },
      {
        id: 10,
        judul: "BAB 10 — SECOND ERA: KEKOSONGAN, PERANG, DAN KEBANGKITAN KEKAISARAN —",
        deskripsi: "Second Era dimulai bukan dengan fanfare — tidak ada trompet, tidak ada proklamasi, tidak ada raja baru yang menaikkan spanduk kemenangan. Ia dimulai dengan keheningan. Keheningan di koridor-koridor White-Gold Tower yang kosong, keheningan di kota-kota yang tidak tahu siapa yang harus mereka patuhi, keheningan dari ribuan jiwa yang bertanya dalam gelap: 'Sekarang, kita apa?.Dari The Interregnum and Its Discontents — disusun oleh Proctor Albain of the Arcane University, 4E 12",
        gambar: ["image/bab10/bab10-1.jpg", "image/bab10/bab10-2.jpg"],
        file: "content/isi_cerita/bab10.txt",
        grafik: "grafik/Second Era.html"
      },
      {
        id: 11,
        judul: "BAB 11 — THIRD ERA (BAGIAN 1): SEPTIM DYNASTY DAN SIMULACRUM —",
        deskripsi: "Ada hal-hal yang lebih buruk dari memiliki raja yang jahat. Salah satunya adalah memiliki raja yang baik — namun mengetahui bahwa raja yang duduk di singgasana bukanlah dia. Bahwa senyuman itu bukan senyumannya. Bahwa keputusan-keputusan itu bukan keputusannya. Bahwa sosok yang menggunakan wajahnya, suaranya, mahkotanya — adalah seorang penipu yang memujanya sendiri. Selama sepuluh tahun, Tamriel tunduk kepada penipu itu. Dan Tamriel tidak tahu.Dari The Real Barenziah — Volume IV, yang terlarang namun selalu beredar",
        gambar: ["image/bab11/bab11-1.jpg", "image/bab11/bab11-2.jpg"],
        file: "content/isi_cerita/bab11.txt",
        grafik: "grafik/Third Era.html"
      },
      {
        id: 12,
        judul: "BAB 12 — THIRD ERA (BAGIAN 2): MORROWIND — TANAH NUBUAT DAN DEWA PALSU —",
        deskripsi: "Engkau bukan yang pertama. Engkau tidak akan menjadi yang terakhir. Namun engkau adalah yang saat ini. Dan saat ini, hanya ada satu hal yang harus dilakukan: pergi ke Red Mountain, hancurkan Heart of Lorkhan, dan tutup luka yang sudah terbuka selama tiga ribu tahun. Mudah diucapkan. Tidak ada yang mengatakan bahwa itu mudah dilakukan.Dari teks yang diklaim sebagai kata-kata terakhir Azura kepada Nerevarine, sebagaimana diceritakan kembali oleh Dissident Priests — keasliannya diperdebatkan",
        gambar: ["image/bab12/bab12-1.jpg", "image/bab12/bab12-2.jpg"],
        file: "content/isi_cerita/bab12.txt",
        grafik: "grafik/Third Era bg2.html"
      },
      {
        id: 13,
        judul: "BAB 13 — THIRD ERA (BAGIAN 3): OBLIVION CRISIS — KETIKA LANGIT TERBUKA —",
        deskripsi: "Aku telah melihat hal-hal yang tidak seharusnya dilihat oleh mata manusia. Aku telah berdiri di tepi Oblivion Gate dan merasakan panas dari neraka yang terasa lebih nyata dari sinar matahari yang pernah menyentuh wajahku. Aku telah menyaksikan seorang pria biasa merobek jubah pendeta yang ia kenakan dan menggantinya dengan jubah kaisar — bukan karena ia menginginkannya, melainkan karena tidak ada orang lain yang tersisa. Dan aku telah menyaksikan seorang naga emas yang ukurannya melampaui menara tertinggi berdiri di atas puing-puing dan mengusir iblis kembali ke kegelapan. Semuanya dalam satu tahun. Satu tahun yang mengubah Tamriel selamanya.Dari jurnal pribadi Captain Renault — yang gugur di Kvatch pada hari pertama Oblivion Crisis, ditemukan di antara reruntuhan kota",
        gambar: ["image/bab13/bab13-1.jpg", "image/bab13/bab13-2.jpg"],
        file: "content/isi_cerita/bab13.txt",
        grafik: "grafik/Third Era bg3.html"
      },
      {
        id: 14,
        judul: "BAB 14 — FOURTH ERA: DUNIA YANG DIBANGUN DI ATAS ABU —",
        deskripsi: "Mereka bilang bahwa Fourth Era dimulai dengan harapan — karena Oblivion Crisis sudah berakhir, karena naga emas berdiri sebagai penjaga di halaman White-Gold Tower, karena Dagon sudah pergi. Mereka salah. Fourth Era dimulai dengan kesunyian yang paling mengerikan yang pernah ada — kesunyian dari bangsa yang tidak tahu lagi siapa yang harus mereka percayai, siapa yang harus mereka sembah, siapa yang harus mereka minta untuk memerintah mereka. Kesunyian itu lebih berbahaya dari ribuan Oblivion Gate.Dari The Infernal City — catatan fiktif yang menangkap semangat Fourth Era awal",
        gambar: ["image/bab14/bab14-1.jpg", "image/bab14/bab14-2.jpg"],
        file: "content/isi_cerita/bab14.txt",
        grafik: "grafik/Fourth Era.html"
      },
      {
        id: 15,
        judul: "BAB 15 — TES V: SKYRIM — KRONIK SANG DRAGONBORN —",
        deskripsi: "Fus Ro Dah. Tiga kata. Tiga suku kata yang mengguncang gunung, membelah badai, dan mengingatkan naga-naga bahwa ada sesuatu di dunia ini yang lebih tua dari mereka, lebih fundamental dari mereka, dan yang tidak akan membiarkan mereka memakan dunia ini tanpa perjuangan.Dari Songs of the Dragonborn — kumpulan balada yang dinyanyikan di Skyrim setelah 4E 201, penulis bervariasi",
        gambar: ["image/bab15/bab15-1.jpg", "image/bab15/bab15-2.jpg"],
        file: "content/isi_cerita/bab15.txt",
        grafik: "grafik/TES Dragonborn.html"
      },
      {
        id: 16,
        judul: "BAB 16 — SKYRIM: DAWNGUARD DLC — MATAHARI YANG HAMPIR PADAM —",
        deskripsi: "Bayangkan sebuah dunia tanpa matahari. Bukan malam yang biasa — malam yang kau tahu akan diakhiri oleh fajar. Melainkan kegelapan permanen, kegelapan yang tidak pernah berakhir, di mana vampire berkeliaran bebas dan manusia hidup dalam ketakutan yang tidak bisa mereka sebut dengan nama karena nama itu terlalu besar untuk lidah fana. Itulah yang Harkon inginkan. Dan itulah yang hampir terjadi.Dari The Tyranny of the Sun — buku yang ditemukan di Volkihar Castle, ditulis oleh Harkon sendiri",
        gambar: ["image/bab16/bab16-1.jpg", "image/bab16/bab16-2.jpg"],
        file: "content/isi_cerita/bab16.txt",
        grafik: "grafik/TES Dawnguard.html"
      },
      {
        id: 17,
        judul: "BAB 17 — SKYRIM: DRAGONBORN DLC — SANG YANG PERTAMA DAN SANG YANG TERAKHIR —",
        deskripsi: "Ada sesuatu yang sangat mengerikan tentang bertemu seseorang yang, dalam segala hal, adalah versi lebih tua dan lebih kuat dari dirimu. Seseorang yang melakukan semua yang kamu lakukan — namun ribuan tahun lebih awal, tanpa panduan, tanpa contoh untuk diikuti. Seseorang yang membayar harga yang tidak pernah kamu harus bayar. Dan seseorang yang, karena semua itu, percaya bahwa ia berhak atas apa yang kamu miliki — termasuk jiwamu sendiri.Dari Reflections on Solstheim — catatan tak bertanda yang ditemukan di Tel Mithryn setelah peristiwa DLC",
        gambar: ["image/bab17/bab17-1.jpg", "image/bab17/bab17-2.jpg"],
        file: "content/isi_cerita/bab17.txt",
        grafik: "grafik/TES Dragonborn dlc.html"
      },
      {
        id: 18,
        judul: "BAB 18 — SKYRIM: PERANG SAUDARA — STORMCLOAKS VS IMPERIAL LEGION —",
        deskripsi: "Tidak ada perang yang benar-benar sederhana. Tidak ada perang yang benar-benar hanya tentang apa yang dikatakannya. Di balik setiap spanduk yang dikibarkan dan setiap doa yang dipanjatkan sebelum pertempuran, selalu ada lapisan-lapisan motivasi yang saling tumpang tindih — kebanggaan, ketakutan, trauma lama, kalkulasi dingin, dan kadang-kadang, sangat jarang, sesuatu yang benar-benar bisa disebut keyakinan. Skyrim Civil War memiliki semuanya. Dan tidak satu pun pihak yang cukup bersih untuk berdiri di atas moral high ground yang mereka klaim.Dari The War of the Dragon Bridge — memoar seorang prajurit yang berperang di kedua sisi, nama dirahasiakan",
        gambar: ["image/bab18/bab18-1.jpg", "image/bab18/bab18-2.jpg"],
        file: "content/isi_cerita/bab18.txt",
        grafik: "grafik/TES Civil War.html"
      }
    ]
  },
  {
    id: 3,
    judul: "Book 3: PETA & GEOGRAFI TAMRIEL",
    cover: "image/cover3.jpg",
    chapters: [
      {
        id: 19,
        judul: "BAB 19 — PETA LENGKAP TAMRIEL —",
        deskripsi: "Untuk memahami sejarah Tamriel, kau harus terlebih dahulu memahami tanahnya. Karena tanah itu bukan sekadar latar belakang dari drama manusia dan Mer yang berlangsung di atasnya — ia adalah peserta aktif. Pegunungan yang memisahkan bangsa-bangsa. Lautan yang menjadi highway dan hambatan sekaligus. Padang pasir yang membentuk karakter keras penduduknya. Rawa-rawa yang menyembunyikan rahasia. Hutan yang menolak untuk menyerah kepada peradaban. Tamriel bukan hanya tempat di mana sejarah terjadi — Tamriel adalah sejarah itu sendiri.Dari Geographic Commentaries on the Provinces — oleh Phrastus of Elinhir, seorang sarjana dan penjelajah yang menghabiskan empat puluh tahun memetakan Tamriel",
        gambar: ["image/bab19/bab19-1.jpg", "image/bab19/bab19-2.jpg"],
        file: "content/isi_cerita/bab19.txt",
        grafik: "grafik/Peta Tamriel.html"
      },
      {
        id: 20,
        judul: "BAB 20 — SKYRIM: GEOGRAFI DETAIL — SEMBILAN HOLD DAN RAHASIA MEREKA —",
        deskripsi: "Skyrim bukan satu tempat. Ia adalah sembilan tempat yang dipaksa untuk menjadi satu oleh sejarah dan oleh kebutuhan — dan yang menolak, di setiap kesempatan yang ada, untuk sepenuhnya patuh pada paksaan itu. Setiap Hold adalah sebuah dunia kecil dengan karakternya sendiri, dengan masalahnya sendiri, dengan cara hidupnya sendiri. Untuk memahami Skyrim, kamu tidak bisa melihat dari atas. Kamu harus turun ke tanahnya, menghirup udara masing-masing Hold, dan mendengarkan apa yang tanah itu ceritakan kepada mereka yang mau mendengar.Dari A Pilgrim's Guide to Skyrim — oleh Viarmo, Headmaster of the Bards College",
        gambar: ["image/bab20/bab20-1.jpg", "image/bab20/bab20-2.jpg"],
        file: "content/isi_cerita/bab20.txt",
        grafik: "grafik/Geografi Skyrim.html"
      },
      {
        id: 21,
        judul: "BAB 21 — CYRODIIL: JANTUNG KEKAISARAN —",
        deskripsi: "Imperial City bukan hanya sebuah kota. Ia adalah sebuah argumen — argumen bahwa peradaban mungkin, bahwa tatanan bisa ada, bahwa manusia yang berbeda bisa hidup bersama di bawah satu hukum dan satu naungan. Kadang-kadang argumen itu meyakinkan. Kadang-kadang tidak. Namun ia terus disampaikan, generasi demi generasi, selama ribuan tahun. Dan selama ia terus disampaikan, masih ada harapan.Dari Commentaries on the Founding of the Empire — disusun oleh Abnur Tharn, Chancellor of the Elder Council",
        gambar: ["image/bab21/bab21-1.jpg", "image/bab21/bab21-2.jpg"],
        file: "content/isi_cerita/bab21.txt",
        grafik: "grafik/Geografi Cyrodill.html"
      },
      {
        id: 22,
        judul: "BAB 22 — MORROWIND: TANAH ABU DAN JAMUR —",
        deskripsi: "Untuk memahami Morrowind, kau harus terlebih dahulu melupakan semua yang kau ketahui tentang keindahan. Karena keindahan Morrowind bukan keindahan yang pernah diajarkan kepadamu — bukan bunga yang mekar di padang rumput, bukan sungai yang jernih mengalir di bawah pohon rindang. Keindahan Morrowind adalah keindahan abu yang berawan di bawah langit merah, jamur raksasa yang menjulang seperti menara dari dunia yang bermimpi, dan suara angin yang membawa bisikan dari gunung berapi yang tidak pernah benar-benar tidur.Dari Ashland Hymns — kumpulan puisi Ashlander yang diterjemahkan oleh Julan Kaushibael, Urshilaku Tribe",
        gambar: ["image/bab22/bab22-1.jpg", "image/bab22/bab22-2.jpg"],
        file: "content/isi_cerita/bab22.txt",
        grafik: "grafik/Geografi Morrowind.html"
      },
      {
        id: 23,
        judul: "BAB 23 — SUMMERSET ISLES, VALENWOOD, DAN ELSWEYR —",
        deskripsi: "Tiga provinsi yang membentuk selatan dan barat Tamriel. Tiga cara yang berbeda untuk menjawab pertanyaan yang sama: bagaimana cara hidup ketika dunia di sekitarmu tidak pernah berhenti berubah? Altmer menjawab: dengan berdiri teguh, dengan menolak perubahan, dengan mempertahankan kesempurnaan yang rapuh. Bosmer menjawab: dengan bergerak bersama perubahan, dengan menjadi bagian dari alam yang bergerak. Khajiit menjawab: dengan menari di antara perubahan, dengan menemukan ritme di dalam kekacauan. Semuanya benar. Tidak satu pun yang cukup.Dari The Philosophical Geography of Southern Tamriel — Lalatia Varian, Scholar of the Arcane University",
        gambar: ["image/bab23/bab23-1.jpg", "image/bab23/bab23-2.jpg"],
        file: "content/isi_cerita/bab23.txt",
        grafik: "grafik/Geografi SummValEl.html"
      },
      {
        id: 24,
        judul: "BAB 24 — HAMMERFELL, HIGH ROCK, DAN BLACK MARSH —",
        deskripsi: "Tiga provinsi yang tidak pernah sepenuhnya tunduk. Hammerfell yang membuang klausul perdamaian seperti membuang belati berkarat — dengan keputusan, tanpa penyesalan. High Rock yang sudah terbiasa membuat perjanjian dengan semua pihak sehingga tidak ada yang pernah yakin benar-benar kepada siapa ia berpihak. Dan Black Marsh yang tidak pernah perlu memilih pihak, karena siapa pun yang cukup bodoh untuk menyerang Black Marsh akan belajar, dengan cara yang tidak menyenangkan, mengapa bahkan Kekaisaran yang paling kuat memilih untuk menutup sebelah mata terhadap provinsi itu.Dari The Unconquerable West and South — Dictata Imperial oleh Probus Falco, Military Historian, 3E 418",
        gambar: ["image/bab24/bab24-1.jpg", "image/bab24/bab24-2.jpg"],
        file: "content/isi_cerita/bab24.txt",
        grafik: "grafik/Geografi HaHiBla.html"
      },
      {
        id: 25,
        judul: "BAB 25 — PROVINSI LAIN: AKAVIR, ATMORA, YOKUDA, DAN DUNIA DI LUAR TAMRIEL —",
        deskripsi: "Tamriel bukan seluruh dunia. Nirn jauh lebih besar dari yang bisa dipahami oleh peta-peta yang dipajang di Arcane University atau di ruang peta Blades. Ada benua-benua lain — beberapa yang pernah dikunjungi, beberapa yang hanya dikenal dari laporan-laporan tangan kedua yang lebih banyak mitos dari fakta, dan beberapa yang keberadaannya hanya diyakini berdasarkan logika kosmologis semata. Mereka semua nyata. Dan mereka semua, dengan cara mereka masing-masing, telah mempengaruhi Tamriel dengan cara yang tidak selalu kita sadari.Dari Geographical Notes on Nirn Beyond Tamriel — disusun oleh Stibbons, mantan aide of Phrastus of Elinhir",
        gambar: ["image/bab25/bab25-1.jpg", "image/bab25/bab25-2.jpg"],
        file: "content/isi_cerita/bab25.txt",
        grafik: "grafik/Luar Tamriel.html"
      }
    ]
  },
  {
    id: 4,
    judul: "Book 4: RELIGI — DEWA & DAEDRA",
    cover: "image/cover4.jpg",
    chapters: [
      {
        id: 26,
        judul: "BAB 26 — THE EIGHT/NINE DIVINES: AEDRA YANG MENGORBANKAN SEGALANYA —",
        deskripsi: "Mereka memberikan segalanya untuk menciptakan dunia ini. Lalu mereka memberikan lagi — kebebasan mereka, kehadiran mereka, kemampuan untuk bertindak secara langsung — agar dunia yang mereka ciptakan bisa berjalan dengan hukumnya sendiri tanpa interferensi konstan dari penciptanya. Dan kemudian, ketika dunia yang mereka ciptakan memanggil mereka, ketika doa-doa naik dari kuil-kuil dan bibir orang-orang yang putus asa — mereka mendengar. Mereka selalu mendengar. Namun mereka tidak selalu bisa menjawab dengan cara yang kita inginkan. Bukan karena mereka tidak peduli. Melainkan karena apa yang tersisa dari mereka, setelah semua pengorbanan, sudah terlalu sedikit untuk memberi lebih banyak dari yang mereka sudah berikan.Dari The Morality of the Eight — Disquisition oleh Marassi, Priest of Arkay, Third Era 285",
        gambar: ["image/bab26/bab26-1.jpg", "image/bab26/bab26-2.jpg"],
        file: "content/isi_cerita/bab26.txt",
        grafik: "grafik/Nine Divines.html"
      },
      {
        id: 27,
        judul: "BAB 27 — DAEDRIC PRINCES: ENAM BELAS WAJAH KEKUASAAN —",
        deskripsi: "Jangan pernah percaya pada Daedric Prince yang menawarkan sesuatu tanpa syarat yang terlihat. Syaratnya selalu ada — kamu hanya belum cukup bijaksana untuk melihatnya. Dan ketika kamu akhirnya melihatnya, biasanya sudah terlambat untuk menolak.Dari A Scholar's Guide to Daedric Deals — Phintias, Arcane University librarian, 3E 397",
        gambar: ["image/bab27/bab27-1.jpg", "image/bab27/bab27-2.jpg"],
        file: "content/isi_cerita/bab27.txt",
        grafik: "grafik/Daedric Princes.html"
      },
      {
        id: 28,
        judul: "BAB 28 — DEWA-DEWA PANTHEON LAIN: CARA-CARA BERBEDA UNTUK MENYEMBAH —",
        deskripsi: "Mereka semua menyembah kepada yang sama — kekuatan-kekuatan yang menciptakan dunia ini, yang menopangnya, yang suatu hari mungkin mengakhirinya. Namun setiap bangsa memberi nama yang berbeda kepada kekuatan-kekuatan itu, menceritakan kisah yang berbeda tentang bagaimana kekuatan itu bekerja, dan meminta dengan cara yang berbeda. Apakah mereka semua dijawab? Apakah ada perbedaan antara doa yang berbeda kepada entitas yang sama? Ini adalah pertanyaan yang para teolog tidak pernah bisa menyelesaikan — namun yang para petani dan pelaut dan prajurit sudah menemukan jawaban praktis mereka masing-masing: ya, semuanya dijawab. Dan tidak, jawabannya tidak selalu apa yang diminta.Dari On the Nature of Prayer Across Cultures — Berana Uvulas, Arcane University, Third Era 280",
        gambar: ["image/bab28/bab28-1.jpg", "image/bab28/bab28-2.jpg"],
        file: "content/isi_cerita/bab28.txt",
        grafik: "grafik/Dewa Pantheon.html"
      }
    ]
  },
  {
    id: 5,
    judul: "Book 5: RAS-RAS DI TAMRIEL",
    cover: "image/cover5.jpg",
    chapters: [
      {
        id: 29,
        judul: "BAB 29-32 — IMPERIAL, NORD, BRETON, DAN REDGUARD —",
        deskripsi: "Empat bangsa manusia. Empat cara untuk menjadi manusia di dunia yang tidak pernah cukup ramah untuk manusia namun yang diciptakan — menurut beberapa versi kisah — dengan tujuan agar manusia bisa membuktikan sesuatu. Apakah mereka berhasil? Keempat bangsa ini masih ada. Mungkin itu sudah cukup sebagai bukti.Dari The Human Races of Tamriel — oleh Calcelmo, Scholar of Markarth, 4E 175",
        gambar: ["image/bab29-32/bab29-32-1.jpg", "image/bab29-32/bab29-32-2.jpg"],
        file: "content/isi_cerita/bab29-32.txt",
        grafik: "grafik/Ras Human.html"
      },
      {
        id: 33,
        judul: "BAB 33-36 — ALTMER, BOSMER, DUNMER, DAN ORSIMER —",
        deskripsi: "Empat bangsa Mer. Empat cara untuk mengingat bahwa kamu pernah lebih dekat kepada para dewa dari yang sekarang kamu ada. Altmer mengingat dengan kebanggaan dan kesedihan. Bosmer mengingat dengan perjanjian dan kewajiban. Dunmer mengingat dengan pengkhianatan dan abu. Dan Orsimer... Orsimer sudah berhenti mengingat, karena ingatan tentang siapa mereka dulu hanya menyakitkan. Mereka memilih untuk menjadi sepenuhnya apa yang mereka sekarang.Dari On the Memory of Divinity in the Elven Races — Phrastus of Elinhir, Third Era 402",
        gambar: ["image/bab33-36/bab33-36-1.jpg", "image/bab33-36/bab33-36-2.jpg"],
        file: "content/isi_cerita/bab33-36.txt",
        grafik: "grafik/Ras Mer.html"
      },
      {
        id: 37,
        judul: "BAB 37-39 — KHAJIIT, ARGONIAN, DAN RAS-RAS YANG HILANG —",
        deskripsi: "Setiap ras yang hilang meninggalkan kekosongan — bukan hanya demografis, bukan hanya budaya, melainkan kosmologis. Sesuatu yang seharusnya ada di dalam fabric Tamriel tidak ada lagi. Dan Tamriel yang kita kenal sekarang adalah Tamriel dengan kekosongan-kekosongan itu — tempat-tempat di mana sesuatu pernah ada, yang masih bisa dirasakan oleh mereka yang tahu cara merasakannya, namun yang tidak akan pernah bisa diisi kembali oleh apa pun selain oleh yang hilang itu sendiri.Dari The Lost Peoples of Tamriel — Phrastus of Elinhir (postumos)",
        gambar: ["image/bab37-39/bab37-39-1.jpg", "image/bab37-39/bab37-39-2.jpg"],
        file: "content/isi_cerita/bab37-39.txt",
        grafik: "grafik/Keberadaan dan Populasi.html"
      }
    ]
  },
  {
    id: 6,
    judul: "Book 6: TOKOH-TOKOH LEGENDARIS",
    cover: "image/cover6.jpg",
    chapters: [
      {
        id: 40,
        judul: "BAB 40-42 — TOKOH ERA FAJAR, MERETHIC, DAN PERTAMA —",
        deskripsi: "Ada perbedaan antara tokoh sejarah dan tokoh legendaris. Tokoh sejarah adalah mereka yang tindakannya bisa dilacak, yang motivasinya bisa dianalisis, yang kesalahan-kesalahannya bisa didokumentasikan. Tokoh legendaris adalah sesuatu yang lain — mereka adalah titik di mana sejarah dan mitos bertemu, di mana fakta dan kebutuhan akan pahlawan menciptakan sesuatu yang melampaui kedua sumber aslinya. Semua tokoh dalam bab ini adalah tokoh legendaris. Ini tidak berarti mereka tidak nyata. Ini berarti bahwa kenyataan mereka sudah melampaui sekadar fakta.Dari On the Nature of Heroic Memory — Berevar Wrothgar, Loremaster of Winterhold, Third Era 288",
        gambar: ["image/bab40-42/bab40-42-1.jpg", "image/bab40-42/bab40-42-2.jpg"],
        file: "content/isi_cerita/bab40-42.txt",
        grafik: "grafik/Tokoh Era Fajar.html"
      },
      {
        id: 43,
        judul: "BAB 43-44 — TOKOH ERA KETIGA DAN KEEMPAT —",
        deskripsi: "Yang membedakan tokoh Third Era dari tokoh-tokoh era sebelumnya bukan kebesaran mereka — ada yang lebih besar di era-era sebelumnya. Yang membedakan mereka adalah bahwa kita memiliki catatan yang lebih baik tentang mereka. Kita tahu nama mereka. Kita tahu tanggal-tanggal yang signifikan. Kita bahkan, dalam beberapa kasus, memiliki kata-kata yang mereka ucapkan. Dan dalam kedekatan itu — dalam kenyataan bahwa mereka adalah manusia yang bisa kita dokumentasikan, bukan hanya figur mitos yang kita bisa imajinasikan — ada sesuatu yang lebih mengharukan daripada setiap legenda.Dari The Personal Lives of the Emperors — Waughin Jarth, Arcane University Press, 3E 420",
        gambar: ["image/bab43-44/bab43-44-1.jpg", "image/bab43-44/bab43-44-2.jpg"],
        file: "content/isi_cerita/bab43-44.txt",
        grafik: "grafik/Tokoh Era 3&4.html"
      },
    ]
  },
  {
    id: 7,
    judul: "Book 7: ARTEFAK LEGENDARIS",
    cover: "image/cover7.jpg",
    chapters: [
      {
        id: 47,
        judul: "BAB 45-47 — DAEDRIC ARTIFACTS, AEDRIC RELICS, DAN DWEMER CREATIONS —",
        deskripsi: "Artefak bukan sekadar alat. Setiap artefak yang cukup tua memiliki sejarah — sejarah yang tertulis dalam bekas-bekas tangan yang pernah memegangnya, dalam keputusan-keputusan yang dibuat karena atau meski memegangnya, dalam darah yang tertumpah dan kehidupan yang berubah karena keberadaannya. Sebuah pedang yang membunuh seribu orang adalah sesuatu yang berbeda dari pisau yang membunuh satu orang — bukan hanya dalam ukuran sejarahnya, melainkan dalam berat yang dibawanya. Artefak adalah sejarah yang bisa dipegang.Dari On the Nature of Legendary Objects — Yagrum Bagarn, the Last Dwemer",
        gambar: ["image/bab45-47/bab45-47-1.jpg", "image/bab45-47/bab45-47-2.jpg"],
        file: "content/isi_cerita/bab45-47.txt",
        grafik: "grafik/Artefak Legendaris.html"
      },
      {
        id: 48,
        judul: "BAB 48-49 — ELDER SCROLLS DAN ARTEFAK LAINNYA —",
        deskripsi: "Elder Scrolls bukan buku. Mereka bukan ramalan. Mereka bukan bahkan 'benda' dalam pengertian yang biasanya kita gunakan. Mereka adalah... celah. Tempat di mana fabric waktu dan kemungkinan terlipat sedemikian rupa sehingga masa lalu, masa kini, dan masa depan bisa dilihat sekaligus — namun hanya oleh mereka yang cukup terlatih untuk melihat, dan tidak terlatih tidak berarti 'tidak mencoba' melainkan berarti 'sudah buta sebelum berhasil melihat apapun.Dari Observations on Elder Scrolls — Stalf, Moth Priest (written before his complete blindness)",
        gambar: ["image/bab48-49/bab48-49-1.jpg", "image/bab48-49/bab48-49-2.jpg"],
        file: "content/isi_cerita/bab48-49.txt",
        grafik: "grafik/Artefak Elder.html"
      },
    ]
  },
  {
    id: 8,
    judul: "Book 8: NAGA-NAGA TAMRIEL",
    cover: "image/cover8.jpg",
    chapters: [
      {
        id: 50,
        judul: "BAB 50-53 — AKATOSH, DRAGON CULT, DRAGON WAR, DAN NAGA-NAGA TERKENAL —",
        deskripsi: "Naga bukan binatang. Naga bukan dewa. Naga adalah waktu yang memiliki sayap — ekspresi dari prinsip kosmologis yang paling fundamental dalam bentuk yang bisa disentuh, bisa ditemukan, dan — dengan cukup banyak darah dan keberanian — bisa dibunuh. Namun membunuh naga tidak seperti membunuh serigala atau raksasa. Ketika naga mati, seseorang menyerap jiwa mereka. Dan dalam penyerapan itu ada sesuatu yang benar-benar ilahi — sesuatu yang seharusnya tidak dimiliki oleh makhluk fana, namun yang secara kosmis harus ada di suatu tempat.Dari On the Nature of Dragons — Paarthurnax, dictated to Arngeir, 4E 200",
        gambar: ["image/bab50-53/bab50-53-1.jpg", "image/bab50-53/bab50-53-2.jpg"],
        file: "content/isi_cerita/bab50-53.txt",
        grafik: "grafik/Power Naga.html"
      },
      {
        id: 54,
        judul: "BAB 54 — THU'UM DAN DRAGON SHOUTS: SUARA YANG MEMBENTUK DUNIA —",
        deskripsi: "Thu'um bukan senjata. Ia bukan teknik pertempuran. Ia bukan bahkan kata-kata dalam pengertian yang kita biasanya gunakan. Thu'um adalah cara berbicara kepada Aurbis dalam bahasa yang Aurbis sendiri gunakan untuk berpikir — dan ketika kamu melakukan itu dengan cukup benar, dengan cukup niat, dengan cukup kehendak, Aurbis mendengarkan. Dan ketika Aurbis mendengarkan, hal-hal berubah. Kadang-kadang hal kecil. Kadang-kadang hal yang sangat besar sekali. Semuanya bergantung pada apa yang kamu minta dan seberapa sepenuh hati kamu memintanya.Dari The Way of the Voice — Arngeir, Greybeard of High Hrothgar, dictated 4E 196",
        gambar: ["image/bab54/bab54-1.jpg", "image/bab54/bab54-2.jpg"],
        file: "content/isi_cerita/bab54.txt",
        grafik: "grafik/Thu'um.html"
      },
    ]
  },
  {
    id: 9,
    judul: "Book 9: CERITA GAME LENGKAP",
    cover: "image/cover9.jpg",
    chapters: [
      {
        id: 55,
        judul: "BAB 55-57 — TES I: ARENA, TES II: DAGGERFALL, DAN TES III: MORROWIND —",
        deskripsi: "Tiga game. Tiga era. Tiga pahlawan yang tidak pernah diberi nama, yang identitasnya adalah kekosongan yang diisi oleh siapa saja yang memainkannya. Namun kekosongan itu bukan kelemahan — itu adalah kekuatan. Karena pahlawan tanpa nama adalah pahlawan yang bisa menjadi siapa saja. Dan pahlawan yang bisa menjadi siapa saja adalah pahlawan yang kisahnya tidak pernah benar-benar berakhir.Dari A History of the Eternal Champions — Loremaster Celarus, Psijic Order",
        gambar: ["image/bab55-57/bab55-57-1.jpg", "image/bab55-57/bab55-57-2.jpg"],
        file: "content/isi_cerita/bab55-57.txt",
        grafik: "grafik/3 Game 3 Era.html"
      },
      {
        id: 58,
        judul: "BAB 58 — TES IV: OBLIVION — GERBANG YANG TERBUKA —",
        deskripsi: "Ketika gerbang itu terbuka — gerbang pertama, di luar tembok Kvatch yang sedang terbakar — sesuatu berubah di dunia ini. Bukan hanya karena ada Oblivion Gate yang berdiri di tanah Cyrodiil untuk pertama kalinya dalam tiga ribu tahun. Melainkan karena gerbang itu mengingatkan semua orang tentang sesuatu yang sudah lama mereka lupakan: bahwa dunia ini rapuh. Bahwa Liminal Barriers yang melindungi Mundus dari Oblivion bukan hukum alam — mereka adalah perjanjian. Dan perjanjian bisa diakhiri.Dari The Red Year Remembered — penulis tidak diketahui, Fourth Era 5",
        gambar: ["image/bab58/bab58-1.jpg", "image/bab58/bab58-2.jpg"],
        file: "content/isi_cerita/bab58.txt",
        grafik: "grafik/TES 4.html"
      },
      {
        id: 59,
        judul: "BAB 59 — TES V: SKYRIM — SEMUA QUESTLINES SECARA LENGKAP —",
        deskripsi: "Skyrim tidak hanya menawarkan satu kisah. Ia menawarkan dua puluh kisah yang berjalan bersamaan — kisah naga yang memakan era, kisah prajurit yang memilih sisi perang, kisah pencuri yang membangun kerajaan dari bayangan, kisah pendeta yang menemukan bahwa kegelapan juga memiliki liturginya sendiri. Semuanya terjadi di tanah yang sama, di waktu yang sama, dipimpin oleh satu orang yang entah bagaimana hadir di semua tempat sekaligus. Ini bukan realisme. Ini adalah sesuatu yang lebih baik dari realisme: kemungkinan yang tak terbatas dalam dunia yang terasa sangat nyata.Dari The Infinite Dragonborn — Avita Salvian, 4E 215",
        gambar: ["image/bab59/bab59-1.jpg", "image/bab59/bab59-2.jpg"],
        file: "content/isi_cerita/bab59.txt",
        grafik: "grafik/TES 5.html"
      },
      {
        id: 60,
        judul: "BAB 60 — ELDER SCROLLS ONLINE: SEPULUH TAHUN KISAH KOSMOLOGIS —",
        deskripsi: "ESO bukan sekadar game. Ia adalah kanvas yang diisi selama satu dekade oleh ratusan penulis yang mencoba untuk menambahkan lapisan baru kepada dunia yang sudah sangat kaya. Kadang-kadang mereka berhasil dengan gemilang. Kadang-kadang mereka bertabrakan dengan lore yang sudah ada. Namun yang paling menakjubkan adalah bahwa setelah semua itu, Tamriel masih terasa kohesif — masih terasa seperti satu dunia, bukan koleksi kisah-kisah yang tidak terhubung. Ini adalah pencapaian yang jarang di dunia apapun.Dari A Scholar's Review of ESO Lore — Legoless, Guild Librarian of the Undaunted",
        gambar: ["image/bab60/bab60-1.jpg", "image/bab60/bab60-2.jpg"],
        file: "content/isi_cerita/bab60.txt",
        grafik: "grafik/TES ESO.html"
      },
    ]
  },
  {
    id: 10,
    judul: "Book 10: SIDE STORIES & MISCELLANEOUS",
    cover: "image/cover10.jpg",
    chapters: [
      {
        id: 61,
        judul: "BAB 61 — GUILDS & ORGANIZATIONS: SEJARAH INSTITUSI YANG MEMBENTUK TAMRIEL —",
        deskripsi: "Sebuah kerajaan bisa jatuh dalam semalam. Seorang kaisar bisa mati dalam hitungan detik. Namun guild — institusi yang dibangun di atas prinsip, tradisi, dan kebutuhan manusia yang lebih dalam dari politik — bisa bertahan melampaui semua itu. Dark Brotherhood sudah ada sebelum Kekaisaran Alessian. Thieves Guild ada di setiap kota besar di Tamriel meskipun tidak ada yang mengakui keberadaannya. Companions berdiri di tempat yang sama selama tiga ribu tahun. Ini bukan kebetulan. Ini adalah bukti bahwa manusia tidak hanya memerlukan raja — mereka memerlukan komunitas.Dari The Sociology of Tamrielic Guilds — Malur Seloth, Imperial University, 3E 415",
        gambar: ["image/bab61/bab61-1.jpg", "image/bab61/bab61-2.jpg"],
        file: "content/isi_cerita/bab61.txt",
        grafik: "grafik/Guild & Organizations.html"
      },
      {
        id: 62,
        judul: "BAB 62 — SISTEM SIHIR TAMRIEL: CARA DUNIA BISA DIMANIPULASI —",
        deskripsi: "Sihir bukan kekuatan. Sihir adalah percakapan — percakapan antara kehendak makhluk yang fana dan prinsip-prinsip yang mengatur realitas. Terkadang realitas mendengarkan. Terkadang ia tidak. Dan ketika ia tidak mendengarkan, bukan realitas yang salah — melainkan cara kita berbicara kepadanya.Dari A Beginner's Guide to Magical Theory — Arch-Mage Trebonius Artorius, 3E 394",
        gambar: ["image/bab62/bab62-1.jpg", "image/bab62/bab62-2.jpg"],
        file: "content/isi_cerita/bab62.txt",
        grafik: "grafik/Sistem Sihir Tamriel.html"
      },
      {
        id: 63,
        judul: "BAB 63 — MAKHLUK-MAKHLUK TAMRIEL: BESTIARY DARI DUNIA YANG TIDAK PERNAH BIASA —",
        deskripsi: "Setiap makhluk di Tamriel adalah kisah. Draugr adalah kisah tentang kesetiaan yang melampaui kematian dan tentang harga dari pengabdian yang terlalu dalam. Spriggan adalah kisah tentang alam yang memiliki cara untuk membela diri. Dwemer Centurion adalah kisah tentang peradaban yang terus berjalan bahkan setelah penumpangnya turun. Dan Wisp... Wisp adalah kisah yang belum ada yang tahu cara membacanya. Ini adalah yang paling menarik.Dari A Field Guide to the Creatures of Tamriel — Phinis Gestor, College of Winterhold",
        gambar: ["image/bab63/bab63-1.jpg", "image/bab63/bab63-2.jpg"],
        file: "content/isi_cerita/bab63.txt",
        grafik: "grafik/Mahluk Mahluk Tamriel.html"
      },
      {
        id: 64,
        judul: "BAB 64 — OBLIVION REALMS: KERAJAAN-KERAJAAN DI LUAR BATAS MUNDUS —",
        deskripsi: "Aku telah mengunjungi tiga realm Daedric dalam hidupku. Coldharbour meninggalkan bekas yang tidak pernah bisa sepenuhnya kuhapus. Apocrypha meninggalkan pengetahuan yang sering kuinginkan untuk tidak aku miliki. Dan Shivering Isles meninggalkan kenangan yang — dan ini adalah yang paling aneh — kadang-kadang aku rindukan. Ini memberitahukan sesuatu tentang masing-masing Prince yang menciptakannya, dan mungkin sesuatu yang terlalu banyak tentang diriku sendiri.Dari Travels Beyond the Mundus — Phrastus of Elinhir, Loremaster (postumos)",
        gambar: ["image/bab64/bab64-1.jpg", "image/bab64/bab64-2.jpg"],
        file: "content/isi_cerita/bab64.txt",
        grafik: "grafik/Realms.html"
      },
      {
        id: 65,
        judul: "BAB 65 — PROPHECIES & ELDER SCROLLS: YANG DITULIS SEBELUM TERJADI —",
        deskripsi: "Semua nubuat mengandung kebenaran. Namun tidak semua kebenaran adalah apa yang kita kira. Nubuat bukan peta jalan — ia adalah cermin. Ia memperlihatkan kepada kita bukan apa yang akan terjadi, melainkan apa yang sudah kita takutkan, sudah kita harapkan, sudah kita yakini bisa terjadi. Dan dalam memperlihatkan itu, ia membuatnya lebih mungkin untuk menjadi kenyataan. Pertanyaannya bukan apakah nubuat itu benar — pertanyaannya adalah: apakah nubuat itu menjadi kenyataan karena ia benar, atau karena kita mempercayainya?. Dari On the Nature of Prophecy — Quintus Aurelius, Elder Council Archivist, 3E 280",
        gambar: ["image/bab65/bab65-1.jpg", "image/bab65/bab65-2.jpg"],
        file: "content/isi_cerita/bab65.txt",
        grafik: "grafik/Prophecies.html"
      },
      {
        id: 66,
        judul: "BAB 66 — BUKU-BUKU PENTING DALAM GAME: LITERATUR DARI DUNIA YANG HIDUP —",
        deskripsi: "Dunia yang cukup nyata untuk dihuni harus cukup nyata untuk memiliki sastra. Bukan hanya buku-buku sejarah dan teks-teks akademis yang menjelaskan cara dunia itu bekerja — melainkan puisi, fiksi, skandal, lelucon, filsafat, dan semua bentuk ekspresi lain yang muncul ketika pikiran-pikiran cerdas mencoba untuk memahami kondisi mereka melalui kata-kata. Tamriel memiliki semua itu. Dan dalam membacanya, kita tidak hanya mendapat informasi tentang dunia itu — kita mendapatkan rasa bagaimana rasanya untuk hidup di dalamnya.Dari On the Value of In-Game Literature — Michael Kirkbride, Ex-Bethesda (secara metafora)",
        gambar: ["image/bab66/bab66-1.jpg", "image/bab66/bab66-2.jpg"],
        file: "content/isi_cerita/bab66.txt",
        grafik: "grafik/Buku Buku.html"
      },
    ]
  }
];