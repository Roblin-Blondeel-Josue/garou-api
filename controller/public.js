const home = (req, res) => {
  res.json({ message: "Welcome to the Garou API" });
};

module.exports = {
  home,
};
