import React from 'react'

function Upgrade() {
    return (
        <section name="upgrade">
            <div className="upgrade-main row">
                <div className="col-6 d-flex floating-purpose">
                    <div className="m-auto upgrade-left">
                        <h2 className="upgrade-heading">
                            Upgrade your lab<br />
                            without hassle
                        </h2>
                        <p className="upgrade-para">Some detail about the test</p>
                        <p className="upgrade-para">Some detail about the test</p>
                        <button className="btn-test">View UID Test</button>
                    </div>
                </div>
                <div className="upgrade-img col-6 d-flex m-auto floating-purpose-right"></div>
            </div>
        </section>
    );
}

export default Upgrade;