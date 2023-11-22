<script setup lang="ts">
const route = useRoute()
// const {toTitleCase} = useUtilities

useHead({
  title: route.params.name.toUpperCase()
})
/*
useHead({
  title: toTitleCase(route.params.name)
})
*/

definePageMeta({
  layout: 'custom'
})

/*function toTitleCase(str) {
  return str.replace(/\w\S*!/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}*/

import Detail from "~/component/Car/Details/Detail.vue";
import Attributes from "~/component/Car/Details/Attributes.vue";
import Description from "~/component/Car/Details/Description.vue";
import Contact from "~/component/Car/Details/Contact.vue";
</script>

<template>
  <div>
      <Detail/>
      <Attributes/>
      <Description/>
      <Contact/>
  </div>
</template>
