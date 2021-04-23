import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import './SideDrawer.css'
import Profile from './Profile'
import getTestData from '../testData';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const SideDrawer = function (props) {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();

    const handleClickInside = () => setClickedOutside(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);

    const [friends, setFriend] = useState([]);
    const [groups, setGroup] = useState([]);
    const [locations, setLocation] = useState([]);
    const savedGroups = JSON.parse(localStorage.getItem('groups'));

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target) && (!document.getElementById('hamburger-btn').contains(e.target))) {
            setClickedOutside(true);
            props.setShow(false);
            setToggle(false);
            setToggle2(false);
            setToggle3(false);
            setToggle4(false);
        }
    };

    useEffect(()=>{
        if (savedGroups) {
            savedGroups.map((group) => {
                setGroup(prev => [...prev,group]);
            });
        }
    }, [])
  
    const handleSubmit = e => {
        e.preventDefault();
        locations.push({vicinity: e.target.location.value})
    }


    useEffect(() => {
        getTestData.getFriends_mock().then(res => {
            setFriend(res);
        }
        )
    }, []);

    useEffect(() => {
        getTestData.getGroups(props.id_token).then(res => {
            setGroup(res);
        }
        ).catch(e => {
            console.log('Error getting groups: ' + e)
        });
    }, [props.id_token]);

    useEffect(() => {
        getMockData.getResults_mock().then(res => {
            setLocation(res);
        }
        );
    }, []);

   
    return (
        <nav className={drawerClasses} ref={myRef} onClick={handleClickInside}>
            {props.user ?
            <ul>
                <li><Profile user={props.user} /></li>
                
                <div>
                    <li><a onClick={() => setToggle4(!toggle4)}>Locations +</a></li>
                    {toggle4 && (
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="location"></input>
                                <input type="submit" value="Add"></input>
                            </form>
                            <ul>
                                {locations.map((location) => {
                                    return (
                                        <li className="item">{location.vicinity}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>

                <div>
                    <li><a onClick={() => setToggle(!toggle)}>Friends +</a></li>
                    {toggle && (
                        <div>
                            <ul>
                                {friends.map((friend) => {
                                    return (
                                        <li className="item">{friend.first_name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>

                <div>
                    <li><a onClick={() => {
                        setToggle2(!toggle2);
                        setToggle3(false);
                    }
                    }>Groups +</a>{toggle2 && (<><Button className='edit' onClick={() => {
                        setToggle3(!toggle3);
                        setToggle2(true);
                    }}>{toggle3 ? 'Done' : 'Edit'}</Button>
                    <p id="group-select-guide">Click a group to automatically set locations in the map</p>
                    </>
                    )}
                    
                    </li>
                    {toggle2 && (
                        <div>
                            <ul>
                                {groups.map((group) => {
                                    console.log(group)
                                    return (
                                        <li className="item">
                                            <a onClick={()=>{
                                                if(group.origins){
                                                    props.onGroupSelect(group.origins)
                                                }
                                            }}>{group.group_name}</a>
                                            {toggle3 && (
                                                <button type='button' className='btn btn-danger float-right' onClick={() => {
                                                    groups.splice(groups.indexOf(group), 1)
                                                    setGroup([...groups]);
                                                    localStorage.setItem('groups', JSON.stringify(groups))
                                                    getTestData.deleteGroup(group.group_name, props.id_token).catch(e => {
                                                        console.log('Error deleting group; ' + e);
                                                    })
                                                }}>Delete</button>
                                            )}

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </ul>
            :
            <div class="logged-out-text">
                <h3>Log in to save locations, friends, and more!</h3>
            </div>
            }
        </nav>
    )
}

export default SideDrawer;
