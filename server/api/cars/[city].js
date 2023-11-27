import cars from "~/data/cars.json";

export default defineEventHandler((event) => {
    const {city} = event.context.params;

    let filteredCars = cars;
    filteredCars = filteredCars.filter((cars) => {
        return cars.city.toLowerCase() === city.toLowerCase();
    });
    return filteredCars;
})