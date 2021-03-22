import React from 'react';
import '../main.css';
import avatar from '../images/profile-pic.png';
import "./styles/Personal.css";
const PersonalInfo = (props) => {
    //im assuming props will be where user information is obtained? so like props.userID, props.addresses etc.?
    // console.log(props);
    return (
        <div>
            <div class="row">
                <div class="col-lg-2"></div>

                {/* Profile Pic */}
                <div class="col-lg-2">
                    <img align='left' src={avatar} alt="NYU Logo" height="200px"></img>
                </div>

                {/* Basic Personal Info*/}
                <div class="col-lg-2">
                    <p className = "nameInfo">
                        John Smith<br></br>
                        He/Him<br></br>
                        NID: N123456789 <br></br>
                        DOB: 01/01/1991
                    </p>
                </div>

                {/* Link to edit screen*/}
                
                <div className = "editButton" class='col-lg-4'>
                    <a href='/personal#edit' ><ins>Edit</ins></a>
                </div>
                
            </div> <br></br>

            {/* Addresses header */}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <h2 className = "addressInfo">
                        Addresses
                    </h2>
                </div>
            </div>

            {/* Addresses row*/}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-4">
                    <p align='left'>
                        <b>Mailing</b><br></br>
                        123 Jane St<br></br>
                        New York, NY<br></br>
                        10014 USA
                    </p> 
                </div>
                <div class="col-lg-4">
                    <p align='left'>
                        <b>Permanent</b><br></br>
                        111 North Piney Rd<br></br>
                        Pierre, SD <br></br>
                        57501 USA
                    </p>
                </div>
            </div>

            {/* Phone Numbers Header */}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <h2 align='left' className = "phoneInfo">
                        Phone Numbers
                    </h2>
                </div>
            </div>
            
            {/* Phone Numbers row */}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-2">
                    <p align='left'>
                        <b>Mobile</b><br></br>
                        (123) 456-7890<br></br>
                    </p> 
                </div>
                <div class="col-lg-2">
                    <p align='left'>
                        <b>Local</b><br></br>
                        (098) 765-4321<br></br>
                    </p>
                </div>
                <div class="col-lg-2">
                    <p align='left'>
                        <b>NYU Emergency Alert</b><br></br>
                        (456) 321-0789
                    </p>
                </div>
            </div>

            {/* Email Addresses Header */}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <h2 className = "emailInfo">
                        Email Addresses
                    </h2>
                </div>
            </div>

            {/* Email Addresses row */}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-2">
                    <p align='left'>
                        <b>Personal</b><br></br>
                        XXX@XXX.XXX<br></br>
                    </p> 
                </div>
                <div class="col-lg-2">
                    <p align='left'>
                        <b>NYU Net ID</b><br></br>
                        XXX@XXX.XXX<br></br>
                    </p>
                </div>
            </div>

            {/* Emergency Contact Header */}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <h2 className = "contactInfo">
                        Emergency Contact
                    </h2>
                </div>
            </div>

            {/* Emergency Contact row */}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-2">
                    <p align='left'>
                        <b>James Smith - Father</b><br></br>
                        (XXX) XXX-XXXX<br></br>
                    </p> 
                </div>
            </div>

            {/* Citizenship header + status */}
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <h2 class = "citizenshipInfo">
                        Citizenship
                    </h2>
                    <p align='left'>US Citizen</p>
                </div>
            </div>
        </div>
    )
};

export default PersonalInfo;