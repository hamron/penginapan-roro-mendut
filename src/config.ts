/**
 * Pusat data Penginapan Roro Mendut.
 * Ganti nilai di file ini saja — seluruh website ikut berubah.
 *
 * Baris bertanda TODO masih perlu kamu isi.
 */

export const site = {
  nama: 'Penginapan Roro Mendut',
  namaPendek: 'Roro Mendut',
  tagline: 'Menginap tenang, sepelemparan batu dari Borobudur',
  deskripsi:
    'Penginapan bersih dan nyaman di kawasan Borobudur, Magelang. ' +
    'Hanya beberapa menit dari Candi Borobudur, cocok untuk keluarga, ' +
    'rombongan, maupun perjalanan singkat.',

  url: 'https://penginapanroromendut.web.id',

  // 0812-3153-8282 dalam format internasional
  whatsapp: '6281231538282',

  telepon: '+62 812-3153-8282',
  email: 'arsbeyhomestay@gmail.com', // TODO: ganti kalau punya email khusus

  alamat: {
    jalan: 'Jl. Badrawati',           // TODO: alamat jalan lengkap + nomor
    kelurahan: 'Borobudur',           // TODO: nama dusun/kelurahan
    kota: 'Magelang',
    provinsi: 'Jawa Tengah',
    kodePos: '56553',                 // TODO: pastikan kode pos benar
    negara: 'ID',
  },

  koordinat: { lat: -7.6041934275785685, lng: 110.22987625767105 },

  // TODO: Google Maps > Bagikan > Sematkan peta > salin isi src="..."
  petaEmbed: '',

  /** Membuka kotak bintang Google langsung, tamu tidak perlu cari-cari */
  linkReviewGoogle: 'https://g.page/r/CQmXUtzemNTqEBM/review',

  sosial: {
    instagram: '', // TODO
    facebook: '',
    tiktok: '',
  },

  jamOperasional: {
    checkIn: '14:00',
    checkOut: '12:00',
    resepsionis: '24 jam',
  },
} as const;

/** Alamat satu baris, dipakai di footer dan schema.org */
export const alamatLengkap = [
  site.alamat.jalan,
  site.alamat.kelurahan,
  site.alamat.kota,
  site.alamat.provinsi,
  site.alamat.kodePos,
].join(', ');

/** Bikin link WhatsApp dengan pesan yang sudah terisi otomatis */
export function linkWhatsApp(pesan: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(pesan)}`;
}
