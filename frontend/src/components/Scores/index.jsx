import React, {useState, useEffect} from 'react'
import { config } from "../../config.js"
import Record from "../Record"

const Scores = () => {

    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(1);


    const fetchCats = async (pageAt) =>  {
        const res = await fetch(`${config.HOST}/cats/scores/${pageAt}`);
        return await res.json();
    }

    useEffect(() => {
        const getCats = async () => {
            const data = await fetchCats(page);
            setCats(data["result"])
        }
        getCats();
    }, [page, setCats])

    const loadMore = async (newPage) => {
        setPage(newPage)
        const data = await fetchCats(newPage)
        let newCats = cats.concat(data["result"])
        setCats(newCats)
    }

    const loadMoreNextCats = async () =>{
        loadMore(page+1)
        window.scrollTo(0, 0);

    }
    const loadMorePrevCats = async () =>{
        if (page - 1 > 0)
            loadMore(page-1)
    }

    return (
        <div>
            <br/><br/><br/>
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
                <button className="btn btn-success float-left"
                            style={{fontSize: "20px"}}
                            onClick={async () => {
                                await loadMorePrevCats()
                            }}>PREVIOUS</button>
                    <button className="btn btn-primary float-right"
                            style={{fontSize: "20px"}}
                            onClick={async () => {
                                await loadMoreNextCats()
                            }}>NEXT</button>
                </center>
            </div>
            <hr/>
        </div>
    )
}

export default Scores;