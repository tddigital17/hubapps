<script setup>
import { computed, ref } from 'vue'
import { apps, categoryDetails } from './data/apps'

const searchQuery = ref('')
const selectedCategory = ref('Semua')
const mobileMenuOpen = ref(false)

const categories = computed(() => ['Semua', ...new Set(apps.map((app) => app.category))])
const featuredApps = computed(() => apps.filter((app) => app.featured))
const filteredApps = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return apps.filter((app) => {
    const matchesCategory = selectedCategory.value === 'Semua' || app.category === selectedCategory.value
    const matchesSearch = !query || [app.name, app.category, app.description].some((value) => value.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })
})

function selectCategory(category) {
  selectedCategory.value = category
  document.querySelector('#applications')?.scrollIntoView({ behavior: 'smooth' })
}

function clearFilters() {
  searchQuery.value = ''
  selectedCategory.value = 'Semua'
}
</script>

<template>
  <header class="site-header">
    <nav class="nav container" aria-label="Navigasi utama">
      <a class="brand" href="#home" aria-label="HubApps beranda">
        <img class="brand-mark" src="/hubapps-logo.svg" alt="Logo HubApps" />
        <span><strong>Hub<span>Apps</span></strong><small>oleh TD Digital</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Buka menu" :aria-expanded="mobileMenuOpen" @click="mobileMenuOpen = !mobileMenuOpen">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" :class="{ open: mobileMenuOpen }">
        <a href="#home" @click="mobileMenuOpen = false">Beranda</a>
        <a href="#applications" @click="mobileMenuOpen = false">Aplikasi</a>
        <a href="#categories" @click="mobileMenuOpen = false">Kategori</a>
        <a href="#about" @click="mobileMenuOpen = false">Tentang</a>
        <a class="nav-parent" href="https://tddig.my.id" target="_blank" rel="noopener noreferrer">TD Digital <span>↗</span></a>
      </div>
    </nav>
  </header>

  <main>
    <section id="home" class="hero container">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-dot"></span> Pusat Aplikasi oleh TD Digital</div>
        <h1>Semua Aplikasi,<br /><em>Satu Hub.</em></h1>
        <p>Temukan dan akses berbagai aplikasi digital yang dikembangkan oleh TD Digital dalam satu tempat.</p>
        <div class="hero-search search-field">
          <span class="search-icon">⌕</span>
          <input v-model="searchQuery" type="search" placeholder="Cari aplikasi..." aria-label="Cari aplikasi" />
          <button v-if="searchQuery" type="button" class="clear-button" aria-label="Hapus pencarian" @click="searchQuery = ''">×</button>
          <button class="search-submit" type="button" aria-label="Cari" @click="selectCategory(selectedCategory)">→</button>
        </div>
        <div class="hero-hints"><span>Populer:</span> <button type="button" @click="searchQuery = 'eOsis'">eOsis</button><button type="button" @click="searchQuery = 'ePerpus'">ePerpus</button><button type="button" @click="searchQuery = 'eVoting'">eVoting</button></div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="glow"></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="art-card art-main"><div class="app-icon icon-blue">100%</div><div><strong>Terpercaya</strong><span>100% Aman</span></div><b>↗</b></div>
        <div class="art-card art-small"><div class="app-icon icon-purple">24JP</div><div><strong>Setia Melayani</strong><span>24 Jam ON</span></div></div>
        <div class="art-dot"></div><div class="art-grid"></div>
      </div>
    </section>

    <section class="stats container" aria-label="Statistik HubApps">
      <div><strong>{{ apps.length }}<sup>+</sup></strong><span>Aplikasi</span></div>
      <div><strong>{{ categories.length - 1 }}<sup>+</sup></strong><span>Kategori</span></div>
      <div><strong>TD Digital</strong><span>Pengembang</span></div>
      <p>Satu hub.<br /><b>Beragam solusi.</b></p>
    </section>

    <section class="featured-section container">
      <div class="section-heading"><div><span class="eyebrow">PILIHAN UNTUK ANDA</span><h2>Aplikasi Pilihan</h2></div><a href="#applications">Lihat semua aplikasi <span>→</span></a></div>
      <div class="featured-grid">
        <a v-for="app in featuredApps" :key="app.id" class="featured-card" :href="app.url" target="_blank" rel="noopener noreferrer">
          <span class="featured-label">Pilihan</span><div class="featured-top"><div class="app-icon" :class="app.iconClass">{{ app.icon }}</div><span class="card-arrow">↗</span></div>
          <h3>{{ app.name }}</h3><span class="category-label">{{ app.category }}</span><p>{{ app.description }}</p><span class="open-link">Buka aplikasi <span>→</span></span>
        </a>
      </div>
    </section>

    <section id="applications" class="applications-section">
      <div class="container">
        <div class="section-heading"><div><span class="eyebrow">KATALOG APLIKASI</span><h2>Aplikasi</h2><p>Semua alat yang Anda butuhkan, dalam satu tempat.</p></div></div>
        <div class="catalog-toolbar"><div class="catalog-search search-field"><span class="search-icon">⌕</span><input v-model="searchQuery" type="search" placeholder="Cari aplikasi..." aria-label="Cari katalog aplikasi" /></div><div class="filters" role="group" aria-label="Filter kategori"><button v-for="category in categories" :key="category" type="button" :class="{ active: selectedCategory === category }" @click="selectedCategory = category">{{ category }}</button></div></div>
        <div v-if="filteredApps.length" class="app-grid">
          <a v-for="app in filteredApps" :key="app.id" class="app-card" :href="app.url" target="_blank" rel="noopener noreferrer">
            <div class="app-card-top"><div class="app-icon" :class="app.iconClass">{{ app.icon }}</div><span class="status" :class="{ soon: app.status !== 'Aktif' }"><i></i>{{ app.status }}</span></div>
            <h3>{{ app.name }}</h3><span class="category-label">{{ app.category }}</span><p>{{ app.description }}</p><span class="open-link">Buka aplikasi <span>→</span></span>
          </a>
        </div>
        <div v-else class="empty-state"><div class="empty-icon">⌕</div><h3>Aplikasi tidak ditemukan</h3><p>Coba kata kunci atau kategori lain.</p><button type="button" @click="clearFilters">Tampilkan Semua Aplikasi</button></div>
      </div>
    </section>

    <section id="categories" class="categories-section container">
      <div class="section-heading"><div><span class="eyebrow">TEMUKAN SESUAI KEBUTUHAN</span><h2>Jelajahi Berdasarkan Kategori</h2></div></div>
      <div class="category-grid"><button v-for="(detail, category) in categoryDetails" :key="category" class="category-card" type="button" @click="selectCategory(category)"><span class="category-icon">{{ detail.icon }}</span><strong>{{ category }}</strong><p>{{ detail.description }}</p><span class="category-arrow">↗</span></button></div>
    </section>

    <section id="about" class="about-section container"><div class="about-panel"><div><span class="eyebrow">TENTANG KAMI</span><h2>Dibuat untuk<br /><em>memudahkan digital.</em></h2></div><div><p>HubApps adalah pusat aplikasi digital dari TD Digital yang menyediakan akses mudah ke berbagai aplikasi yang kami kembangkan untuk sekolah, instansi, bisnis, dan kebutuhan digital lainnya.</p><a href="https://tddig.my.id" target="_blank" rel="noopener noreferrer">Kenali TD Digital lebih lanjut <span>→</span></a></div></div></section>
  </main>

  <footer class="footer"><div class="container footer-inner"><div class="footer-brand"><a class="brand" href="#home"><img class="brand-mark" src="/hubapps-logo.svg" alt="Logo HubApps" /><span><strong>Hub<span>Apps</span></strong><small>Pusat Aplikasi oleh TD Digital</small></span></a><p>Semua aplikasi TD Digital<br />dalam satu tempat.</p></div><div class="footer-links"><div><strong>Jelajahi</strong><a href="#applications">Aplikasi</a><a href="#categories">Kategori</a></div><div><strong>Induk</strong><a href="https://tddig.my.id" target="_blank" rel="noopener noreferrer">TD Digital ↗</a></div></div></div><div class="container footer-bottom"><span>© 2026 TD Digital. Hak cipta dilindungi.</span><span>HubApps adalah platform TD Digital.</span></div></footer>
</template>
