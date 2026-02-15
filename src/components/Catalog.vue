<template>
  <main class="container">
    
    <h2 class="mb-4">{{ sectionName }}</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="n in 6" :key="n" class="col">
        <div class="card h-100 border-0 shadow-sm">
          <img src="https://image-placeholder.com/images/actual-size/320x200.png" class="card-img-top" alt="Товар">
          <div class="card-body">
            <h5 class="card-title">Товар {{ n }}</h5>
            <p class="card-text text-muted small">Короткое описание товара в каталоге.</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            <button class="btn btn-outline-primary w-100">Купить</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
defineProps({
  sectionName: String,
})
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 160px;
}
</style>
