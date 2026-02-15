<template>
  <main class="container">

    <h2 class="mb-4">{{ sectionName }}</h2>

    <div v-if="loading" class="text-center py-5">Загрузка товаров...</div>
    <div v-else-if="error" class="alert alert-danger">Ошибка: {{ error }}</div>

    <div v-else class="row row-cols-1 row-cols-md-3 g-4">

      <CatalogItem v-for="product in products" :key="product.id" :product="product" />
      
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CatalogItem from './CatalogItem.vue'

defineProps({
  sectionName: String,
})

const products = ref([])
const loading = ref(true)
const error = ref(null)

const CACHE_KEY = 'fakestore_products'
const CACHE_TS_KEY = 'fakestore_products_ts'
const CACHE_TTL = 1000 * 60 * 60 // 1 hour

async function loadProducts() {
  loading.value = true
  error.value = null

  // Try read cache first
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    const tsRaw = localStorage.getItem(CACHE_TS_KEY)
    const ts = tsRaw ? parseInt(tsRaw, 10) : 0
    if (raw && ts && (Date.now() - ts) < CACHE_TTL) {
      products.value = JSON.parse(raw)
      loading.value = false
      return
    }
  } catch (e) {
    console.warn('Cache read failed', e)
  }

  // Fetch from remote
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    products.value = data
    // Save to cache (best-effort)
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data))
      localStorage.setItem(CACHE_TS_KEY, String(Date.now()))
    } catch (e) {
      console.warn('Cache write failed', e)
    }
  } catch (e) {
    // On fetch error, fall back to cache if available
    try {
      const raw = localStorage.getItem(CACHE_KEY)
      if (raw) {
        products.value = JSON.parse(raw)
        error.value = 'Ошибка загрузки, показаны данные из кеша'
      } else {
        error.value = e.message || String(e)
      }
    } catch (e2) {
      error.value = e.message || String(e)
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadProducts()
})
</script>

<style scoped>
</style>
