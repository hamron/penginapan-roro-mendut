/**
 * Tempat wisata populer di sekitar homestay (kawasan Mendut & Borobudur),
 * diurutkan dari yang PALING DEKAT ke yang paling jauh dari homestay.
 *
 * Tidak pakai foto asli — ini properti pihak lain, bukan milik homestay,
 * jadi tidak boleh comot foto dari blog/situs wisata orang begitu saja
 * (hak cipta). Dipakai ikon bertema (kategori) sebagai gantinya.
 *
 * Link gmaps pakai pencarian nama tempat, bukan koordinat pin manual —
 * supaya tetap akurat tanpa perlu koordinat presisi tiap lokasi.
 */

export type KategoriWisata = 'candi' | 'alam' | 'air' | 'desa';

export interface Wisata {
  nama: string;
  jarak: string;
  deskripsi: string;
  gmaps: string;
  kategori: KategoriWisata;
}

function linkGmapsCari(nama: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nama)}`;
}

/** Path SVG (viewBox 24x24) per kategori — dipakai sebagai ganti foto asli. */
export const ikonKategori: Record<KategoriWisata, string> = {
  candi: 'M12 2 4 9h3v11h10V9h3L12 2ZM9 20v-6h6v6',
  alam: 'M3 20 9 9l4 6 2-3 6 8H3ZM17 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  air: 'M12 2s6 7 6 11.5a6 6 0 0 1-12 0C6 9 12 2 12 2Z',
  desa: 'M4 21V10l8-6 8 6v11h-5v-6H9v6H4Z',
};

export const daftarWisata: Wisata[] = [
  {
    nama: 'Candi Mendut',
    jarak: 'Tepat di kawasan ini',
    deskripsi:
      'Candi Buddha yang dipercaya lebih tua dari Borobudur, satu garis lurus dengan Candi Pawon dan Borobudur.',
    gmaps: linkGmapsCari('Candi Mendut Magelang'),
    kategori: 'candi',
  },
  {
    nama: 'Candi Pawon',
    jarak: '± 1,5 km',
    deskripsi: 'Candi kecil di antara Mendut dan Borobudur, berada tepat di garis lurus yang sama.',
    gmaps: linkGmapsCari('Candi Pawon Magelang'),
    kategori: 'candi',
  },
  {
    nama: 'Candi Borobudur',
    jarak: '± 3 km, sekitar 5–10 menit berkendara',
    deskripsi: 'Candi Buddha terbesar di dunia, Situs Warisan Dunia UNESCO.',
    gmaps: linkGmapsCari('Candi Borobudur'),
    kategori: 'candi',
  },
  {
    nama: 'Svargabumi',
    jarak: '± 4 km',
    deskripsi: 'Taman foto bertema alam dengan latar sawah dan Gunung Merapi, hanya 1,3 km dari Borobudur.',
    gmaps: linkGmapsCari('Svargabumi Borobudur'),
    kategori: 'alam',
  },
  {
    nama: 'Desa Wisata Candirejo',
    jarak: '± 4–5 km',
    deskripsi: 'Desa wisata tradisional Jawa — susur desa naik andong dan lihat kerajinan warga langsung.',
    gmaps: linkGmapsCari('Desa Wisata Candirejo Borobudur'),
    kategori: 'desa',
  },
  {
    nama: 'Gereja Ayam (Bukit Rhema)',
    jarak: '± 6 km',
    deskripsi: 'Bangunan ikonik di perbukitan Menoreh, populer lewat film "Ada Apa dengan Cinta".',
    gmaps: linkGmapsCari('Gereja Ayam Bukit Rhema Magelang'),
    kategori: 'alam',
  },
  {
    nama: 'Punthuk Setumbu',
    jarak: '± 7 km',
    deskripsi: 'Bukit favorit untuk berburu matahari terbit dengan latar Borobudur dan Gunung Merapi.',
    gmaps: linkGmapsCari('Punthuk Setumbu Magelang'),
    kategori: 'alam',
  },
  {
    nama: 'Pemandian Air Hangat Umbul Banyu Roso',
    jarak: '± 8–11 km',
    deskripsi: 'Kolam air hangat alami tanpa bau belerang, buka 24 jam, di Desa Sumberarum, Kecamatan Tempuran.',
    gmaps: linkGmapsCari('Umbul Banyu Roso Tempuran Magelang'),
    kategori: 'air',
  },
  {
    nama: 'Mata Langit by Plataran',
    jarak: '± 10 km',
    deskripsi: 'Resto dengan panggung pandang di atas jurang, pemandangan perbukitan dan Gunung Merapi.',
    gmaps: linkGmapsCari('Mata Langit by Plataran Borobudur'),
    kategori: 'alam',
  },
  {
    nama: 'Taman Kyai Langgeng',
    jarak: '± 20 km',
    deskripsi: 'Taman rekreasi keluarga ikonik di pusat Kota Magelang — wahana, kebun, dan area bermain anak.',
    gmaps: linkGmapsCari('Taman Kyai Langgeng Magelang'),
    kategori: 'desa',
  },
  {
    nama: 'Silancur Highland',
    jarak: '± 30 km (perkiraan)',
    deskripsi: 'Dataran tinggi di lereng Gunung Sumbing, Kecamatan Kaliangkrik — spot sunrise dan glamping.',
    gmaps: linkGmapsCari('Silancur Highland Kaliangkrik Magelang'),
    kategori: 'alam',
  },
  {
    nama: 'Nepal Van Java',
    jarak: '± 35–40 km',
    deskripsi:
      'Dusun Butuh di lereng Gunung Sumbing (1.600 mdpl) — rumah-rumah bertingkat di lereng bukit menyerupai desa di Nepal.',
    gmaps: linkGmapsCari('Nepal Van Java Dusun Butuh Kaliangkrik'),
    kategori: 'desa',
  },
];
