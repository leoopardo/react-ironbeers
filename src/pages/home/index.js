import { AllBeers } from "../../components/AllBeers";
import { NewBeer } from "../../components/NewBeer";
import { RandomBeer } from "../../components/RandomBeer";
export function Home() {
    return (
        <>
            <AllBeers/>
            <RandomBeer/>
            <NewBeer/>
        </>
      );
}