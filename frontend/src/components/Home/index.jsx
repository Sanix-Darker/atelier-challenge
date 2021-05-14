import React, {useState, useEffect} from 'react'
import { config } from "../../config.js"
import Face from '../Face/index.jsx';


const Home = () => {

    const [cats, setCats] = useState({});
    const [status, setStatus] = useState("Make a vote by clicking on the image !");
    const fetchCats = async () =>  {
        const res = await fetch(`${config.HOST}/cats`);
        return await res.json();
    }

    const voteCat = async (cat_id) => {
        setStatus("Voting...");

        const res = await fetch(`${config.HOST}/cats/scores/${cat_id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({})
        });
        if (res.status === 200){
            setStatus("Loading new cats...");
            const data = await fetchCats();
            setCats(data["result"]);
            setTimeout(() => {
                setStatus("Make a vote by clicking on the image !");
            }, 1000)
        }
    }

    useEffect(() => {
        const getCats = async () => {
            setStatus("Loading new cats...");
            const data = await fetchCats();
            setCats(data["result"])
            setTimeout(() => {
                setStatus("Make a vote by clicking on the image !");
            }, 2700)
        }
        getCats();
    }, [])

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                Choose The Cutest Cat !!!
            </h1>
            <hr/>
            <div className="row">
                <Face cat={cats["cat1"]} onVote={voteCat}/>
                <Face cat={cats["cat2"]} onVote={voteCat}/>
            </div>
            <br/><hr/>
            <div>{status}</div>
        </div>
    )
}

export default Home;