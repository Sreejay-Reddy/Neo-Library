module.exports = {
  plugins: [
    require("postcss-prefix-selector")({
      prefix: ".neopop",
      transform(prefix, selector, prefixedSelector) {

        if (
          selector.startsWith(":root") ||
          selector.startsWith("html") ||
          selector.startsWith("body")
        ) {
          return selector;
        }

        return prefixedSelector;
      },
    }),
  ],
};
