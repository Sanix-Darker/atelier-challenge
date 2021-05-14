// All functions for the controller



const controller = {};


controller.getAll = async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json({ error: `Error on getting cats.` });
    }
}

controller.getScores = async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json({ error: `Error on getting scores from cats.` });
    }
}

controller.updateScore = async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json({ error: `Error updating score for a cat.` });
    }
}
