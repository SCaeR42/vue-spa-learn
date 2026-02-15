<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold">{{ siteNаme }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link to="/" class="nav-link active">Главная</router-link></li>
          <li class="nav-item"><router-link to="/catalog" class="nav-link">Каталог</router-link></li>
          <li class="nav-item"><router-link to="/users" class="nav-link">Пользователи</router-link></li>
          <li class="nav-item">
            <a class="nav-link position-relative" href="#">
              Корзина
              <span class="badge rounded-pill bg-danger">3</span>
            </a>
          </li>
        </ul>

      </div>

    </div>
  </nav>

    <header class="bg-primary text-white text-center py-5 mb-4 shadow-sm">
    <div class="container">
      <h1 class="fw-light">Новая коллекция 2026</h1>
      <p class="lead text-white-50">Успейте купить лучшие товары на Vue 3 и Bootstrap 5</p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  siteNаme: String,
})
</script>
