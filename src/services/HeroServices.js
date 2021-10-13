import { HeroObj, HeroInfoObj } from "../entities/HeroObj";
const { baseAPI, key } = require("../shared/baseApi");

class HeroService {

    getCharacters() {
        return baseAPI.get(`/characters?apikey=${key}`)
            .then(response => response.data.data.results)
            .then(heroesList => {
                let newHeroesList = heroesList.map(hero => new HeroObj(hero))
                return newHeroesList;
            })
    }
    getSingleCharacter(id) {
        return baseAPI.get(`/characters/${id}?apikey=${key}`)
            .then(response => response.data.data.results)
            .then(response => new HeroInfoObj(response[0]))
            .catch(error => console.log(error))
    }
    searchCharacters(name) {
        return baseAPI.get(`/characters?nameStartsWith=${name}&apikey=${key}`)
            .then(response => response.data.data.results)
            .then(heroesList => {
                let newHeroesList = heroesList.map(hero => new HeroObj(hero))
                return newHeroesList
            })
    }
}

export const heroService = new HeroService();