const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config; // ES Module export
// Optional CommonJS compatibility
if (typeof module !== "undefined") {
  module.exports = config;
}
