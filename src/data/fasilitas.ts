/**
 * Fasilitas yang ditampilkan di halaman depan.
 * `ikon` adalah isi atribut d dari sebuah <path> SVG 24x24.
 */

export interface Fasilitas {
  nama: string;
  ket: string;
  ikon: string;
}

export const daftarFasilitas: Fasilitas[] = [
  { nama: 'Wifi cepat', ket: 'Internet stabil di seluruh area', ikon: 'M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M2 9a15 15 0 0 1 20 0' },
  { nama: 'AC di semua kamar', ket: 'Sejuk sepanjang hari', ikon: 'M12 2v20M4.9 7l14.2 8M4.9 17l14.2-8' },
  { nama: 'Air panas', ket: 'Tersedia 24 jam', ikon: 'M12 2s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10z' },
  { nama: 'Parkir luas', ket: 'Motor, mobil, sampai bus kecil', ikon: 'M5 17h14M6 17V9l2-4h8l2 4v8M7.5 13h9' },
  { nama: 'Dekat Candi Borobudur', ket: 'Beberapa menit berkendara', ikon: 'M3 21h18M5 21V10l7-5 7 5v11M10 21v-5h4v5' },
  { nama: 'Resepsionis 24 jam', ket: 'Check-in kapan saja', ikon: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' },
];
