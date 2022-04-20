import { useState, useEffect } from "react";
import axios from "axios"
import "./allBeerPage.css"
// import { Link } from "react-router-dom";

export function AllBeersPage() {
    const [beer, setBeer] = useState([])
    
    useEffect(() => {
        async function getBeer(){
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setBeer(response.data) 
        }
        getBeer()
    }, []);
    
    console.log(beer)
    
    return (  
        <>
        <ul className="beersPage">
            {beer.map((currentBeer) => {
                return(
                <div className="card mb-3" style={{maxWidth: "540px",}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={currentBeer.image_url} className="img-fluid rounded-start" alt={currentBeer.name} style={{height: "200px"}}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{currentBeer.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
                );
            })}
        </ul>
        </>
    );
}
