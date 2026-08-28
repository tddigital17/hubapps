export const apps = [
  {
    id: 'eosis',
    name: 'eOsis',
    category: 'Pendidikan',
    description: 'Sistem pemilihan Ketua dan Wakil OSIS secara digital.',
    icon: 'eO',
    iconClass: 'icon-blue',
    url: 'https://eosis.tddig.my.id',
    status: 'Aktif',
    featured: true
  },
  {
    id: 'eperpus',
    name: 'ePerpus',
    category: 'Pendidikan',
    description: 'Sistem perpustakaan digital untuk membantu pengelolaan perpustakaan.',
    icon: 'eP',
    iconClass: 'icon-purple',
    url: '#',
    status: 'Nonaktif',
    featured: true
  },
  {
    id: 'voting',
    name: 'E-Voting',
    category: 'Produktivitas',
    description: 'Pemungutan suara digital yang cepat, aman, dan transparan.',
    icon: 'eV',
    iconClass: 'icon-amber',
    url: 'https://evoting.tddig.my.id',
    status: 'Aktif',
    featured: true
  },
  {
    id: 'erapor',
    name: 'eRapor',
    category: 'Pendidikan',
    description: 'Kelola penilaian dan laporan hasil belajar dengan lebih mudah.',
    icon: 'eR',
    iconClass: 'icon-coral',
    url: '#',
    status: 'Segera hadir',
    featured: false
  },
  {
    id: 'eabsensi',
    name: 'eAbsensi',
    category: 'Bisnis',
    description: 'Pencatatan kehadiran yang praktis untuk organisasi modern.',
    icon: 'eA',
    iconClass: 'icon-teal',
    url: '#',
    status: 'Segera hadir',
    featured: false
  }
]

export const categoryDetails = {
  Pendidikan: { icon: '✦', description: 'Aplikasi untuk kebutuhan pendidikan.' },
  Bisnis: { icon: '↗', description: 'Solusi digital untuk bisnis.' },
  Produktivitas: { icon: '◈', description: 'Aplikasi untuk meningkatkan produktivitas.' }
}
