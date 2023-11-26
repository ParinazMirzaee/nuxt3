<script setup>
const user = useSupabaseUser()
</script>

<template>
  <header
      class="w-100 container-fluid bg-light m-0 p-3 d-flex justify-content-between"
  >
    <NuxtLink class="fs-1 text-decoration-none" to="/">cartrader</NuxtLink>
    <div v-if="user" class="d-flex mt-3 me-3">
      <NuxtLink to="/profile/listings" class="me-5">Profile</NuxtLink>
      <p class="cursor">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
</template>
<script setup lang="ts">
</script>
<style scoped>

a {
  color: #464c50;
}

a:hover {
  color: #464c50;
}

</style>