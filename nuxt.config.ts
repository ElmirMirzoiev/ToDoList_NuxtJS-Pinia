// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/style.css"],
  modules: [[
    "@pinia/nuxt",
    {
      autoImports: ["defineStore",],
    },
  ],
  ['@vee-validate/nuxt',
    {
      autoImports: true,
      // Use different names for components
      componentNames: {
        Form: 'VeeForm',
        Field: 'VeeField',
        FieldArray: 'VeeFieldArray',
        ErrorMessage: 'VeeErrorMessage',
      },
    }],
  ['@invictus.codes/nuxt-vuetify', {
    vuetify: {
      moduleOptions: {
        treeshaking: true,
        useIconCDN: true,
        styles: true,
        autoImport: true,
        useVuetifyLabs: true,
      }
    },

  }]
  ],
  imports: {
    dirs: ["stores"],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
});
