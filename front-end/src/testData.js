import axios from 'axios';

//Mock nearby search from Google's Places API
//Should give similar results to what Google's API would
const getResults_mock = async () => {
    const res = await axios.get('https://my.api.mockaroo.com/mock_nearby_search.json?key=202d5e00');
    const data = res.data;
    console.log(data);
    return data;
}
export default {getResults_mock }