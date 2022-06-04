// import "./app.css";
import React from 'react'
// import image from "./box.png";

function Upgrade() {
    return (
        <section name="upgrade">
            <div class="upgrade-main">
                <div>
                    <h2 class="upgrade-heading">
                        Upgrade your lab<br />
                        without hassle
                    </h2>
                    <p class="upgrade-para">Some detail about the test</p>
                    <p class="upgrade-para">Some detail about the test</p>
                    <button class="btn-test">View UID Test</button>
                </div>
                <div className='upgrade-img'>
                    {/* <img  src={image} alt="" /> */}
                </div>
            </div>
        </section>
    );
}

export default Upgrade;