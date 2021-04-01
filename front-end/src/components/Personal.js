import React, {useState, useEffect } from 'react';
import '../main.css';
import avatar from '../images/profile-pic.png';
import getTestData from '../testData'
import "./styles/Personal.css";

const PersonalInfo = (props) => {
    const [personData, setPersonData] = React.useState([]);
    useEffect(()=>{
        getTestData.getPersonalData().then(res => {
            setPersonData(res);
        }
        )
    }, [])
        return (
            <div>
                {!personData.first_name ? (
                    <div>loading...</div>
                ) : (
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
                                    {personData.first_name} {personData.last_name}<br></br>
                                    He/Him<br></br>
                                    NID: N{personData.NID}<br></br>
                                    DOB: {personData.dob}
                                </p>
                            </div>
            
                            {/* Link to edit screen*/}
                            <div className = "editButton" class='col-lg-4'>
                                <a href='/personal-edit'><ins>Edit</ins></a>
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
                            {personData.addresses.map((address) =>{
                                return (
                                    <div class="col-lg-4">
                                        <p align='left'>
                                            <b>{address.type}</b><br></br>
                                            {address.street_address}<br></br>
                                            {address.city}, {address.state}<br></br>
                                            {address.postal_code} {address.country}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
            
                        {/* Phone Numbers Header */}
                        <div class="row">
                            <div class="col-lg-2"></div>
                            <div class="col-lg-8">
                                <h2 className = "phoneInfo">
                                    Phone Numbers
                                </h2>
                            </div>
                        </div>
                        
                        {/* Phone Numbers row */}
                        <div class="row">
                            <div class="col-lg-2"></div>
                            {personData.phone_numbers.map((number) =>{
                                return (
                                    <div class="col-lg-2">
                                        <p align='left'>
                                            <b>{number.type}</b><br></br>
                                            {number.number}<br></br>
                                        </p>
                                    </div>
                                )
                            })}
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
                            {personData.emails.map((email) =>{
                                return (
                                    <div class="col-lg-2">
                                        <p align='left'>
                                            <b>{email.type}</b><br></br>
                                            {email.email}<br></br>
                                        </p>
                                    </div>
                                )
                            })}
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
                            {personData.emergency_contacts.map((contact) =>{
                                return (
                                    <div class="col-lg-2">
                                        <p align='left'>
                                            <b>{contact.first_name} {contact.last_name} - {contact.relationship}</b><br></br>
                                            {contact.phone_number}<br></br>
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
            
                        {/* Citizenship header + status */}
                        <div class="row">
                            <div class="col-lg-2"></div>
                            <div class="col-lg-8">
                                <h2 align='left' style={{'font-size':'25px'}}>
                                    Citizenship
                                </h2>
                                <p align='left'>{personData.citizenship_status}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            
        )
    }

export default PersonalInfo;
