/**
 * Generates a Google Maps URL with origin/dest filled out
 *  
 * origin and dest can be:
 *      a string address, ex: '60 Washington Square S, New York, NY 10012' 
 *      a location's name, ex: 'Kimmel Center for University Life'
 *      or a comma-separated lat,lng coordinates, ex: '40.73000975147148, -73.99787041744378'
 * 
 * origin_place_id and dest_place_id are optional parameters, use this if possible, as it's the best way to guarantee you find the establishment you want. 
 * It's a unique identifer google uses for each establishment. 
 *                  Ex: 'ChIJn2TxqpFZwokRuM-MF7zWH44'
 * 
 * travelmode is an optional paramter, with options [driving, walking, bicycling, transit]. 
 * If none is specified, or its invalid, it shows one or more of the most relevant modes for the specified route and/or user preferences.
 */

const generateGoogleMapsURL = (origin, dest, origin_place_id = null, dest_place_id = null, travelmode=null) => {
    let parameters = '';
    parameters += 'origin=' + encodeURIComponent(origin) + '&';
    if(origin_place_id){
        parameters += 'origin_place_id=' + encodeURIComponent(origin_place_id) + '&';
    }
    parameters += 'destination=' + encodeURIComponent(dest) + '&';
    if(dest_place_id){
        parameters += 'destination_place_id=' + encodeURIComponent(dest_place_id) + '&';
    }
    if(travelmode){
        parameters += 'travelmode=' + encodeURIComponent(travelmode);
    }

    parameters = parameters.replace(/%20/g, '+')
    return `https://www.google.com/maps/dir/?api=1&${parameters}`
}

module.exports = generateGoogleMapsURL;