<template>
  <main class="container">

    <div class="d-flex align-items-center mb-3">
      <h2 class="mb-0 clickable" @click="toggleAll">Пользователи</h2>
      <button class="btn btn-sm btn-outline-secondary ms-3" @click="toggleAll">{{ showList ? 'Скрыть список' : 'Показать список' }}</button>
    </div>

    <ul class="list-group mb-4" v-show="showList">
      <li
        v-for="(user, index) in users"
        :key="user.id"
        class="list-group-item d-flex flex-column align-items-start clickable"
        @click="toggle(user.id)"
        @mouseenter="setHover(user.id)"
        @mouseleave="clearHover"
        :aria-expanded="selectedId === user.id"
      >
        <div class="w-100 d-flex justify-content-between align-items-center">
          <!-- <div :style="{ color: hoveredId === user.id ? '#0d6efd' : '' }"> -->
          <div :class="{ hoverText: hoveredId === user.id }">
            <div><strong>{{ index + 1 }}.</strong> {{ user.name }}</div>
            <div class="small text-muted">Возраст: {{ user.age }}</div>
          </div>
          <div class="text-end ms-3">
            <span :class="['badge rounded-pill', user.group === 'админ' ? 'bg-danger' : 'bg-primary']">{{ user.group }}</span>
          </div>
        </div>

        <div class="w-100 mt-2 user-details" v-show="selectedId === user.id">
          <ul class="mb-0 small text-muted">
            <li>Последняя покупка: {{ formatDate(user.lastPurchase) }}</li>
            <li>Любимые категории: {{ user.favorites.join(', ') }}</li>
          </ul>
        </div>
      </li>
    </ul>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'Иван Иванов', group: 'админ', age: 34, favorites: ['Смартфоны', 'Аксессуары'], lastPurchase: '2026-02-10' },
  { id: 2, name: 'Анна Смирнова', group: 'пользователь', age: 28, favorites: ['Наушники', 'Аксессуары'], lastPurchase: '2026-01-22' },
  { id: 3, name: 'Сергей Петров', group: 'пользователь', age: 41, favorites: ['Смартфоны', 'Умные часы'], lastPurchase: '2026-02-05' },
  { id: 4, name: 'Ольга Кузнецова', group: 'пользователь', age: 30, favorites: ['Планшеты', 'Чехлы'], lastPurchase: '2025-12-18' },
  { id: 5, name: 'Дмитрий Соколов', group: 'пользователь', age: 36, favorites: ['Ноутбуки', 'Аксессуары'], lastPurchase: '2026-02-12' },
  { id: 6, name: 'Мария Попова', group: 'пользователь', age: 24, favorites: ['Фото', 'Смартфоны'], lastPurchase: '2025-11-30' },
  { id: 7, name: 'Алексей Лебедев', group: 'пользователь', age: 29, favorites: ['Гаджеты', 'Аксессуары'], lastPurchase: '2026-01-10' },
  { id: 8, name: 'Елена Орлова', group: 'пользователь', age: 45, favorites: ['Умный дом', 'Датчики'], lastPurchase: '2026-02-01' },
  { id: 9, name: 'Николай Семёнов', group: 'пользователь', age: 38, favorites: ['Смартфоны', 'Наушники'], lastPurchase: '2026-02-14' },
  { id: 10, name: 'Татьяна Морозова', group: 'пользователь', age: 31, favorites: ['Аксессуары', 'Чехлы'], lastPurchase: '2025-10-03' },
])

const selectedId = ref(null)
const hoveredId = ref(null)
const showList = ref(true)

function toggle(id) {
  selectedId.value = selectedId.value === id ? null : id
}

function setHover(id) { hoveredId.value = id }
function clearHover() { hoveredId.value = null }

function toggleAll() { showList.value = !showList.value }

function formatDate(d) {
  if (!d) return '-'
  try { return new Date(d).toLocaleDateString() } catch { return d }
}
</script>

<style scoped>
.clickable { cursor: pointer; }
.user-details { padding-left: 0.25rem; }
.list-group-item { transition: color 0.12s ease; }
.hoverText {
  color: red;
}
</style>
