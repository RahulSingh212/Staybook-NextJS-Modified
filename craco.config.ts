const VitePlugin = require("vite-plugin-react");

module.exports = {
  webpack: {},
  plugins: [
    {
      plugin: [VitePlugin, require("tailwindcss"), require("autoprefixer")],
      // Optional: Specify the path to the Vite configuration file.
      // If not specified, the default Vite configuration file will be used.
      // viteConfigFile: 'vite.config.js',
    },
  ],
};
