import "./InfoContainer.css"
import bg from "../../assets/paper1.png"

export default function InfoContainer({title, content, navBtns}){
    return(
        <div className="info-container">
            <img src={bg} alt="bg" class="info-container-bg"/>
            <div className="info-container-content">
                <div className="info-container-content-main">
                    <h2>{title}</h2>
                    <>{content}</>
                </div>
                           
                <div class="info-container-nav">{navBtns}</div>
            </div>
        </div>
    )
}