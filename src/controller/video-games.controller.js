const VideoGames = require('../models/video-game.model')

exports.getAll = (req, res) => {
    VideoGames.getAllGames((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Error while retrieving all games"
            });
        } else {
            res.send(data)
        }
    })
};

exports.findOne  = (req, res) => {
    VideoGames.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No game found with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Game with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    VideoGames.updateById(
        req.params.id,
        new VideoGames(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Tutorial with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Tutorial with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};