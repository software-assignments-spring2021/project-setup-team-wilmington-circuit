import axios from 'axios';

const getTestClassIDs = async (len) => {
    const res = await axios.get('https://schedge.a1liu.com/2021/spring/UA/CSCI');
    let testData = res.data;
    if(len){
        const startIndex = Math.floor(Math.random()*(testData.length - len)) 
        testData = testData.slice(startIndex, startIndex+len);
    }
    return testData.map(classData => classData.sections[0].registrationNumber);
} 

const getClassInfo = async (id) =>{
    const res = await axios.get(`https://schedge.a1liu.com/2021/spring/${id}`)
    return res.data
}

export default {getTestClassIDs, getClassInfo }
export {getTestClassIDs, getClassInfo }