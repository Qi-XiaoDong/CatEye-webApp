import instance from '../plagin/axios';

export default {
    getCityList () {
        return instance.get('/api/meituan/city/cityList.json');
    },
    getHotCityList () {
        return instance.get('/api/meituan/city/hot.json');
    },
    getRecents () {
        return instance.get('/api/meituan/city/recents.json');
    }
}