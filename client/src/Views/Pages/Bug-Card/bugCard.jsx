import React from "react";
import "./bugCard.css"

export default (props) => {
    const Clicked = () => {
        props.clicked(props.name);
    }

    return <div className="bug-card" onClick={Clicked}>
        <h2 className="name">{props.name}</h2>
        <h4 className="priority">{props.priority}</h4>
        <h5 className="version">{props.version}</h5>
    </div>
}