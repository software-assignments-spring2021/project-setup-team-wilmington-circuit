import { useEffect, useState } from "react"
import { Button, ButtonGroup, ButtonToolbar, Modal } from "react-bootstrap"
import OriginInput from "./OriginInput"
import './OriginPoints.css'
import SideDrawer from './SideDrawer';

const OriginPoints = props => {
    let origins = props.origins && props.origins.length > 0 ? props.origins : [{}, {}]
    const [numOrigins, setNumOrigins] = useState(Math.max(props.origins.length, 2))

    useEffect(()=>{
      setNumOrigins(Math.max(props.origins.length, numOrigins))
    }, [props.origins])

    const onOriginChange = (originNumber, originData) => {
        const newOrigins = origins;
        newOrigins[originNumber] = originData;
        props.onChange(origins);
    }

    const displayOriginInputs = (numOrigins) => {
      let inputs = []
      for (let i = 0; i < Math.max(numOrigins, props.origins.length); i++) inputs.push(<OriginInput onSave={props.onSave} origin={props.origins[i] || null} user={props.user} id_token={props.id_token} originNumber={i} onChange={onOriginChange}></OriginInput>)
      return inputs;
    }

    const addOrigin = () => {
        const newOrigins = origins;
        newOrigins.push({ loc: null, mode: null, options: null });
        origins = newOrigins;
        props.onChange(origins);
        setNumOrigins(numOrigins + 1)
    }

    const removeOrigin = () => {
        setNumOrigins(numOrigins - 1)
        const newOrigins = origins;
        newOrigins.pop()
        origins = newOrigins;
        console.log(origins)
        props.onChange(origins);
        
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="custom-input-group">
        <div className="originpoints-container">
          <p id="origin-input-guide">
            For best results, include ZIP code in location entries
          </p>
          {displayOriginInputs(numOrigins)}
          <ButtonToolbar>
            <ButtonGroup className="mr-2">
              {numOrigins < 10 ? (
                <Button onClick={addOrigin}>Add Location</Button>
              ) : null}
              {numOrigins > 2 ? (
                <Button onClick={removeOrigin} variant="danger">
                  Remove Location
                </Button>
              ) : null}
            </ButtonGroup>
            <Button onClick={handleShow} disabled={(()=>{
              for(origin of origins){
                if(!origin.loc) {
                  return true;
                }
              }
              return false;
            })()}>Save Locations as Group</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Save Group</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>If you are not logged in, your location group will still be saved locally on this device, so you can access it later.</p>
                <input
                  type="input"
                  id="group_name"
                  name="group_name"
                  placeholder="Group Name"
                ></input>
                <br></br>
                <br></br>
                <ButtonGroup>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    const groupName = document.getElementById("group_name");
                    if (groupName !== "") {
                      const newGroup = {
                        group_name: groupName.value,
                        origins: origins,
                      };
                      const currentGroups = localStorage.getItem("groups");
                      if (currentGroups) {
                        const parsedGroup = JSON.parse(currentGroups);
                        parsedGroup.push(newGroup);
                        localStorage.setItem(
                          "groups",
                          JSON.stringify(parsedGroup)
                        );
                      } else {
                        const newSession = [newGroup];
                        localStorage.setItem(
                          "groups",
                          JSON.stringify(newSession)
                        );
                      }

											if(props.user && props.id_token){
												fetch("/group/save", {
													method: "POST",
													headers: {
														"Content-Type": "application/json",
													},
													body: JSON.stringify({
														group: newGroup,
														email: props.user.email,
														id_token: props.id_token,
													}),
												});
											}
                    }
                    handleClose();
                    props.onSave()
                  }}
                >
                  Save
                </Button>
                </ButtonGroup>
                <br></br>
              </Modal.Body>
            </Modal>
          </ButtonToolbar>
        </div>
      </div>
    );
}

export default OriginPoints