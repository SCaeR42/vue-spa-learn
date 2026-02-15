<script setup>
import Header from './components/HeaderView.vue'
import Footer from './components/FooterView.vue'

</script>

<template>

  <Header siteNаme="VueShop" />

  <main>

    <section>
      <div class="container">

        <router-view />

      </div>
    </section>

  </main>

  <Footer siteNаme="VueShop" />


</template>

<style scoped></style>
