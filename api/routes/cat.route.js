// All routes for cat.route
import controller from '../controllers/cat.controller.js';


/**
 * List of all routes for the cat
 * @param {*} router
 */
const catRoutes = (router) => {
  const prefix = '/cats';

    // The route to get cats
  router.get(`${prefix}`, (req, res) => {
    controller.getPeer(req, res);
  });

    // The route for getting scores for cats
  router.get(`${prefix}/scores/?:page`, (req, res) => {
    controller.getScores(req, res);
  });

    // The route for updating the score of a cat
  router.put(`${prefix}/scores/:cat_id`, (req, res) => {
    controller.updateScore(req, res);
  });
};

export default catRoutes;
