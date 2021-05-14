import React from 'react'
import "./index.css"

const Record = ({img, score}) => {
    return (
        <tr>
            <td>
                <img src={img} alt="img" className="catimg"/>
            </td>
            <td>
                <span className="catscore">{score}</span>
            </td>
        </tr>
    )
}

export default Record;