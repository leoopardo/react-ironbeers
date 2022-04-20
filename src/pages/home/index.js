import { AllBeers } from "../../components/AllBeers";
import { NewBeer } from "../../components/NewBeer";
import { RandomBeer } from "../../components/RandomBeer";
import "./home.css"
export function Home() {
    return (
        <div className="home">
            <AllBeers/>
            <RandomBeer/>
            <NewBeer/>
        </div>
      );
}