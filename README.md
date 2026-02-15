# Vue SPA Learn

Учебный проект на Vue 3 с использованием Vite

## Описание

Это SPA-приложение для изучения Vue.js, созданное в образовательных целях. Включает базовую маршрутизацию и компонентную структуру.

**:rocket: Демо:** [https://SCaeR42.github.io/vue-spa-learn](https://SCaeR42.github.io/vue-spa-learn)

## Технологии

- **Vue 3** - JavaScript-фреймворк
- **Vite** - сборщик проектов
- **Vue Router** - маршрутизация
- **SCSS** - препроцессор CSS

## Структура проекта

```
src/
├── components/     # Vue компоненты
│   ├── Catalog.vue
│   ├── FooterView.vue
│   ├── HeaderView.vue
│   ├── Home.vue
│   └── Users.vue
├── router/         # Конфигурация маршрутов
│   └── index.js
├── assets/         # Статические ресурсы
│   ├── main.scss
│   └── vue.svg
├── App.vue         # Корневой компонент
└── main.js         # Точка входа
```

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

## Сборка

```bash
npm run build
```

## Деплой на GitHub Pages

### Предварительные требования

1. Создайте репозиторий на GitHub
2. В файле `package.json` замените `<username>` на ваше имя пользователя GitHub в поле `homepage`
3. Установите gh-pages:

```bash
npm install --save-dev gh-pages
```

### Деплой

```bash
npm run deploy
```

После успешного деплоя приложение будет доступно по адресу: `https://<username>.github.io/vue-spa-learn`

### Настройка CI/CD

Для автоматического деплоя при пуше в main ветку, создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
