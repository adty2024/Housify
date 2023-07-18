import React, { useState } from 'react';
import "./Header.css";
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 768){
      return {right: !menuOpened && "-100%"}
    }
  }

  const scrollToSection = (className) => {
    const targetElement = document.querySelector(`.${className}`);
    if (targetElement) {
      const targetTop = targetElement.offsetTop;
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  }

  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img src="./logo2.png" alt="logo" width={100} />

            <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>

                <div className="flexCenter h-menu"
                    style={getMenuStyles(menuOpened)}
                    >
                    <Link to="/predict" className="all-sections"><span style={{ textDecoration: 'underline' }}>Predictor</span></Link>
                    <button onClick={() => scrollToSection('r-identifier')} className="all-sections" href="">Residencies</button>
                    <button onClick={() => scrollToSection('o-identifier')} className="all-sections" href="">Our Value</button>
                    <button onClick={() => scrollToSection('c-identifier')} className="all-sections" href="">Contact Us</button>
                    <button onClick={() => scrollToSection('g-identifier')} className="all-sections" href="">Get Started</button>
                    <button className="button">
                        <a href="mailto:avisaxena3019@gmail.com">Email Us</a>
                    </button>
                </div>

            </OutsideClickHandler>

            <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
              <BiMenuAltRight size={30} />
          </div>

        </div>

    </section>
  )
}

export default Header