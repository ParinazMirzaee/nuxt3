<template>
  <div class="p-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img
          class="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 pb-2">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto at atque aut earum et,
          eveniet exercitationem fugiat in magni maiores minus non quo ratione, sed temporibus voluptas voluptatum.
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="badge cursor mx-1">#photography</span>
        <span class="badge cursor mx-1">#travel</span>
        <span class="badge cursor mx-1">#winter</span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  display: inline-block;
  background-color: #6c757d;
  opacity: 100;
  border-radius: 20px;
}

.badge:hover{
  background-color: #474b4e;
}
</style>