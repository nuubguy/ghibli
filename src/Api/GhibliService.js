import axios from 'axios';


axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default class GhibliService {
    constructor() {
        this.baseUrl = "https://ghibliapi.herokuapp.com/films";
        this.baseUrl2 = "https://ghibliapi.herokuapp.com/people";
        this.baseUrl3 = "https://ghibliapi.herokuapp.com/species";
        this.baseUrl4 = "https://ghibliapi.herokuapp.com/locations";
        this.baseUrl5 = "https://ghibliapi.herokuapp.com/vehicles";
    }

    async getFilms() {
        const baseUrl = this.baseUrl;
        try {
            const result = await axios.get(baseUrl);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getFilmById(userId) {
        const baseUrl = this.baseUrl;
        try {
            const result = await axios.get(baseUrl+`/${userId}`);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getPeoples() {
        try {
            const result = await axios.get(this.baseUrl2);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getSpecies() {
        try {
            const result = await axios.get(this.baseUrl3);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getLocations() {
        try {
            const result = await axios.get(this.baseUrl4);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getVehicles() {
        try {
            const result = await axios.get(this.baseUrl5);
            return result;
        } catch (error) {
            throw error;
        }
    }
}
