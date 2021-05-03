import React, { useState, useRef, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const [friends, setFriend] = useState([]);
    const [groups, setGroup] = useState([]);
    const savedGroups = JSON.parse(localStorage.getItem('groups'));

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
            
            
            {props.user ?
            <ul>
                
            
           
                <li><Profile user={props.user} /></li>

                <div>
                    <li><a onClick={() => setToggle(!toggle)}><h5>Friends +</h5></a></li>
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
                        if (savedGroups) {
                            setGroup([])
                            savedGroups.map((group) => {
                                setGroup(prev => [...prev,group]);
                            });
                        }
                        setToggle2(!toggle2);
                        setToggle3(false);
                    }
                    }><h5>Groups +</h5></a>{toggle2 && (<><Button className='edit' onClick={() => {
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
                                                }}>Delete</button>
                                            )}

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                    <li onClick={handleShow}> <h5>About Meet Me</h5> </li>
                {show && (
                   <Modal show={show} onHide={handleClose} animation={false}>
                   <Modal.Header closeButton>
                     <Modal.Title>About Meet Me</Modal.Title>
                   </Modal.Header>
                   <Modal.Body><p>Meet Me was created by Alex Hammer, Ari Khaytser, Luis Cordova, Santiago Darré, 
                       and Maggie Pierce for their Agile Development class. Meet Me is intended for people who want to find a meeting point for them
                       and their friends or colleagues. </p>
                    

                       <p>To use Meet Me, enter in at least two starting locations, select any filter you want, and click search. Meet me will calculate 
                       the center point of the entered locations and return results nearby. If you wish to save groups or commonly used locations, you can do so after
                       creating an account. You don't need an account to access Meet Me's basic functionality.</p>
                       
                       <p>For more information, <a href="https://github.com/agile-dev-assignments/project-setup-team-wilmington-circuit" target="_blank">visit the project GitHub</a>.</p>
                       </Modal.Body>
                   <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                       Close
                     </Button>
                   </Modal.Footer>
                 </Modal>
               
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
