// ==================== INDEX PAGE ====================
const container = document.getElementById("novel-list");
const continueContainer = document.getElementById("continue-reading-container");

if (container) { 
  // 1. LOGIKA BOOKMARK: Cek apakah ada riwayat membaca sebelumnya
  const lastChapter = JSON.parse(localStorage.getItem("selectedChapter"));
  if (lastChapter) {
    continueContainer.style.display = "block";
    continueContainer.innerHTML = `
      <div class="continue-card" onclick="window.location.href='reader.html'">
        <span class="bookmark-icon">🔖</span>
        <div class="continue-text">
          <small>Lanjutkan Membaca</small>
          <strong>${lastChapter.judul}</strong>
        </div>
        <span class="play-icon">▶</span>
      </div>
    `;
  }

  // 2. Memunculkan Daftar Buku
  novels.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${book.cover}" alt="Cover ${book.judul}" style="width:100%; border-radius:8px; margin-bottom:10px;">
      <h3>${book.judul}</h3>
    `;

    card.onclick = () => {
      localStorage.setItem("selectedBook", JSON.stringify(book));
      window.location.href = "chapter.html"; 
    };

    container.appendChild(card);
  });
}

// ==================== READER PAGE ====================
const readerContent = document.getElementById("novel-content");

if (readerContent) {
  const chapter = JSON.parse(localStorage.getItem("selectedChapter"));

  if (!chapter) {
    readerContent.innerHTML = "<h3 style='text-align:center;'>❌ Chapter tidak ada. Silakan kembali.</h3>";
  } else {
    document.getElementById("novel-title").innerText = chapter.judul;

    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    if (chapter.gambar && chapter.gambar.length >= 2) {
      img1.src = chapter.gambar[0];
      img1.style.display = "block"; 
      img2.src = chapter.gambar[1];
      img2.style.display = "block";
    } else {
      img1.style.display = "none"; 
      img2.style.display = "none";
    }

    fetch(chapter.file)
      .then(res => {
        if (!res.ok) throw new Error("File tidak ditemukan");
        return res.text();
      })
      .then(text => {
        readerContent.innerHTML = `<div class="novel-text">${text}</div>`;

        if (chapter.grafik) {
          const chartBox = document.createElement("div");
          chartBox.style.marginTop = "50px";
          chartBox.style.borderTop = "1px dashed var(--gold-dim)";
          chartBox.style.paddingTop = "30px";
          chartBox.innerHTML = `
            <h3 style="text-align:center; color:var(--gold-tes); font-family:'Cinzel', serif;">Atribut & Klasifikasi</h3>
            <iframe src="${chapter.grafik}" width="100%" height="750px" style="border:none; border-radius:10px; background: transparent;"></iframe>
          `;
          readerContent.appendChild(chartBox);
        }

        // ==========================================
        // FITUR BARU: AUTO-SCROLL KE POSISI TERAKHIR
        // ==========================================
        // Beri jeda sedikit agar teks dan gambar selesai dirender browser
        setTimeout(() => {
            const savedScroll = localStorage.getItem("scrollPos_" + chapter.id);
            if (savedScroll) {
                window.scrollTo({
                    top: parseInt(savedScroll),
                    behavior: "smooth" // Menggulir layar dengan mulus
                });
            }
        }, 300); 

      })
      .catch((err) => {
        console.error(err);
        readerContent.innerHTML = "<h3 style='text-align:center; color:red;'>❌ Gagal memuat cerita. Pastikan lewat Live Server.</h3>";
      });

      // ==========================================
      // FITUR BARU: MENYIMPAN POSISI SAAT MEMBACA
      // ==========================================
      window.addEventListener("scroll", () => {
          // Menyimpan posisi scroll saat ini berdasarkan ID Bab
          localStorage.setItem("scrollPos_" + chapter.id, window.scrollY);
      });
  }
}