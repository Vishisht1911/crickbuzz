import React from "react";
import "./experience.css";

const Experience =()=>{
    return(
<section className="experience-section" id="about">
    <div className="container">
        <div className="section_title center">
          
        </div>
        <div className="teams">
            <div className="card">
                <img src="./img_avatar.png" alt="Avatar" />
                <div class="team">
                    <h4><b>John Doe</b></h4> 
                    <p>Architect & Engineer</p> 
                </div>
            </div>
            {/* <div className="vs">
            <h2>VS</h2>
            </div> */}
            <div className="card">
                <img src="./img_avatar.png" alt="Avatar" />
                <div class="team">
                    <h4><b>John Doe</b></h4> 
                    <p>Architect & Engineer</p> 
                </div>
            </div>
        </div>
        <div className="experience-items">
            <div className="experience-item">
                <div className="experience-info">
                    <p>team1</p>
                    <p>team2</p>
                </div>
                <div className="progress-line" data-percent="90%">
                    <span style={{width:"50%"}}></span>

                </div>
            </div>
        </div>
        <div className="PricePool">
            <p>MONEY</p>
        </div>
            <div className="bets">
        <label for="fname">Prediction</label>

        <input type="text" id="Predicition"name="fname"/><br />
        <label for="fname">Prediction on</label>
        
        <button id="button1">Team1</button><button id="button2">Team2</button>
        </div>
    </div>

</section>
    )
}

export default Experience;