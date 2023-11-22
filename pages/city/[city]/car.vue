<script setup lang="ts">

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
import SideBar from "~/component/Car/SideBar.vue";
import nuxtLayout from "#app/components/nuxt-layout";
// import {useUtilities} from "#imports";
</script>

<template>
  <div>
    <div class="mt-5 d-flex">
      <SideBar/>
      <NuxtPage/>
    </div>
  </div>

</template>
