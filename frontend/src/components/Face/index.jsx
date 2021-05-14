import React from 'react'
import "./index.css"

const Face = ({cat, onVote}) => {
    return (
        <div className="col-md-6 face" onClick={() => onVote(cat?.id)}>
            <img src={cat?.image} alt="Loading cat 1"/>
        </div>
    )
}

export default Face;
