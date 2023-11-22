<script setup lang="ts">
import SideBar from "~/component/Car/SideBar.vue";
import Card from "~/component/Car/Card.vue";

const route = useRoute()
// const {toTitleCase} = useUtilities()

useHead({
  title: `${route.params.make ? route.params.make.toUpperCase() : 'Cars'} in ${route.params.city.toUpperCase()}`
})

/*
useHead({
  title: toTitleCase(route.params.name)
})
*/

/*function toTitleCase(str) {
  return str.replace(/\w\S*!/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}*/

definePageMeta({
  layout: 'custom'
})
import nuxtLayout from "#app/components/nuxt-layout";
// import {useUtilities} from "#imports";
</script>

<template>
  <div>
    <div class="mt-5 d-flex">
      <NuxtErrorBoundary>
        <SideBar/>
        <NuxtPage/>
        <template #error="{error}">
          <h1>sorry, something went wrong</h1>
          <code>{{ error }}</code>
          <button class="text-white rounded bg-secondary mt-3 p-3" @click="error.value = null">Go Back</button>
          <div class="text-center mx-auto d-flex flex-column">

          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>

</template>
