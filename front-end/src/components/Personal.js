import React from 'react';
import '../main.css';
import avatar from '../images/profile-pic.png';


export default class PersonalInfo extends React.Component{

    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = 'https://my.api.mockaroo.com/mock_personal_data.json?key=202d5e00'
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({person: data, loading: false})
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
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
                                <p align='left' style={{'font-size':'30px'}}>
                                    {this.state.person.first_name} {this.state.person.last_name}<br></br>
                                    He/Him<br></br>
                                    NID: N{this.state.person.NID}<br></br>
                                    DOB: {this.state.person.dob}
                                </p>
                            </div>
            
                            {/* Link to edit screen*/}
                            <div class='col-lg-4'>
                                <a href='/personal#edit' style={{'float': 'right', 'font-size':'15px'}}><ins>Edit</ins></a>
                            </div>
                        </div> <br></br>
            
                        {/* Addresses header */}
                        <div class="row">
                            <div class="col-lg-2"></div>
                            <div class="col-lg-8">
                                <h2 align='left' style={{'font-size':'25px'}}>
                                    Addresses
                                </h2>
                            </div>
                        </div>
            
                        {/* Addresses row*/}
                        <div class="row">
                            <div class="col-lg-2"></div>
                            {this.state.person.addresses.map((address) =>{
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
                                <h2 align='left' style={{'font-size':'25px'}}>
                                    Phone Numbers
                                </h2>
                            </div>
                        </div>
                        
                        {/* Phone Numbers row */}
                        <div class="row">
                            <div class="col-lg-2"></div>
                            {this.state.person.phone_numbers.map((number) =>{
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
                                <h2 align='left' style={{'font-size':'25px'}}>
                                    Email Addresses
                                </h2>
                            </div>
                        </div>
            
                        {/* Email Addresses row */}
                        <div class="row">
                            <div class="col-lg-2"></div>
                            {this.state.person.emails.map((email) =>{
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
                                <h2 align='left' style={{'font-size':'25px'}}>
                                    Emergency Contact
                                </h2>
                            </div>
                        </div>
            
                        {/* Emergency Contact row */}
                        <div class="row">
                            <div class="col-lg-2"></div>
                            {this.state.person.emergency_contacts.map((contact) =>{
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
                                <p align='left'>{this.state.person.citizenship_status}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            
        )
    }
}
