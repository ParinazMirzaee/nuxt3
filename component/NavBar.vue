<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
  // 1) make user.value = null
  // 2) remove JWT from cookie browser
  // const {error} = supabase.auth.signOut();

  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: {event: "SIGNED_OUT", session: null},
    });
  } catch (error) {
    console.log(error)
  }

  user.value = null;
  navigateTo("/");


  /*if (error) {
    console.log(error);
  }*/
  // 3) navigate to home page
}
</script>

<template>
  <header
      class="w-100 container-fluid bg-light m-0 p-3 d-flex justify-content-between"
  >
    <NuxtLink class="fs-1 text-decoration-none" to="/">cartrader</NuxtLink>
    <div v-if="user" class="d-flex mt-3 me-3">
      <NuxtLink to="/profile/listings" class="me-5">Profile</NuxtLink>
      <p class="cursor" @click="logout">Logout</p>
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