<script setup>
import SideBar from "~/component/Car/SideBar.vue";

const route = useRoute()

useHead({
  title: `${route.params.make ? route.params.make.toUpperCase() : ['Cars']} in ${route.params.city.toUpperCase()}`
})

</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <div class="mt-5 d-flex">
        <NuxtErrorBoundary>
          <SideBar/>
          <NuxtPage/>
          <template #error="{error}">
            <div class="d-flex flex-column align-items-center w-100 mt-5">
              <h1 class="text-danger">sorry, something went wrong</h1>
              <code class="text-dark">{{ error }}</code>
              <button
                  class="text-white rounded bg-primary mt-3 p-3"
                  @click="error.value = null"
              >
                Go Back
              </button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </NuxtLayout>
  </div>
</template>
