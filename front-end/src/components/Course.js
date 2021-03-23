import { Accordion, Button } from "react-bootstrap";
import ClassSelect from './ClassSelect';
import './styles/Course.css';
export default function Course(props) {
    return (
     <div className = "courseContainer">
       <div class="classElement card border-light mb-3 mt-3">
          <div class="card-header pt-3">
          <h5>{props.name}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">{props.description}</p>
            {props.sections ? <>
            <Accordion>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">Show Sections</Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <>
                    {props.sections.map(section => {
                        return (<ClassSelect classObject={section} onSelect={props.onSelect} catalog={true}></ClassSelect>)
                    })}
                    </>
                </Accordion.Collapse>
            </Accordion>
            </>: <p>No sections available</p>}
          </div>
          
       </div> 
     </div>
    )
}