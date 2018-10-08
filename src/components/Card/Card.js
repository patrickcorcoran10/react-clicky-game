import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div>
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Position:</strong> {props.position}
                </li>
                <li>
                    <strong>Number:</strong> {props.number}
                </li>
            </ul>
        </div>
    <span onClick={() => props.clickLogic(props.id)} className="click">
    </span>
    </div>  
)

export default Card;