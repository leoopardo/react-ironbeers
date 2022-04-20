import { useState, useEffect } from "react";
import axios from "axios"
import "./allBeerPage.css"
import { HomeButton } from "../../components/HomeButton";
import { Link } from "react-router-dom";

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
        <div className="beersPg">
        <HomeButton />
        <div className="beersPage">
            {beer.map((currentBeer) => {
                return(
                    <Link to={`/beers/${currentBeer._id}`} style={{ textDecoration: 'none' }}><div className="cardBeer">
                        <div className="currentBeerImg">
                            <img src={currentBeer.image_url} alt={currentBeer.name} className="beerImg"/>
                        </div> 
                        <div className="currentBeerText">
                            <h5>{currentBeer.name}</h5>
                            <p>{currentBeer.tagline}</p>
                            <p><span><strong>Created by:</strong>{` ${currentBeer.contributed_by}`}</span></p>
                        </div>
                    </div></Link>
                );
            })}
        </div>
        </div>
    );
}
