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
              <p class="card-text">{sampleRecitation.instructor}, {sampleRecitation.location}</p>
              <p class="card-text">{sampleRecitation.date}</p>
          </Card.Body>
       </div> 
    )
}
