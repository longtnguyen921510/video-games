module.exports = app => {
    const videogames = require('../controller/video-games.controller');
    const router = require("express").Router();

    router.get("/", videogames.getAll)
    router.get("/:id", videogames.findOne)
    router.put("/:id", videogames.update);
    app.use('/api/games', router);
}