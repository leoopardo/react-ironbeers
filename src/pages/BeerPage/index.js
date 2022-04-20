import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import { HomeButton } from "../../components/HomeButton";

export function BeerPage() {
    const params = useParams()
    const [beer, setBeer] = useState([])
    console.log(params)
    
    useEffect(() => {
        async function getBeer(){
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.Beer}`)
            setBeer(response.data) 
        }
        getBeer()
    }, []);
    console.log (beer)
    
    return ( 
        <>
        <HomeButton />
        <img src={beer.image_url} alt={beer.name}/>
        <h1>{beer.name} <span>{beer.attenuation_level}</span></h1>
        <p><span>{beer.tagline}</span></p>
        <p>{beer.first_brewed}</p>
        <p>{beer.description}</p>
        </>
        
     );
}
