<script setup>

import Message from "~/component/Car/Message.vue";

definePageMeta({
  middleware: ["auth"]
});
</script>

<template>
  <NuxtLayout name="custom">
    <div class="rounded shadow mt-20">
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>