import React from "react";

const Bar = ({ value, color, maximumValue }) => {

    const heightOfBar = value / maximumValue

    return (
        <div>
            <div className="bar">
                <div>{value}</div>
                <div style={{ transform: `scaleY(${heightOfBar})`, backgroundColor: color }}></div>
            </div>
        </div>
    )
};

export default Bar;
