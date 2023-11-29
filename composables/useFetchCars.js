export default async (city, filters) => {
    const {data, error,refresh} = await useFetch(`/api/cars/${city}`, {
        params: {
            ...filters,
        },
    });
    if (error.value) {
        throw createError({
            statusCode: error.value.statusCode,
            statusMessage: "Unable to fetch cars"
        });
    }
    return {data, refresh};
}