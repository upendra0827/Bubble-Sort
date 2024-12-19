import React from "react";
import Bar from "./Bar";

const BarChart = ({ array, maximumValue }) => {
    return (
        <div className="container">
            {
                array.map(({ value, color }, i) => {
                    return (
                        <Bar maximumValue={maximumValue} color={color} value={value} key={`${value}-${i}`} />
                    )
                })
            }
        </div>
    )
};

export default BarChart;
