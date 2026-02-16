<template>

  <div class="card border-0 shadow-sm mb-5">

    <div class="img-wrap">
      <img :src="product.image" class="card-img-top" :alt="product.title">
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text text-muted small">
        {{ product.description && product.description.length > 120 ? product.description.slice(0, 120) + '...' :
          product.description }}
        <br>
        <br>
        {{ productDescription }}
      </p>
    </div>

    <div class="card-footer bg-transparent border-0">
      <button class="btn btn-outline-primary w-100">Купить — ${{ product.price }}</button>
    </div>

  </div>

</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const productDescription = computed(() => {
  if (!props.product.description) return '';
  return props.product.description.length > 120 ? props.product.description.slice(0, 120) + '...' : props.product.description;
});

</script>

<style scoped>
.img-wrap {
  width: 100%;
  height: 350px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  display: block;
  text-align: center;
}

.img-wrap img {
  width: auto;
  max-width: 100%;
  max-height: 100%;
}

/* Fallback for older browsers without aspect-ratio */
@supports not (aspect-ratio: 1/1) {
  .img-wrap {
    padding-top: 100%;
    height: 0;
  }

  .img-wrap img {
    aspect-ratio: 1 / 1;
  }
}
</style>
