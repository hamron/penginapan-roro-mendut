/**
 * Daftar kamar. Nanti file ini bisa dipindah ke CMS supaya
 * bisa diedit lewat halaman /admin tanpa menyentuh kode.
 *
 * hargaPerMalam adalah harga MULAI DARI (bukan harga pasti) — selalu
 * ditampilkan dengan awalan "Mulai" di halaman, jangan dihapus.
 */

export interface Kamar {
  id: string;
  nama: string;
  deskripsi: string;
  hargaPerMalam: number;
  kapasitas: number;
  /** Kosongkan kalau ukuran kamar belum dipastikan — tidak akan ditampilkan */
  ukuran?: string;
  tipeKasur: string;
  fasilitas: string[];
  /** Taruh file gambar di folder public/kamar/ */
  gambar: string;
  tersedia: boolean;
}

export const daftarKamar: Kamar[] = [
  {
    id: 'ekonomi',
    nama: 'Kamar Ekonomi',
    deskripsi:
      'Kamar hemat dengan satu tempat tidur untuk berdua. Kamar mandi ' +
      'berada di luar kamar, bersih dan dekat.',
    hargaPerMalam: 100000,
    kapasitas: 2,
    ukuran: '9 m²',
    tipeKasur: '1 kasur untuk 2 orang',
    fasilitas: ['Kipas angin', 'Kamar mandi luar'],
    gambar: '/kamar/standard.jpg',
    tersedia: true,
  },
  {
    id: 'standar',
    nama: 'Kamar Standard',
    deskripsi:
      'Kamar dengan satu tempat tidur dan kamar mandi pribadi di dalam ' +
      'kamar. Nyaman untuk berdua.',
    hargaPerMalam: 100000,
    kapasitas: 2,
    ukuran: '9 m²',
    tipeKasur: '1 kasur untuk 2 orang',
    fasilitas: ['Kipas angin', 'Kamar mandi dalam'],
    gambar: '/kamar/kamar-standard.jpg',
    tersedia: true,
  },
  {
    id: 'deluxe',
    nama: 'Kamar Deluxe',
    deskripsi:
      'Kamar luas dengan dua tempat tidur terpisah, AC, TV, dan jendela — ' +
      'cocok untuk teman seperjalanan atau keluarga kecil.',
    hargaPerMalam: 200000,
    kapasitas: 3,
    // TODO: ukuran kamar belum dipastikan
    tipeKasur: '1 kasur queen + 1 kasur 120x200',
    fasilitas: ['AC', 'TV', 'Kamar mandi dalam', 'Jendela'],
    gambar: '/kamar/deluxe.jpg',
    tersedia: true,
  },
  {
    id: 'keluarga',
    nama: 'Kamar Keluarga',
    deskripsi:
      'Kamar keluarga luas dengan dua kasur queen, bisa ditambah kasur ' +
      'ekstra untuk rombongan lebih besar.',
    hargaPerMalam: 300000,
    kapasitas: 4,
    ukuran: '20 m²',
    tipeKasur: '2 kasur queen',
    fasilitas: ['AC', 'Kamar mandi dalam', 'Bisa tambah extra bed'],
    // Catatan: foto ini hasil AI (Google Gemini), dipilih sendiri oleh pemilik
    gambar: '/kamar/keluarga.jpg',
    tersedia: true,
  },
];

/** Format 250000 menjadi "Rp 250.000" */
export function formatRupiah(nilai: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(nilai);
}
