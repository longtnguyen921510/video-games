import http from "../http-common";

class VideoGamesService {
    getAll() {
        return http.get("/games")
    }

    findOne(id) {
        return http.get(`/games/${id}`)
    }

    update(id, data) {
        return http.put(`/games/${id}`, data)
    }
}

export default new VideoGamesService();