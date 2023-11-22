<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: "/"
  })
}
</script>

<template>
  <div class="h-100 d-flex flex-column justify-content-center align-items-center">
    <h1>{{ error.statusCode }}</h1>
    <p class="mt-3 fs-2">{{ error.message }}</p>
    <button @click="handleError" class="rounded-3 mt-3 text-center fs-5 bg-secondary text-white">go back</button>
  </div>
</template>

<style scoped>
.h-100 {
  height: 100vh !important;
}
</style>