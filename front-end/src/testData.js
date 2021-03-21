import axios from 'axios';

const getTestClassIDs = async (len) => {
    const res = await axios.get('https://schedge.a1liu.com/2021/spring/UA/CSCI');
    let testData = res.data;
    if(len){
        const startIndex = Math.floor(Math.random()*(testData.length - len)) 
        testData = testData.slice(startIndex, startIndex+len);
    }
    return testData.map(classData => classData.sections[Math.floor(Math.random() * (classData.sections.length))].registrationNumber);
} 

const getClassInfo = async (id) =>{
    const res = await axios.get(`https://schedge.a1liu.com/2021/spring/${id}`)
    return res.data
}

const getTestCourses = async (len) => {
    const res = await axios.get('https://schedge.a1liu.com/current/sp/UA/CSCI?full=true');
    let testData = res.data;
    if (!len) len = 20;
    const startIndex = Math.floor(Math.random()*(testData.length - len)) 
    testData = testData.slice(startIndex, startIndex+len); 
    return testData 

}

export default {getTestClassIDs, getClassInfo, getTestCourses }
export {getTestClassIDs, getClassInfo, getTestCourses }