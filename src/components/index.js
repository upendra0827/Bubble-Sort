import React, { useState } from "react";
import BarChart from "./BarChart";
import './styles.css'

const BubbleSort = () => {

    const sampleArray = [
        { value: 4 },
        { value: 10 },
        { value: 8 },
        { value: 6 },
        { value: 1 },
        { value: 3 },
        { value: 2 }
    ];

    const [array, setArray] = useState(sampleArray)

    const maximumValue = array.reduce((acc, curr) => {
        return acc['value'] > curr['value'] ? acc : curr
    })

    const steps = []

    const handleRunAnimation = () => {
        let timer = setInterval(() => {
            setArray([...steps.shift()])

            if (steps.length === 0) clearInterval(timer)
        }, 100);
    }

    const handleSorting = ({ arrayClone }) => {
        for (let i = 0; i < arrayClone.length - 1; i++) {
            for (let j = 0; j < arrayClone.length - 1; j++) {

                arrayClone[j]['color'] = 'black'
                arrayClone[j + 1]['color'] = 'black'

                steps.push(JSON.parse(JSON.stringify([...arrayClone])))

                if (arrayClone[j]['value'] > arrayClone[j + 1]['value']) {

                    [arrayClone[j], arrayClone[j + 1]] = [arrayClone[j + 1], arrayClone[j]]

                    arrayClone[j]['color'] = 'green'
                    arrayClone[j + 1]['color'] = 'green'

                    steps.push(JSON.parse(JSON.stringify([...arrayClone])))
                }
                arrayClone[j]['color'] = 'red'
                arrayClone[j + 1]['color'] = 'red'
                steps.push(JSON.parse(JSON.stringify([...arrayClone])))
            }
        }

        handleRunAnimation()
    }

    const handleSortingAnimation = () => {
        const arrayClone = [...sampleArray]
        handleSorting({ arrayClone })
    }

    return (
        <>
            <BarChart array={array} maximumValue={maximumValue['value']} />
            <button onClick={handleSortingAnimation}>Sort</button>
        </>
    )
};

export default BubbleSort;
