import React, {useState, useRef, useEffect} from "react"
import "./Dropdown.css"

/*export default function Dropdown({options, id, label, prompt, value, onChange}) {

    const [open, setOpen] = useState(true)

    const [query, setQuery] = useState("")

    const ref = useRef(null)

    useEffect(
        () => {
            ["click", "touchend"].forEach(e => (
                document.addEventListener(e, toggle)
            ))
            return () => ["click", "touchend"].forEach(e => (
                document.removeEventListener(e, toggle)
            ))
        }, [])

    function toggle(e) {
        setOpen(e && e.target === ref.current)
    }

    function filter(options) {
        return options.filter(
            (option) => 
            option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
        )
    }

    function displayValue() {
        if(query.length > 0) return query
        if(value) return value[label]
        return ""
    }

    function selectOption(option) {
        setQuery("")
        onChange(option)
        setOpen(false)
    }

    return <div className="dropdown">
    <div className="control">
        <div className="selected-value" ref={ref}>
            <input 
            type="text" 
            ref={ref} 
            placeholder={value ? value[label] : prompt}
            value={displayValue()}
            onChange={e => {
                setQuery(e.target.value)
                onChange(null)
            }}
            onClick={toggle}
            onTouchEnd={toggle} /> 

        </div>
        <div className = {`arrow ${open ? "open" : null}`} ></div>

        <div className = {`options ${open ? "open" : null}`}>
            {filter(options).map((option) => (
                <div 
                key = {option[id]}
                className={`option ${value === option ? "selected" : null}`}
                onClick={() => selectOption(option)}
                onTouchEnd={() => selectOption(option)}
                >{option[label]}</div>
            ))}
        </div>
    </div>
</div>
}
*/
export default function Dropdown({options, id, label, prompt, value, onChange}) {

   /* const [open, setOpen] = useState(true)

    const [query, setQuery] = useState("")

    const ref = useRef(null)

    useEffect(
        () => {
            ["click", "touchend"].forEach(e => (
                document.addEventListener(e, toggle)
            ))
            return () => ["click", "touchend"].forEach(e => (
                document.removeEventListener(e, toggle)
            ))
        }, [])

    function toggle(e) {
        setOpen(e && e.target === ref.current)
    }

    function displayValue() {
        if(query.length > 0) return query
        if(value) return value[label]
        return ""
    }

    function selectOption(option) {
        setQuery("")
        onChange(option)
        setOpen(false)
    }*/

    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    function close(e) {
        setOpen(e && e.target === ref.current)
    }

    useEffect(
        () => {
            document.addEventListener("click", close)
            return () => document.removeEventListener("click", close)
        }, [])

    return <div className="dropdown">
    <div className='control' onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value" ref={ref}>
            {value ? value.name : prompt}
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>

        <div className={`options ${open ? "open" : null}`}>
            {
                options.map((option) => (
                <div className={`option ${value === option ? "selected" : null}`} onClick={() => {
                        onChange(option)
                        setOpen(false)
                    }}>{option.name}</div>
            ))}
        </div>
    </div>
</div>
}

