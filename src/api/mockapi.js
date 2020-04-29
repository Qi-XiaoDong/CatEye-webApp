import { mockInstance } from '../plagin/axios.js';


export default {
    getCinemaList () {
        return mockInstance.get('cinema.json');
    },
    getStar() {
        return mockInstance.get('star.json');
    },
    getHotsPots () {
        return mockInstance.get('hotspots.json');
    },
    getwillmovie () {
        return mockInstance.get('willmovie.json');
    },
    getwillmovielist () {
        return mockInstance.get('willmovielist.json');
    }
}