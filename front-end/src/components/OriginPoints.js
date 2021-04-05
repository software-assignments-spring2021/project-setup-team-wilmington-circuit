import { useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import OriginInput from "./OriginInput"
import './OriginPoints.css'

const OriginPoints = props => {
    const [origins, setOrigins] = useState([{loc: null, mode: null, options: null}, {loc: null, mode: null, options: null}])

	const onOriginChange = (originNumber, originData) => {
		const newOrigins = origins;
        newOrigins[originNumber] = originData;
        setOrigins(newOrigins);
        props.onChange(origins);
	}

    const displayOriginInputs = () => {
		let inputs = []	
		for(let i = 0; i < origins.length; i++) inputs.push(<OriginInput originNumber={i} onChange={onOriginChange}></OriginInput>)
		return inputs;
	}

	const addOrigin = () => {
        const newOrigins = origins;
        newOrigins.push({loc: null, mode: null, options: null});
        setOrigins(newOrigins);
        props.onChange(origins);
    }

	const removeOrigin = () => {
        const newOrigins = origins;
        newOrigins.pop();
        setOrigins(newOrigins);
        props.onChange(origins);
    }
	

    return(
    <div className="custom-input-group">
        <div className="originpoints-container">
            {displayOriginInputs()}
            <ButtonGroup>
                {origins.length < 10 ? (<Button onClick={addOrigin}>Add Point</Button>) : null}
                {origins.length > 2 ? (<Button onClick={removeOrigin} variant="danger">Remove Point</Button>) : null}
            </ButtonGroup>
        </div>
    </div>
    
    )
}

export default OriginPoints