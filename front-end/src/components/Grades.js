import React from 'react';
import '../main.css';
import { Button, ButtonToolbar, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

const sampleGrades = {
    OverallGPA: '3.000',
    MajorGPA: '3.500',
    Terms: {
        'Summer 2021': [
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            },
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            }
        ],
        'Spring 2021': [
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            },
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            },
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            },
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            }
        ],
        'Fall 2020': [
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            },
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            },
            {
                'name': 'Agile',
                'id': 'CSCIUA 480',
                'credits': '4',
                'instructor': 'Amos Bloomberg',
                'midterm-grade': 'A',
                'final-grade': 'A'
            }
        ]
    }
}

const GradeInfo = (props) => {
    const [term, setTerm] = React.useState('Spring 2021');
    return (
        <div>
            <div class="row">
                <div className="topbar-container">
                    <p>
                        <b>Overall GPA:</b> {sampleGrades.OverallGPA}<br></br>
                        Major GPA: {sampleGrades.MajorGPA}
                    </p>
                    <ButtonToolbar className="justify-content-between">
                        <ButtonGroup>
                        <DropdownButton title='School'></DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title={term} onSelect={(term, e) => {
                        setTerm(term);
                        }}>
                        <Dropdown.Item eventKey="Fall 2020">Fall 2020</Dropdown.Item>
                        <Dropdown.Item eventKey="Spring 2021">Spring 2021</Dropdown.Item>
                        <Dropdown.Item eventKey="Summer 2021">Summer 2021</Dropdown.Item>
                        </DropdownButton>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>Tran. PDF   </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <p>
                        Term GPA: 4.000 - Credits: {sampleGrades.Terms[term].reduce((total, course) =>{
                            return total += parseInt(course['credits']);
                        }, 0)}<br></br>
                        Junior - Computer Science
                    </p>
                    {sampleGrades.Terms[term].map(course => {
                        return <div class="classElement card mx-auto border-light mb-3 mt-3" style={{ width: '95%', border_radius: 0}}>
                            {course['name']} ({course['id']}) - {course['credits']} Credits<br></br>
                            {course['instructor']}<br></br>
                            Midterm Grade: {course['midterm-grade']}<br></br>
                            <b>Final Grade: {course['final-grade']}</b>
                        </div>
                    })}
                    
                </div>
             </div>
        </div>
    )
};

export default GradeInfo;