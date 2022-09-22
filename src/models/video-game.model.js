const sql = require("../db.js")

const VideoGames = function(game) {
    this.title = game.title;
    this.description = game.description;
    this.image = game.image;
    this.price = game.price;
    this.likes = game.likes;
};

VideoGames.getAllGames = result => {
    sql.query("Select * from VideoGames.Games", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("VideoGames: ", res);
        result(null, res);
    });
};

VideoGames.findById = (id, result) => {
    sql.query(`Select * From VideoGames.Games where id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Game found: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

VideoGames.updateById = (id, game, result) => {
    sql.query(
        "Update VideoGames.Games Set likes = ? where id = ?",
        [game.likes, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Tutorial with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Updated game: ", { id: id, ...game });
            result(null, { id: id, ...game });
        }
    );
};



module.exports = VideoGames;