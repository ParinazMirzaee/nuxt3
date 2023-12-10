<script setup lang="js">
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();


/*await prisma.car.create({
  data: {
    "name": "ali",
    "numberOfSeats": "dfdsf",
    "miles": 555,
    "features": [],
    "image": "nothing yet",
    "price": 50000,
    "description": "fdfsf",
    "model": "fdsa",
    "make": "fsdf",
    "city": "fsd",
    "listerId": "fsd"
  },
})*/

const cars = await prisma.car.findMany()


</script>

<template>
  <div>
    {{ cars }}
  </div>
</template>

<style scoped>

</style>