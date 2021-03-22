import React, { useEffect } from 'react';
import '../main.css';
import { Button, ButtonToolbar, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

let term = 0;
export default class GradeInfo extends React.Component{

    state = {
        loading: true,
        grades: null
    }

    async componentDidMount() {
        const url = 'https://my.api.mockaroo.com/grades_mock_data.json?key=202d5e00'
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({grades: data, loading: false})
    }
    
    render() {
        const setTerm = (newTerm) => {
            if(newTerm == 'Spring 2021'){
                term = 0;
            } else if (newTerm == 'Fall 2020'){
                term = 1;
            } else  {
                term = 2;
            }
            console.log(term);
        }
        return (
            <div>
                {this.state.loading || !this.state.grades ? (
                    <div>loading...</div>
                ) : (
                <div>     
                    <div class="row">
                        <div className="topbar-container">
                            <p>
                                <b>Overall GPA:</b> {this.state.grades.overall_gpa}<br></br>
                                Major GPA: {this.state.grades.major_gpa}
                            </p>
                            <ButtonToolbar className="justify-content-between">
                                <ButtonGroup>
                                <DropdownButton title='School'></DropdownButton>
                                <DropdownButton id="dropdown-basic-button" title={this.state.grades.terms[0].term[term].time} onSelect={(term, e) => {
                                    setTerm(term);
                                    this.forceUpdate();
                                }}>
                                {this.state.grades.terms[0].term.map((term) =>{
                                        return <Dropdown.Item eventKey={term.time}>{term.time}</Dropdown.Item>
                                })}
                                </DropdownButton>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button>Tran. PDF   </Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                            <p>
                                {console.log(term)}
                                Term GPA: {this.state.grades.terms[0].term[term].gpa} - Credits: {this.state.grades.terms[0].term[term].classes.reduce((total, course) =>{
                                    return total += parseInt(course['credits']);
                                }, 0)}<br></br>
                                Junior - Computer Science
                            </p>
                            {this.state.grades.terms[0].term[term].classes.map(course => {
                                return <div class="classElement card mx-auto border-light mb-3 mt-3" style={{ width: '95%', border_radius: 0}}>
                                    {course['name']} ({course['id']}) - {course['credits']} Credits<br></br>
                                    {course['instructor']}<br></br>
                                    Midterm Grade: {course['midterm_grade']}<br></br>
                                    <b>Final Grade: {course['final_grade']}</b>
                                </div>
                            })}
                            
                        </div>
                    </div>
                </div>)}
            </div>
        )
    };
}

