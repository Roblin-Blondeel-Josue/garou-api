const publics = require("./public");
const character = require("./character");

const setupRoutes = (app) => {
  app.use("/", publics);
  app.use("/sheet", character);
};

module.exports = setupRoutes;
