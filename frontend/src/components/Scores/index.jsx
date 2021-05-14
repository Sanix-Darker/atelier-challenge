import React, {useState, useEffect} from 'react'
import { config } from "../../config.js"
import Record from "../Record"

const Scores = () => {

    const [cats, setCats] = useState([]);
    const fetchCats = async () =>  {
        const res = await fetch(`${config.HOST}/cats/scores/1`);
        return await res.json();
    }

    useEffect(() => {
        const getCats = async () => {
            const data = await fetchCats();
            setCats(data["result"])
        }
        getCats();
    }, [])

    return (
        <div>
            <br/><br/>
            <h1 style={{textAlign: "center"}}>
                Scores !!!
            </h1>
            <hr/>
                <div className="table-responsive py-5" style={{overflow: "hidden"}}>
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <td >Cat</td>
                                <td >Score</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cats.map((cat, index) => {
                                return <Record key={index}
                                                img={cat.image}
                                                score={cat.score} />
                            })}
                        </tbody>
                    </table>
                    <center>
                        <button className="btn btn-primary" style={{fontSize: "20px"}}> LOAD MORE </button>
                    </center>
                </div>
            <br/><hr/>
        </div>
    )
}

export default Scores;