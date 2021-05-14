import React from 'react'
import "./index.css"

const Record = ({img, score}) => {
    return (
        <tr>
            <td>
                <img src={img} alt="img" className="catimg"/>
            </td>
            <td>
                <h2 className="catscore">{score}</h2>
            </td>
        </tr>
    )
}

export default Record;