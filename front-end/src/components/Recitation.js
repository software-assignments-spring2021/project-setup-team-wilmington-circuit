import React from "react";
import {Card} from "react-bootstrap";

const sampleRecitation = {
  instructor: "TA Terry",
  location: "Online",
  date: "Fri - 9:30 - 10:45AM"
};

export default function Recitation() {
    return (
       <div class="card mx-auto border-secondary mb-3 mt-3">
          <Card.Body>
              <Card.Text>{sampleRecitation.instructor}, {sampleRecitation.location}</Card.Text>
              <Card.Text>{sampleRecitation.date}</Card.Text>
          </Card.Body>
       </div> 
    )
}
