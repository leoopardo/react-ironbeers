import { Link } from "react-router-dom";
import "../AllBeers/AllBeers.css"
import NewBeerImg from "../../assets/new-beer.png"

export function NewBeer() {
    return ( 
        <div>
            <Link to="/" style={{textDecoration: "none"}} className="allBeersLink">
                <img src={NewBeerImg} alt="New-Beer" className="img"/>
                <h1 className="HomeH1">New Beer</h1>
                <p className="HomeP">Comprou uma cerveja incrivel e precisa compartilha-la com o mundo?? Cadastre essa cerveja aqui e permita que mais pessoas a conheça!</p>
            </Link>
        </div>
     );
}