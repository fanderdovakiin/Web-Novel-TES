# The Elder Scrolls Novel Library

Website perpustakaan lore fan-made untuk menjelajahi kumpulan buku dan membaca cerita bertema **The Elder Scrolls (TES)**. Pengunjung dapat memilih koleksi, membuka daftar bab, lalu membaca isi bab beserta ilustrasi dan grafik pendukung.

**Tujuan proyek:** latihan mengembangkan keterampilan membuat website dan membangun konsep web novel—mulai dari katalog, navigasi bab, tampilan baca, hingga penyimpanan progres membaca di browser. Proyek ini dibuat untuk pembelajaran, bukan sebagai layanan komersial.

> Proyek ini merupakan karya penggemar untuk pembelajaran dan bukan produk resmi Bethesda/ZeniMax. The Elder Scrolls dan seluruh aset terkait merupakan milik pemegang haknya.

## Fitur

- **Katalog buku:** menampilkan koleksi buku pada halaman beranda.
- **Daftar bab:** setiap koleksi memiliki daftar bab dan deskripsi singkat.
- **Halaman baca:** memuat teks bab dari file lokal, serta ilustrasi dan grafik bila tersedia.
- **Lanjutkan membaca:** menyimpan bab terakhir yang dipilih dan posisi scroll di `localStorage` browser.
- **Tampilan bertema lore:** antarmuka gelap dengan aksen emas, dirancang untuk pengalaman membaca.

## Teknologi

- HTML5
- CSS3
- JavaScript vanilla
- `localStorage` untuk pilihan bab dan posisi baca
- File `.txt`, gambar, dan halaman HTML lokal sebagai konten

Tidak memerlukan database, framework, proses build, atau paket npm. Google Fonts digunakan untuk tipografi; koneksi internet mungkin diperlukan agar font tersebut dimuat. Jika tidak tersedia, browser menggunakan font cadangan.

## Cara Menjalankan

Karena halaman pembaca memuat file cerita menggunakan `fetch()`, jalankan website melalui **server lokal**, bukan dengan membuka `index.html` langsung sebagai `file://`.

### Opsi 1 — VS Code Live Server

1. Buka folder proyek di Visual Studio Code.
2. Pasang ekstensi **Live Server**, jika belum ada.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.
4. Website akan terbuka di browser melalui alamat lokal, biasanya `http://127.0.0.1:5500`.

### Opsi 2 — Python

Buka terminal di folder utama proyek (folder yang berisi `index.html`), lalu jalankan:

```powershell
py -m http.server 8000
```

Jika perintah `py` tidak tersedia, coba:

```powershell
python -m http.server 8000
```

Kemudian buka **http://localhost:8000** di browser. Biarkan terminal tetap terbuka selama website digunakan; tekan `Ctrl+C` untuk menghentikan server.

### Opsi 3 — PHP bawaan XAMPP (opsional)

Jika PHP XAMPP sudah terpasang, jalankan dari folder utama proyek:

```powershell
C:\xampp\php\php.exe -S localhost:8000
```

Kemudian buka **http://localhost:8000**.

## Cara Menggunakan

1. Buka halaman beranda untuk melihat katalog.
2. Pilih kartu buku untuk membuka daftar bab.
3. Pilih bab untuk membuka halaman pembaca.
4. Kembali ke beranda atau daftar bab melalui tombol navigasi.
5. Saat kembali ke website pada browser yang sama, kartu **Lanjutkan Membaca** dapat muncul jika riwayat bab tersimpan.

## Struktur Proyek

```text
Web-Novel-TES/
├── index.html                 # Beranda dan katalog buku
├── chapter.html               # Halaman daftar bab
├── reader.html                # Halaman membaca
├── novel.js                   # Data koleksi, bab, gambar, dan path konten
├── chapter.js                 # Perender daftar bab
├── script.js                  # Katalog, pembaca, bookmark, dan posisi scroll
├── style.css                  # Styling halaman
├── content/
│   └── isi_cerita/             # Teks cerita per bab (.txt)
├── grafik/                     # Grafik/lore pendukung berbentuk halaman HTML
└── image/                      # Cover dan ilustrasi
```

## Memperbarui Konten

Informasi katalog dan bab disimpan di `novel.js`. Untuk menambah atau mengubah bab, sesuaikan data bab dan path file terkait, seperti `file`, `gambar`, dan `grafik`. Pastikan file yang dirujuk benar-benar tersedia di dalam folder `content/`, `image/`, atau `grafik/`, serta penulisan nama file dan folder sama persis dengan yang tercantum di data.

## Catatan

- Riwayat baca disimpan di `localStorage` browser, bukan di server. Data tersebut mengikuti browser/perangkat yang digunakan dan dapat hilang jika data situs dihapus.
- Pastikan `content/isi_cerita`, `image`, dan `grafik` ikut tersedia saat proyek dipindahkan atau di-clone. Tanpa file tersebut, sebagian teks, gambar, atau grafik tidak akan tampil.
- Jika suatu konten tidak termuat, jalankan ulang melalui server lokal dan periksa kecocokan path serta nama filenya.
