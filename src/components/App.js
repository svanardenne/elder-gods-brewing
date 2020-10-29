import React, { Component } from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js";
import MainNav from './Navbar';
import MainHeader from './MainHeader'
import Divider from './Divider';
import About from './About';
import Book from './Book';
import Cards from './Cards';
import Footer from './Footer';
import HopsImg from '../assets/img/hops-elevate.jpg';
import HopsImg2 from '../assets/img/hops-andre-klimke.jpg';
import Cheers from '../assets/img/cheers-elevate.jpg';
import Founder from '../assets/img/man-in-polo-foto-sushi.jpg';
import Brewer from '../assets/img/man-holding-beer-evan-dvorkin.jpg';
import Bartender from '../assets/img/bartender-andriyko-podilnyk.jpg';

class App extends Component {
  
  state = {
    aboutInfo: [
      {
        title: `Only the freshest ingredients`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        img: HopsImg,
        id: 1
      },
      {
        title: `Locally Sourced`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        img: HopsImg2,
        id: 2
      },
      {
        title: `Generations' old recipies`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        img: Cheers,
        id: 3
      }
    ],
    teamInfo: [
      {
        img: Founder,
        title: `Crafty Mc BeerMaker`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        id: 1
      },
      {
        img: Brewer,
        title: `Brewer Sudson`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        id: 2
      },
      {
        img: Bartender,
        title: `Barfly Fancypants`,
        text: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.`,
        id: 3
      }
    ]
  }



  render() {
    return (

      <React.Fragment>
        <header className="App-header main-header">
          <MainNav />
          <MainHeader />
        </header>
        <main className="container-fluid px-0">
          <section className="divider py-5 fades">
          <Divider />
          </section>
          <section id="about" className="text-center text-white fades">
            <h2 className="my-5">Our Promise:</h2>
              {this.state.aboutInfo.map(info => 
              <About
                aboutTitle={info.title}
                aboutText={info.text}
                aboutImg={info.img}
                key={info.id}
              />
              )}
          </section>
          <section id="book" className="fades">
            <Book />
          </section>
          <section id="team" className="fades">
            <h2 className="my-5 text-center">Our Team</h2>
            <div className="row justify-content-around mx-0">
                {this.state.teamInfo.map(info => 
                <Cards
                  teamImg={info.img}
                  teamTitle={info.title}
                  teamText={info.text}
                  key={info.id}
                />
                )}
            </div>
          </section>
        </main>
        <footer id="contact" className="container-fluid fades">
          <Footer />
          <div className="text-center">
            <span>@ 2020 Copyright Elder Gods Brewing</span>
          </div>
        </footer>
      </React.Fragment>

    );
  }

/* ============================================= */
/*                 Scripts                       */
/* ============================================= */

  componentDidMount() {
    //Create fade effect on sections on scroll
    let elementsArray = document.querySelectorAll(".fades");
    console.log(elementsArray);
    window.addEventListener('scroll', fadeIn ); 
    function fadeIn() {
        for (var i = 0; i < elementsArray.length; i++) {
            var elem = elementsArray[i]
            var distInView = elem.getBoundingClientRect().top - window.innerHeight + 50;
            if (distInView < 0) {
                elem.classList.add("inView");
            } else {
                elem.classList.remove("inView");
            }
        }
    }
    fadeIn();

    //Global variables
    const header = document.querySelector('.main-header');
    const infoTitle = document.querySelector('.header-title');
    const infoText = document.querySelector('.header-text');
    const buttons = document.querySelector('.header-buttons');

    //Sets opacity to full
    function opacityFull(element) {
      element.style.opacity = '1';
    }

    //Sets translateX to neutral position
    function translateXNeutral(element) {
      element.style.transform = "translateX(0px)";
    }

    //Sets translateY to neutral position
    function translateYNeutral(element) {
      element.style.transform = "translateY(0px)";
    }

    //Executes header animation on DOM load
    window.addEventListener('load', () => {
      if (header) {
          opacityFull(header);
          translateXNeutral(infoTitle);
          setTimeout(() => {opacityFull(infoText)}, 2000);
              translateYNeutral(buttons);
      }
      
    });
  }
}

export default App;
