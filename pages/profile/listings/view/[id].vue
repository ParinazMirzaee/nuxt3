<script setup>

import Message from "~/component/Car/Message.vue";
definePageMeta({
  middleware: [
    function (to, from) {
      const user = useSupabaseUser();
      if (user.value) {
        return;
      }
      return navigateTo("/login")
    }
  ]
});
</script>

<template>
  <NuxtLayout name="custom">
    <div class="rounded shadow mt-20">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>