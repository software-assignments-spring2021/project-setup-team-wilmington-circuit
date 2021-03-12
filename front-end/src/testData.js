import axios from 'axios';

const getTestData = async (len) => {
    const res = await axios.get('https://schedge.a1liu.com/2021/spring/UA/CSCI');
    const testData = res.data;
    if(len){
        const startIndex = Math.floor(Math.random()*(testData.length - len)) 
        return testData.slice(startIndex, startIndex+len);
    }
    else return testData;
}




export default getTestData;