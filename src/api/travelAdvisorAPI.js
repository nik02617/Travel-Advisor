import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (type, sw, ne) => {
    try{
        const {data: {data}} = await axios.get(URL, {
                params: {
                    bl_latitude: sw.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                    tr_latitude: ne.lat,
                },
                headers: {
                  'X-RapidAPI-Key': 'a84efc987amsh8255c2cb456eb37p14788fjsn184b2ee06826',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            });

        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://ai-weather-by-meteosource.p.rapidapi.com/current', {
            params: {
                lat: 'lat',
                lon: 'lng',
              },
              headers: {
                'X-RapidAPI-Key': 'a84efc987amsh8255c2cb456eb37p14788fjsn184b2ee06826',
                'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
              }
            });
            return data;           
        }
        catch (error) {
            console.log(error);
        }
}
  
 