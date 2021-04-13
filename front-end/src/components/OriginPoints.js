import { useState } from "react"
import { Button, ButtonGroup, ButtonToolbar, Modal } from "react-bootstrap"
import OriginInput from "./OriginInput"
import './OriginPoints.css'
import SideDrawer from './SideDrawer';

const OriginPoints = props => {
    const [origins, setOrigins] = useState([{ loc: null, mode: null, options: null }, { loc: null, mode: null, options: null }])

    const onOriginChange = (originNumber, originData) => {
        const newOrigins = origins;
        newOrigins[originNumber] = originData;
        setOrigins(newOrigins);
        props.onChange(origins);
    }

    const displayOriginInputs = () => {
        let inputs = []
        for (let i = 0; i < origins.length; i++) inputs.push(<OriginInput originNumber={i} onChange={onOriginChange}></OriginInput>)
        return inputs;
    }

    const addOrigin = () => {
        const newOrigins = origins;
        newOrigins.push({ loc: null, mode: null, options: null });
        setOrigins(newOrigins);
        props.onChange(origins);
    }

    const removeOrigin = () => {
        const newOrigins = origins;
        newOrigins.pop();
        setOrigins(newOrigins);
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
          {displayOriginInputs()}
          <ButtonToolbar>
            <ButtonGroup className="mr-2">
              {origins.length < 10 ? (
                <Button onClick={addOrigin}>Add Location</Button>
              ) : null}
              {origins.length > 2 ? (
                <Button onClick={removeOrigin} variant="danger">
                  Remove Location
                </Button>
              ) : null}
            </ButtonGroup>
            <Button onClick={handleShow}>Save Locations as Group</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Save Group</Modal.Title>
                <Modal.Body>
                  <br></br>
                  <br></br>

                  <br></br>
                  <input
                    type="input"
                    id="group_name"
                    name="group_name"
                    placeholder="Group Name"
                  ></input>
                  <br></br>
                  <br></br>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      //not checking validity yet
                      //if(origins[0].loc !== null && origins[1].loc !== null){
                      const groupName = document.getElementById("group_name");
                      if (groupName !== "") {
                        const newGroup = {
                          group_name: groupName.value,
                          origins: origins,
                        };
                        const currentGroups = sessionStorage.getItem("groups");
                        if (currentGroups) {
                          const parsedGroup = JSON.parse(currentGroups);
                          parsedGroup.push(newGroup);
                          sessionStorage.setItem(
                            "groups",
                            JSON.stringify(parsedGroup)
                          );
                        } else {
                          const newSession = [newGroup];
                          sessionStorage.setItem(
                            "groups",
                            JSON.stringify(newSession)
                          );
                        }
                      }
                      //}
                      handleClose();
                    }}
                  >
                    Save
                  </Button>
                  <br></br>
                </Modal.Body>
              </Modal.Header>
            </Modal>
          </ButtonToolbar>
        </div>
      </div>
    );
}

export default OriginPoints