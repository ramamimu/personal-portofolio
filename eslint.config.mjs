// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  // eslint-disable vue/html-self-closing
  {
    rules: {
      "vue/html-self-closing": "off",
    },
  }
);
