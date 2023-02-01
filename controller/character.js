const db = require("../models");

const Character = db.character;

const getcharacters = (req, res) => {
  Character.find({})
    .populate("auspice")
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getcharacter = (req, res) => {
  Character.findOne({ code: req.params.code })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "character not found" }));
};
const createcharacter = (req, res) => {
  Character.create(req.body)
    .then(() => res.status(201).json({ msg: "character created" }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const updatecharacter = (req, res) => {
  Character.findOneAndUpdate({ _id: req.params.characterID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "character not found" }));
};

function deletecharacter(req, res) {
  Character.findOneAndDelete({ _id: req.params.characterID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "character not found" }));
}

module.exports = {
  getcharacters,
  getcharacter,
  createcharacter,
  updatecharacter,
  deletecharacter,
};
