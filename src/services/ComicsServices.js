import { ComicObj } from "../entities/ComicObj";
const { baseAPI, key } = require("../shared/baseApi");

class ComicsService {
    getComics(id) {
        return baseAPI.get(`/characters/${id}/comics?apikey=${key}`)
            .then(response => response.data.data.results.slice(0, 12))
            .then(comicsList => {
                let newComicsList = comicsList.map(comic => new ComicObj(comic))
                return newComicsList;
            })
    }
}

export const comicsService = new ComicsService()