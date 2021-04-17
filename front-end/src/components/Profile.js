import React, {useState, useEffect } from 'react';
import getTestData from '../testData';
import defaultAvatar from '../img/default-user.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Profile = (props) => {
const [profileData, setData] = useState([]);

useEffect(()=>{
    console.log(props.user)
    if (props.user) {
        setData(props.user);
    }
    else {
        setData([{'name': 'Your Profile', 'imageUrl': defaultAvatar}][0]);
    }   
}, [props.user])

return(
    (false && !props) ? (
        <div>Loading</div>
    ) :(
<>
    <div class="container m-5">
        <div class="row profile" id="profile">
            <div >
            {/*<h5 class="font-weight-bold">Close</h5>*/}
            <div class="profile-sidebar">
                    <div class="profile-pic">
                        <img src={profileData.imageUrl} class="img-responsive" alt=""/>
                    </div>
                    <div class="profile-name">
                        <div class="profile-usertitle-name">
                            <h4>{profileData.name} </h4>
                        </div>
                        <div class="profile-saved-locations">
                            <h5>My Saved Locations:</h5>
                            <p>{profileData.vicinity}</p>
                            <p>{profileData.vicinity}</p>
                            <button type="button" class="btn btn-link mb-2">+ Add Location</button>
                        </div>
                    </div>
                    <button type="button" class="btn btn-danger ">Delete Account</button>                  
                </div>
            
            </div>

        </div>
        <hr class="m-3"></hr>
    </div>
</>
)
)
}

export default Profile;
