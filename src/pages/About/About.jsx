import "./About.css";

export default function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1 className="about-title">About Us</h1>
                <h1 className="about-description">
                    Welcome to <strong>ThrowMaster</strong>! Our game is all about sorting waste into 
                    their appropriate bins to promote proper waste management and environmental 
                    awareness. This project is our creative take on making learning about 
                    sustainability fun and engaging.
                </h1>

                <h1 className="about-description">
                    We are a group of students from the Polytechnic University of the Philippines, 
                    and this game serves as our final project for the Human Computer Interaction (HCI) course.
                </h1>

                <h1 className="about-team">
                    Meet our team:
                </h1>

                <ul className="team-list">
                    <li>Chrysler Dele Ordas</li>
                    <li>Honey Flores</li>
                    <li>Jom Carpio</li>
                    <li>Justine Carl Romales</li>
                    <li>Miguel Gavino</li>
                    <li>Ylana Ong</li>
                </ul>

                <h1 className="about-description">
                    Through <strong>ThrowMaster</strong>, we aim to inspire players to take small yet impactful steps 
                    towards a cleaner and greener future. Thank you for playing our game and supporting our mission!
                </h1>

            </div>
        </div>
    );
}
