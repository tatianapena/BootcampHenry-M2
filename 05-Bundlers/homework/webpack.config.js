module.exports = {
  entry: "./browser/app.js",
  output: {
    path:__dirname + "/browser", // nombre de la carpeta anterior, donde estoy parado.
    filename: "bundle.js",
  },
};