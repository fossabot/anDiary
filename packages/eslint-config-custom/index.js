module.exports = {
  extends: ["eslint:recommended", "next/babel","next/core-web-vitals", "next", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
