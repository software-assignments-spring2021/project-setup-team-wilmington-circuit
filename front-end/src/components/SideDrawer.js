import React, { useState, useRef, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
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
    const [show, setShow] = useState(false);

    const handleCloseEdit = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editGroup, setEditGroup] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const [friends, setFriend] = useState([]);
    const [groups, setGroup] = useState([]);


    const savedGroups = JSON.parse(localStorage.getItem('groups'));

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target) && (!document.getElementById('hamburger-btn').contains(e.target)) && show === false) {
            setClickedOutside(true);
            props.setShow(false);
            setToggle(false);
            setToggle2(false);
            setToggle3(false);
        }
    };

    useEffect(() => {
        if (savedGroups) {
            savedGroups.map((group) => {
                setGroup(prev => [...prev, group]);
            });
        }
    }, [])


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



    return (
			<nav className={drawerClasses} ref={myRef} onClick={handleClickInside}>
				{props.user ? (
					<ul>
						<li>
							<Profile
								id_token={props.id_token}
								user={props.user}
								onLocationSelect={props.onLocationSelect}
							/>
						</li>

						<div>
							<li>
								<a onClick={() => setToggle(!toggle)}>Friends +</a>
							</li>
							{toggle && (
								<div>
									<ul>
										{friends.map((friend) => {
											return <li className="item">{friend.first_name}</li>;
										})}
									</ul>
								</div>
							)}
						</div>

						<div>
							<li>
								<a
									onClick={() => {
										setToggle2(!toggle2);
										setToggle3(false);
										setShow(false);
									}}
								>
									Groups +
								</a>
								{toggle2 && (
									<>
										<Button
											className="edit"
											onClick={() => {
												setToggle3(!toggle3);
												setToggle2(true);
											}}
										>
											{toggle3 ? "Done" : "Edit"}
										</Button>
										<p id="group-select-guide">
											{toggle3
												? "Click a group to edit it"
												: "Click a group to automatically set locations in the map"}
										</p>
									</>
								)}
							</li>
							{toggle2 && (
								<div>
									<ul>
										{groups.map((group) => {
											//console.log(group);
											/* console.log(show);
                                        console.log(toggle3); */
											return (
												<li className="item">
													{!toggle3 ? (
														<a
															onClick={() => {
																if (group.origins) {
																	props.onGroupSelect(group.origins);
																}
															}}
														>
															{group.group_name}
														</a>
													) : (
														<a
															onClick={() => {
																setEditGroup(group);
																handleShow();
															}}
														>
															{group.group_name}
														</a>
													)}
													{toggle3 && (
														<button
															type="button"
															className="btn btn-danger float-right"
															onClick={() => {
																groups.splice(groups.indexOf(group), 1);
																setGroup([...groups]);
																localStorage.setItem(
																	"groups",
																	JSON.stringify(groups)
																);
																getTestData
																	.deleteGroup(group._id, props.id_token)
																	.catch((e) => {
																		console.log("Error deleting group; " + e);
																	});
															}}
														>
															Delete
														</button>
													)}
												</li>
											);
										})}
										<Modal show={show} onHide={handleCloseEdit}>
											<Modal.Header closeButton>
												<Modal.Title>Edit {editGroup.group_name}</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<form>
													<div class="form-group">
														<label class="col-form-label" for="group_name">
															Group Name:
														</label>
														<input
															class="form-control"
															type="text"
															name={editGroup.group_name}
															defaultValue={editGroup.group_name}
														></input>
													</div>
													{editGroup.origins
														? editGroup.origins.map((origin, index) => {
																return (
																	<div class="form-group mb-2">
																		<label class="col-sm-3 col-form-label">
																			{"Origin " + (index + 1)}{" "}
																		</label>
																		<input
																			type="text"
																			class="form-control"
																			name={editGroup.group_name + "-origins"}
																			defaultValue={origin.query}
																		></input>
																	</div>
																);
														  })
														: console.log()}
												</form>
											</Modal.Body>
											<Modal.Footer>
												<Button variant="secondary" onClick={handleCloseEdit}>
													Close
												</Button>
												<Button
													variant="primary"
													onClick={async () => {
														/* console.log(props);
                                                console.log(editGroup); */
														let edited = false;
														let newGroup = JSON.parse(
															JSON.stringify(editGroup)
														);
														const name = document.getElementsByName(
															editGroup.group_name
														)[0];
														if (name.value !== name.defaultValue) {
															if (name.value.trim() === "") {
																alert("Invalid name entered");
															} else {
																edited = true;
																newGroup.group_name = name.value;
															}
														}
														const docs = document.getElementsByName(
															editGroup.group_name + "-origins"
														);
														let error = false;

														for (let i = 0; i < docs.length; i++) {
															if (docs[i].value !== docs[i].defaultValue) {
																edited = true;
																newGroup.origins[i].query = docs[i].value;
																try {
																	const res = await fetch(
																		"/api/geocode?q=" + docs[i].value,
																		{
																			method: "GET",
																			headers: {
																				"Content-Type": "application/json",
																			},
																		}
																	);
																	newGroup.origins[i].loc = await res.json();
																} catch {
																	error = true;
																	alert("Changes made an address invalid.");
																}
															}
														}
														if (edited && !error) {
															try {
																const res = await fetch("/group/update", {
																	method: "POST",
																	headers: {
																		"Content-Type": "application/json",
																	},
																	body: JSON.stringify({
																		originalGroup: editGroup,
																		newGroup: newGroup,
																		id_token: props.id_token,
																	}),
																});
																const data = await res.json();
																console.log(data);
																groups[groups.indexOf(editGroup)] = newGroup;
															} catch (err) {
																console.log(err);
																alert("Error saving to database.");
															}
														}
														/* console.log(newGroup); */
														handleCloseEdit();
													}}
												>
													Save Changes
												</Button>
											</Modal.Footer>
										</Modal>
									</ul>
								</div>
							)}
						</div>
					</ul>
				) : (
					<ul>
						<li>Login to Save your data!</li>

						<div>
							<li>
								<a
									onClick={() => {
										setToggle2(!toggle2);
										setToggle3(false);
									}}
								>
									Groups +
								</a>
								{toggle2 && (
									<>
										<Button
											className="edit"
											onClick={() => {
												setToggle3(!toggle3);
												setToggle2(true);
											}}
										>
											{toggle3 ? "Done" : "Edit"}
										</Button>
										<p id="group-select-guide">
											Click a group to automatically set locations in the map
										</p>
									</>
								)}
							</li>
							{toggle2 && (
								<div>
									<ul>
										{groups.map((group) => {
											console.log(group);
											return (
												<li className="item">
													<a
														onClick={() => {
															if (group.origins) {
																props.onGroupSelect(group.origins);
															}
														}}
													>
														{group.group_name}
													</a>
													{toggle3 && (
														<button
															type="button"
															className="btn btn-danger float-right"
															onClick={() => {
																groups.splice(groups.indexOf(group), 1);
																setGroup([...groups]);
																localStorage.setItem(
																	"groups",
																	JSON.stringify(groups)
																);
																getTestData
																	.deleteGroup(group._id, props.id_token)
																	.catch((e) => {
																		console.log("Error deleting group; " + e);
																	});
															}}
														>
															Delete
														</button>
													)}
												</li>
											);
										})}
									</ul>
								</div>
							)}
						</div>
					</ul>
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
			</nav>
		);
}

export default SideDrawer;
