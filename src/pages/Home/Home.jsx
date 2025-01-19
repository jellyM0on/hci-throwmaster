import "./Home.css"; 
import bg from "../../assets/bg.png"

export default function Home(){
    return(
        <main id="home-container">
            <div id="home-title-container">
                <h1>THROW <br></br> MASTER</h1>
                <button class="button-1">Start</button>
                <button class="button-2">Tutorial</button>
            </div>
            <div id="home-bg">
                <img src={bg} alt="home background" />
            </div>
        </main>
    )
}