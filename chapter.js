// 1. Ambil data buku yang tadi diklik di index.html
const selectedBook = JSON.parse(localStorage.getItem("selectedBook"));

const bookTitleElement = document.getElementById("book-title");
const chapterListContainer = document.getElementById("chapter-list");

// 2. Cek apakah ada buku yang dipilih
if (selectedBook) {
  // Ubah judul halaman sesuai buku
  bookTitleElement.innerText = selectedBook.judul;

  // Buat tombol untuk setiap bab di dalam buku tersebut
  selectedBook.chapters.forEach(chapter => {
    const item = document.createElement("div");
    item.className = "chapter";
    
    // Tampilkan judul dan deskripsi bab
    item.innerHTML = `
        <h3 style="margin-top: 0;">${chapter.judul}</h3>
        <p style="font-size: 14px; color: #ccc; margin-bottom: 0;">${chapter.deskripsi}</p>
    `;

    // Jika diklik, simpan bab ini dan pergi ke reader.html
    item.onclick = () => {
      localStorage.setItem("selectedChapter", JSON.stringify(chapter));
      window.location.href = "reader.html";
    };

    chapterListContainer.appendChild(item);
  });
} else {
  // Jika file dibuka langsung tanpa lewat index.html
  bookTitleElement.innerText = "❌ Tidak ada buku yang dipilih";
  chapterListContainer.innerHTML = "<p style='text-align:center;'>Silakan kembali ke halaman utama dan pilih buku terlebih dahulu.</p>";
}