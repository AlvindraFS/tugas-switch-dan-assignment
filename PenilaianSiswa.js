// Data siswa
const siswa = [
  { nama: "Udin", nilai: 85 },
  { nama: "Rafa", nilai: 72 },
  { nama: "Alvin", nilai: 95 }
];

// Fungsi penilaian sederhana
function cekNilai(nilai) {
  switch(true) {
    case nilai >= 90: return "A";
    case nilai >= 80: return "B";
    case nilai >= 70: return "C";
    case nilai >= 60: return "D";
    default: return "E";
  }
}

// Tampilkan hasil semua siswa
console.log("Daftar Nilai Siswa:");
siswa.forEach(s => {
  console.log(`
  Nama: ${s.nama}
  Nilai: ${s.nilai} (${cekNilai(s.nilai)})
  `);
});
