import { Link } from "react-router-dom";
import "./homeButton.css"
export function HomeButton() {
    return ( 
        <div >
            <Link to="/" style={{textDecoration: "none"}}><button className="homeButton" type="button">Home</button></Link>
        </div>
     );
}
