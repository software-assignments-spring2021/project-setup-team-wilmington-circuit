import { Accordion, Button } from "react-bootstrap";
import ClassSelect from './ClassSelect';

export default function Course(props) {
    return (
       <div class="classElement card mx-auto border-light mb-3 mt-3" style={{ width: '95%', border_radius: 0}}>
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
                        return (<ClassSelect {...section} catalog={true}></ClassSelect>)
                    })}
                    </>
                </Accordion.Collapse>
            </Accordion>
            </>: <p>No sections available</p>}
          </div>
          
       </div> 
    )
}