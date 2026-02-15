<template>


  <Catalog sectionName="Главная" />


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
import Catalog from '../components/Catalog.vue'
</script>
