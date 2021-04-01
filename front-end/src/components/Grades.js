import React, {useState, useEffect } from 'react';
import '../main.css';
import { Button, ButtonToolbar, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import getTestData from '../testData';
import "./styles/Grades.css";

const GradeInfo = (props) => {
    const [term, setTerm] = React.useState(0);
    const [gradeData, setGradeData] = React.useState([]);
    useEffect(()=>{
        getTestData.getGradeData().then(res => {
            setGradeData(res);
        }
        )
    }, [])
    return (
        <div>
                <div class="row">
                    <div className="topbar-container">
                        <p>
                            <b>Overall GPA:</b> {gradeData.overall_gpa}<br></br>
                            Major GPA: {gradeData.major_gpa}
                        </p>
                        <ButtonToolbar className="justify-content-between">
                            <ButtonGroup>
                            <DropdownButton title='School'></DropdownButton>
                            <DropdownButton id="dropdown-basic-button" title={"Semester"} onSelect={(term, e) => {
                                    setTerm(term);
                                }}>{gradeData.terms ? (
                                gradeData.terms.map((term, index) =>{
                                        return <Dropdown.Item eventKey={index}>{term.semester}</Dropdown.Item>
                                })
                                    ) : (
                                        <p>
                                            Loading...
                                        </p>
                                    )
                                }
                            </DropdownButton>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button>Tran. PDF   </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                        {gradeData.terms ? (
                            <p>
                            <b>Term: {gradeData.terms[term].semester}</b><br></br>
                            Term GPA: 4.000 - Credits: {gradeData.terms[term].classes.reduce((total, course) =>{
                                return total += parseInt(course['credits']);
                            }, 0)}<br></br>
                            Junior - Computer Science
                            </p>
                        ) : (
                            <p>
                                Loading...
                            </p>
                        )
                        }
                        {gradeData.terms ? (
                            gradeData.terms[term].classes.map(course => {
                            return <div className = "classGrades">
                             <div class="classElement card mx-auto border-light mb-3 mt-3">
                                {course['name']} ({course['id']}) - {course['credits']} Credits<br></br>
                                {course['instructor']}<br></br>
                                Midterm Grade: {course['midterm_grade']}<br></br>
                                <b>Final Grade: {course['final_grade']}</b>
                             </div>
                            </div>
                            })
                        ) : (
                            <p>
                                Loading...
                            </p>
                        )
                        }
                        
                    </div>
                 </div>
        </div>
    );
}

export default GradeInfo;