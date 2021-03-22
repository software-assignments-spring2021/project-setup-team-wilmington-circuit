import React from "react";
import ClassSelect from "./ClassSelect";

const sampleClasses = [
	{
		"registrationNumber": 22981,
		"code": "001",
		"instructors": [
			"Joseph John Versoza"
		],
		"type": "Lecture",
		"status": "WaitList",
		"meetings": [
			{
				"beginDate": "2021-02-01 11:00:00",
				"minutesDuration": 75,
				"endDate": "2021-05-10 23:59:00"
			},
			{
				"beginDate": "2021-02-03 11:00:00",
				"minutesDuration": 75,
				"endDate": "2021-05-10 23:59:00"
			}
		],
		"waitlistTotal": 72,
		"instructionMode": "Online",
		"name": "Data Management and Analysis",
		"minUnits": 0,
		"maxUnits": 4,
		"location": "Online"
	},
	{
		"registrationNumber": 9425,
		"code": "034",
		"instructors": [
		"Joseph John Versoza"
		],
		"type": "Lecture",
		"status": "WaitList",
		"meetings": [
		{
			"beginDate": "2021-01-28 09:30:00",
			"minutesDuration": 75,
			"endDate": "2021-05-10 23:59:00"
		},
		{
			"beginDate": "2021-02-02 09:30:00",
			"minutesDuration": 75,
			"endDate": "2021-05-10 23:59:00"
		}
		],
		"waitlistTotal": 79,
		"instructionMode": "Online",
		"name": "Special Topics: Applied Internet Tech",
		"minUnits": 0,
		"maxUnits": 4,
		"location": "Online"
	},
	{
		"registrationNumber": 7624,
		"code": "001",
		"instructors": [
		"Douglas L Moody"
		],
		"type": "Lecture",
		"status": "WaitList",
		"meetings": [
		{
			"beginDate": "2021-02-01 09:30:00",
			"minutesDuration": 75,
			"endDate": "2021-05-10 23:59:00"
		},
		{
			"beginDate": "2021-02-03 09:30:00",
			"minutesDuration": 75,
			"endDate": "2021-05-10 23:59:00"
		}
		],
		"recitations": [
		{
			"registrationNumber": 7625,
			"code": "002",
			"instructors": [
			"Staff"
			],
			"type": "Recitation",
			"status": "WaitList",
			"meetings": [
			{
				"beginDate": "2021-02-02 09:30:00",
				"minutesDuration": 75,
				"endDate": "2021-05-10 23:59:00"
			}
			],
			"waitlistTotal": 0,
			"instructionMode": "In-Person",
			"name": "Computer Systems Org",
			"minUnits": 0,
			"maxUnits": 0,
			"location": "60 5th Ave - Room: 125"
		}
		],
		"waitlistTotal": 1,
		"instructionMode": "Online",
		"name": "Computer Systems Org",
		"minUnits": 0,
		"maxUnits": 4,
		"location": "Online"
	}
]

const enrolled = [];

function remove() {
	try {
		sampleClasses = sampleClasses.filter(Class => {
			console.log(`${Class.registrationNumber} removed from cart`);
			console.log(ClassSelect.returnSelected());
			return !(Class.registrationNumber in ClassSelect.returnSelected());
		})
	}
	catch(e) {console.log("Removal failed")}
}

function enroll() {
	try {
		sampleClasses = sampleClasses.filter(Class => {
			if (!(Class.registrationNumber in ClassSelect.returnSelected())) {
				console.log(`${Class.registrationNumber} enrolled`);
				enrolled.push(Class);
				return true;
			}
		})
	}
	catch(e) {console.log("Enrollment failed")}
}

export default function ShoppingCart(props) {
	return (
		<>
			{sampleClasses.map(Class => {return (<ClassSelect {...Class}/>)})}
			<div style = {{'text-align': 'center'}} class="button-box col-lg-12 mx-auto">
				<a href="" class="btn btn-danger" role="button" onClick={remove()}><h4>Remove</h4></a>
				<a href="" class="btn btn-primary m-3" role="button" onClick={enroll()}><h4>Enroll</h4></a>
			</div>
		</>
	)
}