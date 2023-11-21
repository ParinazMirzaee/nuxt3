<script setup lang="ts">
const route=useRoute()
useHead({
  title: route.params.name.toUpperCase()
})

import Detail from "~/component/Car/Details/Detail.vue";
import Attributes from "~/component/Car/Details/Attributes.vue";
import Description from "~/component/Car/Details/Description.vue";
import Contact from "~/component/Car/Details/Contact.vue";
import NavBar from "~/component/NavBar.vue";
</script>

<template>
  <div>
    <div
        class="mx-auto mt-4 px-4 pb-3"
    >
      <Detail/>
      <Attributes/>
      <Description/>
      <Contact/>
    </div>
  </div>
</template>
