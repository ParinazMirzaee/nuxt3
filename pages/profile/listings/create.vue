<script setup>
import Select from "~/component/Car/Ad/Select.vue";
import Input from "~/component/Car/Ad/Input.vue";
import Image from "~/component/Car/Ad/Image.vue";
import Textarea from "~/component/Car/Ad/Textarea.vue";

const { makes } = useCars();


const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});

const onChangeInput = (data, name) => {
  info["value"][name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 5,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 6,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];
</script>

<template>
  <NuxtLayout name="custom">
    <div>
      <div class="mt-24">
        <h1 class="text-6xl">Create a New Listing</h1>
      </div>
      <div class="shadow rounded p-3 mt-5">
        <Select
            title="Make *"
            :options="makes"
            name="make"
            @change-input="onChangeInput"
        />
        <Input
            v-for="input in inputs"
            :key="input.id"
            :title="input.title"
            :name="input.name"
            :placeholder="input.placeholder"
            @change-input="onChangeInput"
        />
        <Textarea
            title="Description *"
            name="description"
            placeholder=""
            @change-input="onChangeInput"
        />
        <Image @change-input="onChangeInput" />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>