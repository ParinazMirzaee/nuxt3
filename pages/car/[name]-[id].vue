<script setup>
import Detail from "~/component/Car/Details/Detail.vue";
import Attributes from "~/component/Car/Details/Attributes.vue";
import Description from "~/component/Car/Details/Description.vue";
import Contact from "~/component/Car/Details/Contact.vue";

const route = useRoute();
const {cars} = useCars();
useHead({
  title: route.params.name.toUpperCase()
});

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  })
});
//serverside error(because we go to the direct url)
if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id of ${(route.params.id)} does not exist`,
  })
}
definePageMeta({
  layout: 'custom'
});

/*const {toTitleCase} = useUtilities

useHead({
  title: toTitleCase(route.params.name)
})

function toTitleCase(str) {
  return str.replace(/\w\S*!/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}*/
</script>

<template>
  <div>
    <Detail :car="car"/>
    <Attributes :features="car.features"/>
    <Description :description="car.description"/>
    <Contact/>
  </div>
</template>
