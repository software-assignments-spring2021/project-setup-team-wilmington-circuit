import { useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import OriginInput from "./OriginInput"
import './OriginPoints.css'

const OriginPoints = props => {
    const [origins, setOrigins] = useState([{loc: null, mode: null, options: null}, {loc: null, mode: null, options: null}])

	const onOriginChange = (originNumber, originData) => {
		const newOrigins = origins;
	}

    const displayOriginInputs = () => {
		let inputs = []	
		for(let i = 0; i < origins.length; i++) inputs.push(<OriginInput origin-number={i} onChange={onOriginChange}></OriginInput>)
		return inputs;
	}

	const addOrigin = () => {setOrigins(prev => [...prev, {loc: null, mode: null, options: null}])}

	const removeOrigin = () => {setOrigins(prev => [...prev.splice(0, prev.length-1)])}
	

    return(
    <div className="originpoints-container">
        {displayOriginInputs()}
        <ButtonGroup>
            {origins.length < 10 ? (<Button onClick={addOrigin}>Add Point</Button>) : null}
            {origins.length > 2 ? (<Button onClick={removeOrigin} variant="danger">Remove Point</Button>) : null}
        </ButtonGroup>
    </div>
    )
}

export default OriginPoints