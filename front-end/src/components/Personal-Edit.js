import React, {useState, useEffect } from 'react';
import '../main.css';
import avatar from '../images/profile-pic.png';
import getTestData from '../testData'
import "./styles/Personal.css";

const PersonalEdit = (props) => {
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
                    <form action="/personal">
                        <div class="row">
                            <div class="col-lg-2"></div>
            
                            {/* Profile Pic */}
                            <div class="col-lg-2">
                                <img align='left' src={avatar} alt="NYU Logo" height="200px"></img>
                            </div>

                            {/* Basic Personal Info*/}
                            <div class="col-lg-2">
                                <input type="text" id="first_name" value={personData.first_name}></input>
                                <input type="text" id="last_name" value={personData.last_name}></input>
                                <input type="text" id="pronouns" value="He/Him"></input>
                                <p>NID: N{personData.NID}</p>
                                <input type="text" id="DOB" value={personData.dob}></input>
                            </div>
            
                            {/* Done Button, link back to /personal*/}
                            <div className = "editButton" class='col-lg-4'>
                                <a href='/personal'><ins>Done</ins></a>
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
                                        <input type="text" id="address_type" value={address.type}></input><br></br>
                                        <input type="text" id="address_street_address" value={address.street_address}></input><br></br>
                                        <input type="text" id="address_city" value={address.city}></input>
                                        <input type="text" id="address_state" value={address.state}></input><br></br>
                                        <input type="text" id="address_postal_code" value={address.postal_code}></input>
                                        <input type="text" id="address_country" value={address.country}></input>
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
                                        <input type="text" id="phone_number_type" value={number.type}></input>
                                        <input type="text" id="phone_number_number" value={number.number}></input>
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
                                        <input type="text" id="email_type" value={email.type}></input>
                                        <input type="text" id="email_email" value={email.email}></input>
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
                                        <input type="text" id="contact_first_name" value={contact.first_name}></input>
                                        <input type="text" id="contact_last_name" value={contact.last_name}></input>
                                        <input type="text" id="contact_relationship" value={contact.relationship}></input>
                                        <input type="text" id="contact_phone_number" value={contact.phone_number}></input>
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
                    </form>
                    )}
                </div>
            
        )
    }

export default PersonalEdit;
