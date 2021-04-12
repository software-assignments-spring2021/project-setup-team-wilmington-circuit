import React, {useState, useEffect} from 'react'
import './SideDrawer.css'
import Profile from './Profile'
import getMockData from '../testData';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }


    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)

    const [friends, setFriend] = useState([])
    const [groups, setGroup] = useState([])

    useEffect(()=>{
        getMockData.getFriends_mock().then(res => {
            setFriend(res);
        }
        )
    }, [])

    useEffect(()=>{
        getMockData.getGroups_mock().then(res => {
            setGroup(res);
            
        }
        );
    }, [])

    /*
    useEffect(async () => {
        const response = await fetch('https://my.api.mockaroo.com/friends.json?key=b3baae00')
        const data = await response.json()
        console.log(data)
        const item = data
        setFriend(item)
    }, []) */


    return (
        <nav className={drawerClasses}>
            <ul>
                <li><ProfilePage /></li>

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
                        console.log('clicked');
                        const savedGroups = JSON.parse(sessionStorage.getItem('groups'));
                        
                        //This is kinda scuffed, but hard coding this in for now
                        if(savedGroups){
                            savedGroups.map((group) => {
                                groups.push(group);
                            });
                            sessionStorage.removeItem('groups');
                        }
                        setToggle2(!toggle2);
                        }
                    }>Groups +</a></li>
                    {toggle2 && (
                        <div>
                            <ul>
                            {groups.map((group) => {
                                return (
                                    <li className="item">{group.group_name}</li>
                                )
                            })}
                            </ul>
                        </div>
                    )}
                </div>

            </ul>
        </nav>
    )}

function ProfilePage() {
    return <Profile />;
}
export default SideDrawer
