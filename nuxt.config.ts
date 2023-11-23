// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxt/image"
    ],
    css: [
        '@/public/css/bootstrap.min.css',
        '@/public/css/font.css',
        '@/public/fontawesome/css/all.css',
        '@/public/css/mds.bs.datetimepicker.style.css',
        '@/public/css/owl.carousel.min.css',
        '@/public/css/style.css',
        '@/public/css/clockpicker.min.css',
        '@/public/css/site.css',
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
