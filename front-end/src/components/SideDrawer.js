import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import './SideDrawer.css'
import Profile from './Profile'
import getMockData from '../testData';

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

    const [friends, setFriend] = useState([]);
    const [groups, setGroup] = useState([]);

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target) && (!document.getElementById('hamburger-btn').contains(e.target))) {
            setClickedOutside(true);
            props.setShow(false);
            setToggle(false);
            setToggle2(false);
            setToggle3(false);
        }
    };

    useEffect(() => {
        getMockData.getFriends_mock().then(res => {
            setFriend(res);
        }
        )
    }, []);

    useEffect(() => {
        getMockData.getGroups_mock().then(res => {
            setGroup(res);
        }
        );
    }, []);

   
    return (
        <nav className={drawerClasses} ref={myRef} onClick={handleClickInside}>
            <ul>
                <li><Profile user={props.user} /></li>

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
                        const savedGroups = JSON.parse(sessionStorage.getItem('groups'));
                        if (savedGroups) {
                            savedGroups.map((group) => {
                                groups.push(group);
                            });
                            sessionStorage.removeItem('groups');
                        }
                        setToggle2(!toggle2);
                        setToggle3(false);
                    }
                    }>Groups +</a>{toggle2 && (<Button className='edit' onClick={() => {
                        setToggle3(!toggle3);
                        setToggle2(true);
                    }}>{toggle3 ? 'Done' : 'Edit'}</Button>)}
                    </li>
                    {toggle2 && (
                        <div>
                            <ul>
                                {groups.map((group) => {
                                    return (
                                        <li className="item">
                                            {group.group_name}
                                            {toggle3 && (
                                                <button type='button' class='btn btn-danger float-right' onClick={() => {
                                                    groups.splice(groups.indexOf(group), 1)
                                                    setGroup([...groups]);
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
        </nav>
    )
}

export default SideDrawer;
