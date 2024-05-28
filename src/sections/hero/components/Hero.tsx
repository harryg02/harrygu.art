import React, { useEffect } from 'react';
import intro1 from '../assets/intro-1.webm';
import intro2 from '../assets/intro-2.webm';
import intro3 from '../assets/intro-3.webm';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import '../styles/Hero.css';

function Hero() {

  useEffect(() => {
    const imageOverlays = [
      document.getElementById('imageOverlay1'),
      document.getElementById('imageOverlay2'),
      document.getElementById('imageOverlay3'),
    ];
    const videoOverlays = [
      document.getElementById('myVideo1'),
      document.getElementById('myVideo2'),
      document.getElementById('myVideo3'),
    ];
    let currentIndex = 0; // Local variable instead of state
  
    const changeBackgroundImage = () => {
      currentIndex = (currentIndex + 1) % imageOverlays.length;
  
      // Show the next image and video
      imageOverlays[currentIndex]?.style.setProperty('display', 'block');
      videoOverlays[currentIndex]?.style.setProperty('display', 'block');
  
      // After showing the last image, reset all back to the first image
      if (currentIndex === imageOverlays.length - 1) {
        setTimeout(() => {
          imageOverlays.forEach((overlay, index) => {
            overlay?.style.setProperty('display', index === 0 ? 'block' : 'none');
          });
          videoOverlays.forEach((overlay, index) => {
            overlay?.style.setProperty('display', index === 0 ? 'block' : 'none');
          });
          currentIndex = 0;
        }, 3000); // Reset after the last image has been displayed for 3 seconds
      }
    };
  
    const intervalId = setInterval(changeBackgroundImage, 3000);
  
    return () => clearInterval(intervalId);
  }, []);
  


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      const parallaxContainer = document.getElementById('hero');
      if (parallaxContainer) {
        parallaxContainer.style.transform = `translateY(${offset * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-[#1C1E1F] min-h-[600px] max-h-[800px] h-[75vh] md:h-screen">
      <div className="screen-lat" style={{ zIndex: 1 }}></div>
      <video id="myVideo1" autoPlay loop muted className="video-overlay absolute top-[15vh] left-[23vw] sm:left-[35%] lg:left-[35%] w-[40vw] object-scale-down block" style={{ height: '340px', minWidth: '350px' }}>
        <source src={intro1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video id="myVideo2" autoPlay loop muted className="video-overlay absolute top-[15vh] left-[23vw] sm:left-[35%] lg:left-[35%] w-[40vw] object-scale-down hidden" style={{ height: '340px', minWidth: '350px' }}>
        <source src={intro2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video id="myVideo3" autoPlay loop muted className="video-overlay absolute top-[15vh] left-[23vw] sm:left-[35%] lg:left-[35%] w-[40vw] object-scale-down hidden" style={{ height: '340px', minWidth: '350px' }}>
        <source src={intro3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="imageOverlay1" className="absolute top-0 left-0 w-full h-full bg-cover bg-center block" style={{ backgroundImage: `url(${hero1})`, zIndex: 2 }}></div>
      <div id="imageOverlay2" className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden" style={{ backgroundImage: `url(${hero2})`, zIndex: 2 }}></div>
      <div id="imageOverlay3" className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden" style={{ backgroundImage: `url(${hero3})`, zIndex: 2 }}></div>
      <div className="hero absolute top-0 left-0 w-full h-full bg-cover z-[600] bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.3)]"></div>
    </section>
  );
}

export default Hero;
