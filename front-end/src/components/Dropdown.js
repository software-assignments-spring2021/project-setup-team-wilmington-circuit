import React, {useState} from "react"
import "./Dropdown.css"

export default function Dropdown({value, onChange}) {

    const [open, setOpen] = useState(false)

    return <div className="dropdown">
    <div className="control" onClick={() => setOpen((prev) => !prev)}>
    <div className="selected-value">Select School</div>
    <div className = {`arrow ${open ? "open" : null}`}>
        </div>  
        <div className = {`options ${open ? "open" : null}`}>
            <div className="option">College of Arts and Science</div>
            <div className="option">Leonard N. Stern School of Business</div>
            <div className="option">School of Professional Studies</div>
            <div className="option">College of Dentistry</div>
            <div className="option">Steinhardt School of Culture, Education, and Human Development</div>
            <div className="option">Liberal Studies</div>
            <div className="option">Gallatin School of Individualized Study</div>
            <div className="option">NYU Abu Dhabi</div>
            <div className="option">Rory Meyers College of Nursing</div>
            <div className="option">Graduate School of Arts and Science</div>
            <div className="option">Leonard N. Stern School of Business - Graduate</div>
            <div className="option">School of Professional Studies - Graduate</div>
            <div className="option">Steinhardt School of Culture, Education, and Human Development - Graduate</div>
            <div className="option">Silver School of Social Work</div>
            <div className="option">Tisch School of the Arts</div>
            <div className="option">Gallatin School of Individualized Study - Graduate</div>
            <div className="option">College of Global Public Health</div>
            <div className="option">NYU Shanghai</div>
            <div className="option">Tandon School of Engineering</div>
            <div className="option">Rory Meyers College of Nursing - Graduate</div>
            <div className="option">Robert F. Wagner Graduate School of Public Service - Graduate</div>
            <div className="option">Silver School of Social Work - Graduate</div>
            <div className="option">Tisch School of the Arts - Graduate</div>
            <div className="option">College of Global Public Health - Graduate</div>
            <div className="option">Center for Urban Science and Progress - Graduate</div>
            <div className="option">Tandon School of Engineering - Graduate</div>
            <div className="option">School of Professional Studies</div>
        </div>
    </div>
</div>
}