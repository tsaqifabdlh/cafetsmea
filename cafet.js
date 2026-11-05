// ===== DATA MENU =====
// Ganti isi menu ini dengan menu asli dari pengelola cafetaria
var dataMenu = [
    { nama: "Gabin", deskripsi: "Gabin dengan isian ubi ungu", harga: 2000, kategori: "Makanan" },
    { nama: "Martabak Manis", deskripsi: "Martabak manis lembut dengan isian aneka rasa", harga: 5000, kategori: "Makanan" },
    { nama: "Pie Susu", deskripsi: "Pie susu lembut dengan isian susu coklat dan vanilla", harga: 2000, kategori: "Makanan" },
    { nama: "Tempura", deskripsi: "Tempura dengan saus chili oil pedas", harga: 2000, kategori: "Makanan" },
    { nama: "Basreng", deskripsi: "Basreng kenyal dengan saus chili oil", harga: 1000, kategori: "Makanan" },
    { nama: "Jus jeruk", deskripsi: "Jus jeruk dingin segar", harga: 4000, kategori: "Minuman" },
    { nama: "Jus Buah", deskripsi: "Jus segar dengan rasa aneka buah", harga: 4000, kategori: "Minuman" },
    { nama: "Air mineral", deskripsi: "Botol 600 ml", harga: 3000, kategori: "Minuman" },
    { nama: "Risoles manis", deskripsi: "Isi coklat dan matcha", harga: 2000, kategori: "Camilan" },
    { nama: "Tahu bakso", deskripsi: "Tahu isi bakso", harga: 2000, kategori: "Makanan" },
    { nama: "Makaroni pedas", deskripsi: "Makroni dengan rasa pedas dahsyat", harga: 2000, kategori: "Camilan" },
    { nama: "Seblak kering", deskripsi: "kerpuk pedas gurih", harga: 1000, kategori: "Camilan" }
];

// ===== FUNGSI MENAMPILKAN MENU =====
function tampilMenu(kategori) {
    var hasil = "";

    // looping semua menu, tampilkan yang sesuai kategori
    for (var i = 0; i < dataMenu.length; i++) {
        var menu = dataMenu[i];

        if (kategori == "Semua" || menu.kategori == kategori) {
            hasil += '<div class="kartu">';
            hasil += '<h3 class="nama-menu">' + menu.nama + '</h3>';
            hasil += '<p>' + menu.deskripsi + '</p>';
            hasil += '<p class="harga">Rp ' + menu.harga.toLocaleString("id-ID") + '</p>';
            hasil += '</div>';
        }
    }

    document.getElementById("daftar-menu").innerHTML = hasil;

    // ubah warna tombol yang aktif
    var semuaTab = document.getElementsByClassName("tab");
    for (var j = 0; j < semuaTab.length; j++) {
        if (semuaTab[j].textContent == kategori) {
            semuaTab[j].classList.add("aktif");
        } else {
            semuaTab[j].classList.remove("aktif");
        }
    }
}

// ===== FUNGSI CEK JAM BUKA =====
// Jam buka: Senin - Jumat, 07.00 - 15.30
function cekJamBuka() {
    var sekarang = new Date();
    var hari = sekarang.getDay();       // 0 = Minggu, 6 = Sabtu
    var jam = sekarang.getHours();
    var menit = sekarang.getMinutes();
    var totalMenit = jam * 60 + menit;

    var jamBuka = 7 * 60;               // 07.00
    var jamTutup = 15 * 60 + 30;        // 15.30

    var teks = document.getElementById("status");

    if (hari >= 1 && hari <= 5 && totalMenit >= jamBuka && totalMenit < jamTutup) {
        teks.textContent = "Buka sekarang, tutup pukul 15.30";
    } else {
        teks.textContent = "Sedang tutup, buka Senin - Jumat pukul 07.00";
    }
}

// ===== JALANKAN SAAT HALAMAN DIBUKA =====
tampilMenu("Semua");
cekJamBuka();