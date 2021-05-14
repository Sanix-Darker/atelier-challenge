// All routes for cat.route
import controller from "../controllers/cat.controller"


/**
 * List of all routes for the cat
 * @param {*} router
 */
 const routes = (router) => {
    const prefix = `/cats`;

    // The route to get cats
    router.get(`${prefix}/?:page`, (req, res) => {
        controller.getAll(req, res);
    });

    // The route for getting scores for cats
    router.get(`${prefix}/scores`, (req, res) => {
        controller.getScores(req, res);
    });

    // The route for updating the score of a cat
    router.put(`${prefix}/scores/:cat_id`, (req, res) => {
        controller.updateScore(req, res);
    });
};

export default routes;
