// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxt/image",
        "@vueuse/nuxt",
        "@nuxtjs/supabase"
    ],
    css: [
        '@/public/css/bootstrap.min.css',
        '@/public/css/font.css',
        '@/public/css/index.css',
    ],
    app: {
        head: {
            script: [
                {
                    src: '/js/bootstrap.bundle.min.js',
                },
                {
                    src: '/js/num2persian-min.js',
                },
                {
                    src: '/js/jquery-3.6.0.min.js',
                },
                {
                    src: '/js/ckeditor.js',
                },
                {
                    src: '/js/owl.carousel.min.js',
                },
                {
                    src: '/js/clockpicker.min.js',
                },
                {
                    src: '/js/mds.bs.datetimepicker.js',
                },
            ]
        }
    },

    /* plugins: [
       { src: "~/node_modules/bootstrap/dist/js/bootstrap.js", mode: "client" },
     ],*/
})
