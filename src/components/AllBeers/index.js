import { Link } from "react-router-dom";
import "./AllBeers.css"
import beers from "../../assets/beers.png"

export function AllBeers() {
    return ( 
        <div>
            <Link to="/AllBeers" style={{textDecoration: "none"}} className="allBeersLink">
                <img src={beers} alt="All-Beers" className="img"/>
                <h1>All Beers</h1>
                <p>Veja o nosso incrível catálogo das mais diversas e saborosas cervejas e aproveite para descobrir e expandir seus horizontes em um mundo de diversidades.</p>
            </Link>
        </div>
     );
}