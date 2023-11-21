<script setup>
const city = ref("");
// const router = useRouter();
const cityError = ref(false)

const handleSearch = () => {
  if (!city.value) {
    return cityError.value = true
  }
  navigateTo(`/city/${city.value}/car`)
  // router.push(`/city/${city.value}/car`)
  // router.push('/city/' + city.value + '/car')
}
</script>
<template>
  <div
      class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
        v-model="city"
        type="text"
        :class="cityError ? 'red_border' : ''"
        class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
        placeholder="Search by city..."
    />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch">Search</button>
  </div>
</template>

<style scoped>
.red_border{
  border: red 2px solid;
  border-radius: 15px;
}
</style>