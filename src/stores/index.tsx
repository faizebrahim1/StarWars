import { FilmStore, IFilmStore } from "./filmStores";

export const stores = {
    filmStore:  new FilmStore()
}

export interface AppProps {
    filmStore?: IFilmStore
}

export default AppProps;