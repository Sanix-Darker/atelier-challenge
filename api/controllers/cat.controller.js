/* eslint-disable import/extensions */
// All functions for the controller
import { getCatPeer, getCatScores, updateCatScore } from './utils.js';

const controller = {};

controller.getPeer = async (req, res) => {
  try {
    const result = {
      result: getCatPeer(),
    };
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: 'Error on getting cat peers.' });
  }
};

controller.getScores = async (req, res) => {
  try {
    const page = req.params.page ? req.params.page : 1;
    const result = {
      result: getCatScores(page),
    };
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: 'Error on getting scores from cats.' });
  }
};

controller.updateScore = async (req, res) => {
  try {
    const catID = req.params.cat_id;
    updateCatScore(catID);
    const result = {
      result: 'Updated successfully !',
    };
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: 'Error updating score for a cat.' });
  }
};


export default controller;
