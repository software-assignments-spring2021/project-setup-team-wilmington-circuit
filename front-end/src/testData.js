import axios from 'axios';

//Mock nearby search from Google's Places API
//Should give similar results to what Google's API would
const getResults_mock = async () => {
    let res;
    try {
        res = await axios.get('https://my.api.mockaroo.com/mock_nearby_search.json?key=202d5e00');
    } catch (err){
        console.log('mockaroo request limit reached for: RESULTS_MOCK. Using hard-coded data instead');
        res = {data: [{"geometry":[{"location":[{"lat":37.4056028,"lng":139.7874841}]}],"icon":"http://dummyimage.com/107x100.png/cc0000/ffffff","name":"Tazz","photos":[{"height":469,"html_attributions":[],"photo_reference":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFESURBVBgZBcG9S9RxAAfg565DI51uCBocpGhoqM1VaAjByXAImvoXDtr6D4JAaG2oyXtpKJGEltYcGntDErEhEI3kvDP7fb+fnqcVAAAAQAeg39XLqsVcyl62bTw8AkTE5tqb8WHOU1MzzUFej1+uR4SIzeWPOcu/TPI7JznNecZ5ngcrEa3YnJ/7fHehY6Kqqiq+eedgP7cH4zZ6dxZmnamKoiqGnpjTXcxj2tSVq/4qGkXRGOlrfDcvK7TJ0qypoiiKob5G9cWsukSHoCiqamQgiiqKoE12p2YUxVBf0aiK6ybs0qbu/HJZMTRQFEWjuOFU3aFNnn06vLCnr1EURbHq1PF+ntIKXiz/+fDTFV/90HHNTWdOTO69fU8rYH0tr7rzc2YUF8aOx3m0NYJWAPe76VmttzK1bzsbW0dAKwAAAID/tYu/URIDsoEAAAAASUVORK5CYII=","width":445}],"place_id":"1M5REYc2kbHvkyM5nqCjWWyagg8bCbVdKy","reference":"13LBnFUYNWw4qtDcZskAZMFKZ2KPanDyGb","types":[],"vicinity":"50 Lotheville Junction","rating":3},{"geometry":[{"location":[{"lat":-8.1401564,"lng":117.7901088}]}],"icon":"http://dummyimage.com/126x100.png/5fa2dd/ffffff","name":"Gigabox","photos":[{"height":346,"html_attributions":[],"photo_reference":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALcSURBVBgZBcFNiFR1AADw338+dhl3ZmfdXbf1a4NCwUSQOiREBVJhpmRoByGQbp26FJ66d4gI6iIFJRYRdQjCSiglsDIxNEgsK61tcc3WrWbmzZs3b95Hv1/Ye+jx0zNzM7ur1SoACAAAggAIyPLC7b9vn6nNzM3sfvv1d4RKkBUjAARBqRRAPIoQlGVFWZRKuRePvrC7Vq1W5TJh9L7+F5esPR1bObpgotV09eq3fuq/aXmlo9WadGu1o1qr6/YTR/aW6rWqCkCns6qzbUw3isSnroiim6IoEoaXDAc9g7gnHUQGg0iW9IVQIKgFQLu9jnJkzfPTvHzR+MFZc+s3aIyuGWRbtKZaxqoVtfqYKE6EMERQAYJOpyOKev6by3XXZgYf/UZeKOOzRsNI3OsbDWPDpC8dxkIoQQ2g3Z6jHJlqT+o8d4+1x1ZlD683Pju0kK6qNzdbM15VH6vrxSm6BCoEkCRD/SjW6Xb0JnL/biU5cV2ZJyrpZ07+uN+X1/fpR/8o0r4AgkoANBpTmpMz2u15reY69Wd2aizWNPI7bZi5YZinNs1uc/LaAdvn31KtFAJqAdDr9EXREH3f3/jLqSsXlI+k0u9+kWaZDdNbbZu/Xy/pe+mr97z21H4BNSEImJya182Gfohjf6R1WZF6dPsReVnIi1yhtNxZsmPTA6J04NkP9tgRnlaDsiydX/rdpRs/azZbkiSRZKm8LCyu/mpUZLJiZJSPdIc9Ozc/KBrFzg7eVQuIs76VfGR8rGmi0ZYMU0mWyPLMHZMLsiKXl4WbnT9NN+ddXPrG5eUr7u0eUCMIoaJl0iDExvOGNaEpzhLHz70iLVJJlrp7drtddz3mwuLXzi+e8+rBEz4+9qlaluXyPLdxeqeNMwQQ7NryJAghgMPH7hMqDZeXL3vj8Ic2Ti3I8k+EfYee+Hzd3Oyear2GIAACAOBM67i0LD3UP2RCS5blVm6tnPofTwlmPORvTlwAAAAASUVORK5CYII=","width":330}],"place_id":"1Cct4FLRHLsnpWbACLuoZvrRgieTzj2EML","reference":"1PPD1zbGceDfB5itfiRZfjP7RdhzZ1nHqn","types":[],"vicinity":"36682 Kim Circle","rating":1},{"geometry":[{"location":[{"lat":17.1939768,"lng":120.4485002}]}],"icon":"http://dummyimage.com/116x100.png/dddddd/000000","name":"Kazu","photos":[{"height":342,"html_attributions":[],"photo_reference":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVDjLpZB/SFNRFMftj5IiW9saIQjGQrBiUagEFWLDydrUhAWzNNuWTZ1oKIUzf4RlzZY6sWyrLZXhfFszQ1eac2SQkYWW0yH0l1AWITSw1IXK+/beK0RBptCFD+fcyz2fc+4NARDyP6x5qInbVVEn5sw2SHdCL2ahQsiey4jhVW9IkBPDKbmfyibN6Rw8oLgrY0MnYaEofgcpPcitWldglLLQQhXqqSKdlIaNm8k8XDnBQWYMa2ZdgS5+O14YyzHVq8eQpQiFCTwUJ4YjX8SH+hh7wapNCQ0qMGdF/gh8/4SZN0Z87a+H13ENk89vwz85AiJ378xYq2ZLUEFjxv5B//t2TA87MT9KUNiZ3D9C4KFKMBz0Cbults1RxzVWoiAWv4ctCPieMsx/tKHzciwE8blPeCLz1jUFPAkRyhW35UWIPfB9noWjLBX2shQGOn898QsRSS/BET66xBWatq0ScE86NoUlORSRyYOYmJpH2xRQ7APy3gEXXgHnewCtsxPFRgXU9acgvyEMiEsOVS4LDsia0xJP6+EcWoLJCxS8JZE7QCK7j0RWFwmlmUCVU4lnviaMfnPD0K+B3CDAkfzwWkbwoTx6adqlxb1mFxS9VFeqo7KbxLkOEmdsVKyRoGu8AV0TjaBXreciDJ4cWhBgBN6KfaTffR3p6hZU988howM4aycht5KQWUgklx1Gj8+Clat7rIkW/P2IcWtB6Uhp1KJSeWsxTjEAJTW6agVHC/m441ZB51Ywxbo+xeoJaCbteWGVV6u5e9JcpsiE1i980eM5flLHAj/RuSCQZy7KaqNR585mOtOR3i//wUagLtdQ/KTH/hdr6PM/RhGjA91Gi1AAAAAASUVORK5CYII=","width":451}],"place_id":"1AhTFmczNXjfNkmR5X7xwhfoHJk44bGDbw","reference":"1Fnx85EoEzKsCZ5VXCA5cz8PrDnfYvCGKE","types":[],"vicinity":"0307 Londonderry Point","rating":7},{"geometry":[{"location":[{"lat":49.5255788,"lng":18.3904377}]}],"icon":"http://dummyimage.com/215x100.png/5fa2dd/ffffff","name":"Meetz","photos":[{"height":402,"html_attributions":[],"photo_reference":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIgSURBVDjLdVI9a1RBFD3z9r3sVwrdWCwYUkSLWKaQWOwf0EpIKSIi6QSxWyxSrE3+gUVEQREsU1ooiIRImhSCCImNIcj6kcVNNm/fzP2yeJu46yYXDpdh7jlzOHOdmeG47r+7azeuXMdWZwNiClEZQMHKuHqhgedrL/Dm4Xt3zIkxVEwMtXxYVMCqg/4PIfAw5T+BwDADSGRIJIeq5neeRgSi4QMFRhEVFKMSSBhBCEEIJIxioYyyTYICne2AArc62x+X72Q/MXXQRplzu2kUoV2ZwttvH0CBW2cKvLJfe/3v+7147vYkTc/gSCIYZ3CcYrq/i1s7r3tLs25vmOOOf8FeXlsA3FqYf1T3oQhN/4CzIxhlMA6AK6BYcqhsP2mD7Gby4PPmaAbCTZ67V/dchqRdSMiJRgGapeDub6SdLrKZxboeSnMsRFNuUHUW2j/MiRwAJih5GAco9cEH++hzBfDSGM9AraZWgFEG5QATgnJOljAQ8RnEM1Rc7ZRvNJgIlOnE+glk0DnAxMP0lD0wtY6jHqAyap19ngN5AAqwBwidcQdC63H3C1ycQCWMWM9fFkRJGSX/AxywPu6gryvx1rN24lJESQlQhQnBiAAzFMpVFKsJ4k8bbdNoZWwPACA8vrwERivML9aziYsQVphPAUoxcbSLeGujreyWz63urJ4qAABZ89KC9rgJ0oaaq0EAM9dRxrpOJCvnn37dHJ7/C8hDreOQ71qxAAAAAElFTkSuQmCC","width":340}],"place_id":"1KjuY8nb7TCVRrDeXkvKnR2txej5nFVRUB","reference":"141ajvACiJVKRHUMX2axuX1SxdnM2192sJ","types":[],"vicinity":"764 Mccormick Parkway","rating":2},{"geometry":[{"location":[{"lat":56.8802017,"lng":52.2966875}]}],"icon":"http://dummyimage.com/158x100.png/dddddd/000000","name":"Browsebug","photos":[{"height":367,"html_attributions":[],"photo_reference":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKoSURBVDjLdZPBTxNREMb5B7h41LuJB+8mJiaGxIheOEhCJMiBaAjRiwdR9KAkBEFiNDYtYFQMEiIBDIQgYGlBS0tLwW1LgUILtBbL0m67bWmXXdh+zisFCsFNfvs2OzPfm/dmpgBAQT5ljSOXCQ0xR4SJGOEhdMx20j8/sJDQEsrorB/zgTjWIjI2krsICtv4MRcAs+V8Co8J5IJHuowe7KkZBONAvy2BPmcC04IMiZxUgtmYD/M9EDkQ0DKDqCD7JMm7c1JEhzkKh6giQ/9oQVzdt+dEtFkB+rhEqH5BQaclguXIvtPwrATdeATebWQz2KRXklaZkckwAZXFZncfo/MNO+N4PxlGmzEMVxBY2QQsy0k6zg6EHYAngfCGHktdZVgZaAD34Ro0rx+OMwHO4Rfx2bRFAjx0EzwG5+Lo+eVlu4QYvSYfhOAAQoZaiM4hSmUDMWcvjC0lu0wg4g6maGcebRTcTiJWX5IF/yXOMZp09dGo+wXkP4MITbxC2tWPvXUTuI/VmUMBnYGHVr8JjT4E2+qRgKWvqFxwPYOaNiHtuw/B9gCLnVVwdlSjpqk7lj0Ctx6D1hDKBn+1i3SRGbC0n79rjkZdT6BKFqS8lZAC5Ugs1GHlUwl+cxzbhDu8RPOqBAcPBNKALwFwdjrzTG0u+A4k/23E55/C03oTFjuHsf3G0h6WUaHS8FSjpRhgNg9hYfQRpf0T0loVdgIVECkTj64Y36a88GwpR2XMb6QwlUs/2g33cB0c398gaC1Faq0cAvcY7rYS9Js8sPmV4410spV7moqAxDqW2m/BUHcWU63FMDZfh9HmxiKvnN7K+cNUf+8iZIsGsvUtrA1X0VtzHtMzdrAB++8w5VN65YzcWHlB1b+8kelqqVDuNnyJ5kZbc9o4/wOexAeGRUz8AAAAAABJRU5ErkJggg==","width":372}],"place_id":"1P3pcH5R4jPg6zrsmpz2bvrg3ZoTPJicre","reference":"1HfgtT5DUQe7dVYqq1AaFwJu8EcJP7Eqhq","types":[],"vicinity":"37369 Village Green Hill","rating":2}]
        }
    }
    
    const data = res.data;
    //console.log(data);
    return data;
}

const getFriends_mock = async () => {
    let res;
    try {
        res = await axios.get('https://my.api.mockaroo.com/friends.json?key=b3baae00');
    } catch (err){
        console.log('mockaroo request limit reached for: FRIENDS_MOCK. Using hard-coded data instead');
        res = {data: [{first_name: 'first_name1'}, {first_name: 'first_name2'}]};
    }
    const data = res.data;
    //console.log(data);
    return data;
}

const getGroups_mock = async () => {
    let res;
    try{
        res = await axios.get('https://my.api.mockaroo.com/groups.json?key=b3baae00');
    }
    catch(err) {
        console.log('mockaroo request limit reached for GROUPS_MOCK. Using hard-coded data instead');
        res = {data: [{group_name: 'testgroupname'}, {group_name: 'test group name 2'}]};
    }
    const data = res.data;
    //console.log(data);
    return data;
}

const getPlaceLocation = async (query) => {
    const res = await axios.get('/api/geocode?q='+query);
    const data = res.data;
    //console.log(data);
    return data;
}

const getPlaceImage = async (photoreference) => {
    const res = await axios.get('/api/photo?photoreference='+photoreference);
    const data = res.data;
    //console.log(data);
    return data;
}

const getPlaceAddress = (lat, lng) => {
    const res = axios.post('/api/reverse-geocode');
    const data = res;
    console.log('data from get place address:' + data);
    return data;
}

const search = async (origins, search) => {
    const res = await axios.post('/api/search',
        {
            origins: origins,
            search: search
        }
    )
    const data = res.data;
    //console.log(data);
    return data;
}

const uploadSharelink = async(origins, searchData, places, averageDuration, link_id) => {
    const res = await axios.post('/sharelink/create', {
        origins: origins,
        searchData: searchData,
        places: places, 
        averageDuration: averageDuration,
        link_id: link_id
    }
        
    )
    const sharelink = res.data;
    console.log(sharelink)
    return sharelink;
}

const getSharelink = async(link_id) => {
    const res = await axios.get('/sharelink/get?link_id='+link_id);
    const data = res.data;
    console.log(data)
    return data;
}

const getGroups = async(id_token) => {
    const res = await axios.get('/group/get', {headers: {
        'Authorization': id_token
    }})
    const data = res.data;
    console.log(data);
    return data;
}

const deleteGroup = async(_id, id_token) => {
    const res = await axios.delete('group/delete?q=' + _id, {headers: {
        'Authorization': id_token
    }})
    const data = res.data;
    console.log(data);
}

const getLocations = async(id_token) => {
    const res = await axios.get('/location/get', {headers: {
        'Authorization': id_token
    }})
    const data = res.data;
    console.log(data);
    return data;
}

const deleteLocation = async(_id, id_token) => {
    const res = await axios.delete('location/delete?q=' + _id, {headers: {
        'Authorization': id_token
    }})
    const data = res.data;
    console.log(data);
}

export default {getResults_mock, getPlaceLocation, getPlaceAddress, getFriends_mock, getPlaceImage, getGroups_mock, search, getSharelink, uploadSharelink, getGroups, deleteGroup, getLocations, deleteLocation}

