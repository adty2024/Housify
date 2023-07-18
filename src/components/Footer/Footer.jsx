import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/*left*/}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />
                    <span className='secondaryText'>
                        Find the best place to live.
                    </span>
                </div>

                {/*right*/}
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>506, 5th floor, Samnvay Silver, <br />near Royal Orchid Central Hotel, Pratham Avenue,<br /> Akota, Vadodara, Gujarat 390020</span>
                </div>
            </div>
        </section>
    )
}

export default Footer