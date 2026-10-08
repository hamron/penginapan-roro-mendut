/**
 * Pusat data Penginapan Roro Mendut.
 * Ganti nilai di file ini saja — seluruh website ikut berubah.
 *
 * Baris bertanda TODO masih perlu kamu isi.
 */

export const site = {
  nama: 'Penginapan Roro Mendut',
  namaPendek: 'Roro Mendut',
  tagline: 'Penginapan murah, 5 menit dari Candi Borobudur',
  deskripsi:
    'Penginapan murah di Mendut, Mungkid, Magelang — sekitar 5 menit berkendara dari ' +
    'Candi Borobudur. Bersih, nyaman, parkir luas, cocok untuk keluarga dan rombongan.',

  url: 'https://penginapanroromendut.web.id',

  // 0812-3153-8282 dalam format internasional
  whatsapp: '6281231538282',

  telepon: '+62 812-3153-8282',
  email: 'penginapanroromendut@gmail.com',

  alamat: {
    jalan: 'Lingk. Mendut II RT 001 RW 004',
    kelurahan: 'Mendut, Kec. Mungkid',
    kota: 'Magelang',
    provinsi: 'Jawa Tengah',
    kodePos: '56553',                 // TODO: pastikan kode pos benar
    negara: 'ID',
  },

  koordinat: { lat: -7.604065806150987, lng: 110.23002645682462 },

  /**
   * Kosongkan untuk memakai peta otomatis dari koordinat di atas.
   * Isi hanya kalau mau pakai potongan embed khusus dari Google Maps
   * (Bagikan > Sematkan peta > salin isi src="...").
   */
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

/** URL iframe peta — pakai petaEmbed manual kalau diisi, kalau tidak dibuat otomatis dari koordinat */
export function linkPetaEmbed(): string {
  if (site.petaEmbed) return site.petaEmbed;
  return `https://www.google.com/maps?q=${site.koordinat.lat},${site.koordinat.lng}&z=16&output=embed`;
}

/** Link untuk buka lokasi ini langsung di Google Maps */
export function linkGoogleMaps(): string {
  return `https://www.google.com/maps?q=${site.koordinat.lat},${site.koordinat.lng}`;
}
