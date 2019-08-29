import { observable, action, computed, decorate, flow, $mobx, toJS } from 'mobx'

export interface IFilmStore {
    films: Array<any>;
    film: any;
    schema: any;
    stringPropertyNames: Set<string>;
    arrayPropertyNames: Set<string>;
    arrayPropertyName: string,
    filmArrayDetail: Array<any>;
    changeFilm(episode_id: string): void;
    changeArrayPropertyName(arrayPropertyName: string): void;
}

export class FilmStore implements IFilmStore {

    @observable public films: Array<any> = [];
    @observable public film: any = {};

    @observable public filmArrayDetail: any = [];

    public arrayPropertyName: string = "characters";

    public schema: any = {};

    public stringPropertyNames: Set<string> = new Set();
    public arrayPropertyNames: Set<string> = new Set();

    constructor() {
        this.films = require("../data/films.json").results;
        this.schema = require("../data/filmsSchema.json");


        for (const prop in this.schema.properties) {
            if (this.schema.properties[prop].type === "string")
                this.stringPropertyNames.add(prop);
            if (this.schema.properties[prop].type === "array")
                this.arrayPropertyNames.add(prop);
        }
    }

    @action.bound
    public changeArrayPropertyName(arrayPropertyName: string = this.arrayPropertyName) {
        this.arrayPropertyName = arrayPropertyName;
        this.filmArrayDetail = this.getDynamicFromArray(arrayPropertyName, this.film[arrayPropertyName]);
    }

    @action.bound
    public changeFilm(episode_id: string) {
        this.film = this.films.filter(x => x.episode_id == episode_id)[0];
        this.changeArrayPropertyName();
    }

    public getDynamicFromArray(arrayPropertyName: string, urls: Array<String>) {
        if (arrayPropertyName == "characters") {
            arrayPropertyName = "people";
        }
        const response = require("../data/" + arrayPropertyName + ".json").results;
        if (!response)
            return null;
        let result = [];
        for (const url of urls) {
            for (let obj of response) {
                if (obj["url"] === url) {
                    result.push(obj);
                    break;
                }
            }
        }
        return result;
    }
}

