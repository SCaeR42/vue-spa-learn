<template>


  <main class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">

      <div v-for="n in 6" :key="n" class="col">
        <div class="card h-100 border-0 shadow-sm hover-shadow">
          <img src="https://image-placeholder.com/images/actual-size/320x200.png" class="card-img-top" alt="Товар">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h5 class="card-title mb-0">Смартфон Pro {{ n }}</h5>
              <span class="text-success fw-bold">99 900 ₽</span>
            </div>
            <p class="card-text text-muted small">Краткое описание характеристик и преимуществ данного товара.</p>
          </div>
          <div class="card-footer bg-transparent border-0 pb-3">
            <button class="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center">
              <i class="bi bi-cart-plus me-2"></i> В корзину
            </button>
          </div>
        </div>
      </div>

    </div>
  </main>


</template>

<style scoped>
/* Добавляем немного лоска, которого нет в стандартном Bootstrap */
.hover-shadow {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-shadow:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}
</style>

<script setup>
import { ref } from 'vue'

defineProps({
  siteNаme: String,
})

const count = ref(0)
</script>
