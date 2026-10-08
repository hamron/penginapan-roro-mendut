/**
 * Tanya-jawab di beranda. Jawaban harus cocok dengan data asli (jam di
 * config.ts, fasilitas di fasilitas.ts/kamar.ts) — kalau data berubah,
 * perbarui di sini juga. Harga dihitung otomatis dari kamar.ts.
 */

import { daftarKamar, formatRupiah } from './kamar';

export interface Faq {
  tanya: string;
  jawab: string;
}

const hargaTerendah = Math.min(...daftarKamar.map((k) => k.hargaPerMalam));

export const daftarFaq: Faq[] = [
  {
    tanya: 'Jam berapa check-in dan check-out?',
    jawab: 'Check-in mulai pukul 14.00 dan check-out pukul 12.00. Resepsionis siap melayani 24 jam.',
  },
  {
    tanya: 'Seberapa jauh penginapan dari Candi Borobudur?',
    jawab:
      'Sekitar 5 menit berkendara. Penginapan berada di Lingkungan Mendut II, Mungkid, Magelang — ' +
      'Candi Mendut ada di kawasan yang sama.',
  },
  {
    tanya: 'Apa aturan untuk tamu pasangan?',
    jawab:
      'Tamu pasangan wajib menunjukkan salah satu: buku nikah, foto buku nikah, foto akad nikah, ' +
      'atau KTP kedua pasangan.',
  },
  {
    tanya: 'Berapa harga kamar?',
    jawab:
      `Harga mulai ${formatRupiah(hargaTerendah)} per malam, tergantung tipe kamar. ` +
      'Untuk harga terbaru dan ketersediaan, tanya langsung lewat WhatsApp.',
  },
  {
    tanya: 'Apakah semua kamar ber-AC?',
    jawab:
      'Tidak. AC tersedia di kamar Deluxe dan Kamar Keluarga. Kamar Ekonomi dan Standard memakai kipas angin.',
  },
  {
    tanya: 'Apakah ada parkir?',
    jawab: 'Ada, parkir luas untuk motor, mobil, sampai bus kecil.',
  },
  {
    tanya: 'Apakah bisa menginap bersama keluarga atau rombongan?',
    jawab:
      'Bisa. Kamar Keluarga memuat sampai 4 orang dengan 2 kasur queen dan bisa ditambah extra bed. ' +
      'Untuk rombongan, hubungi kami lewat WhatsApp.',
  },
  {
    tanya: 'Bagaimana cara memesan?',
    jawab: 'Isi formulir booking di halaman ini atau chat langsung lewat WhatsApp — tanpa perlu telepon dulu.',
  },
];
