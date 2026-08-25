/**
 * Daftar kamar. Nanti file ini bisa dipindah ke CMS supaya
 * bisa diedit lewat halaman /admin tanpa menyentuh kode.
 *
 * TODO: ganti seluruh isi dengan data kamar aslimu.
 */

export interface Kamar {
  id: string;
  nama: string;
  deskripsi: string;
  hargaPerMalam: number;
  kapasitas: number;
  ukuran: string;
  tipeKasur: string;
  fasilitas: string[];
  /** Taruh file gambar di folder public/kamar/ */
  gambar: string;
  tersedia: boolean;
}

export const daftarKamar: Kamar[] = [
  {
    id: 'standard',
    nama: 'Kamar Standard',
    deskripsi:
      'Kamar nyaman untuk satu atau dua orang. Cocok untuk perjalanan singkat ' +
      'maupun menginap sendirian.',
    hargaPerMalam: 250000,
    kapasitas: 2,
    ukuran: '16 m²',
    tipeKasur: '1 kasur queen',
    fasilitas: ['AC', 'Wifi cepat', 'Kamar mandi dalam', 'Air panas', 'TV'],
    gambar: '/kamar/standard.jpg',
    tersedia: true,
  },
  {
    id: 'deluxe',
    nama: 'Kamar Deluxe',
    deskripsi:
      'Lebih luas dengan area duduk dan jendela besar. Pilihan favorit ' +
      'pasangan maupun tamu yang menginap lebih lama.',
    hargaPerMalam: 375000,
    kapasitas: 2,
    ukuran: '24 m²',
    tipeKasur: '1 kasur king',
    fasilitas: ['AC', 'Wifi cepat', 'Kamar mandi dalam', 'Air panas', 'TV', 'Meja kerja', 'Kulkas mini'],
    gambar: '/kamar/deluxe.jpg',
    tersedia: true,
  },
  {
    id: 'family',
    nama: 'Kamar Family',
    deskripsi:
      'Ruang lapang untuk keluarga kecil, dengan dua kasur terpisah ' +
      'dan kamar mandi yang lebih besar.',
    hargaPerMalam: 500000,
    kapasitas: 4,
    ukuran: '32 m²',
    tipeKasur: '1 kasur king + 2 kasur single',
    fasilitas: ['AC', 'Wifi cepat', 'Kamar mandi dalam', 'Air panas', 'TV', 'Kulkas mini', 'Pemanas air'],
    gambar: '/kamar/family.jpg',
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
