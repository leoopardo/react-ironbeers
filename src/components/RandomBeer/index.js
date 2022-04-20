import { Link } from "react-router-dom";
import "../AllBeers/AllBeers.css"
import RandomImg from "../../assets/random-beer.png"

export function RandomBeer() {
    return ( 
        <div>
            <Link to="/beers/random" style={{textDecoration: "none"}} className="allBeersLink">
                <img src={RandomImg} alt="Random-Beer" className="img"/>
                <h1 className="HomeH1">Random Beer</h1>
                <p className="HomeP">Entre nessa experiência e sorteie uma cerveja aleatória para degustar e conhecer!</p>
            </Link>
        </div>
     );
}