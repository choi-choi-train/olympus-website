import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect';
import { ArrowDownShort } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HEADER from './components/header'
import FOOTER from './components/footer'

import TITLE from './components/title'
import SOLUTION from './components/solution'
import CARD from './components/card'
import SIGNUP from './components/signup'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = () => {
    const position = window.pageYOffset;
    // console.log(position);
    setScrollPosition(position);
  }

  const handleClickScroll = () => {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  })

  function reactive_header() {
    if (scrollPosition > window.innerHeight - 300) {
      return <HEADER scrollPosition={scrollPosition}/>
    }
  }

  return (
    <div>
      {reactive_header()}
      <div className="padded container-fluid" style={{overflow: 'hidden'}}>
        <TITLE onButtonClick={handleClickScroll}/>
        <SOLUTION onButtonClick={handleClickScroll} scrollPosition={scrollPosition} mobile={isMobile}/>
        {
          isMobile? 
          <div className="container-fluid fullheight d-flex flex-column align-items-start"
          style={{marginBottom: '700px'}}>
            <img src={require('./assets/mockup1.png')} alt='mockup' style={{width: '100%'}}/>
            <h2 className="mt-5 mb-4 text-start" style={{position: 'relative', zIndex:2}}>COMMUNITY-<br/>BASED PLATFORM</h2>
            <div>
              <CARD title={'Connect'} scrollPosition={scrollPosition} scrollStart = {1300}
                  content={'Share your workouts, pictures, and progress with athletes around the world through the OLYMPUS social platform.'}/>
              <CARD title={'Compete'} scrollPosition={scrollPosition} scrollStart = {1350}
                  content={'Join contests, teams, and affinity groups to compete for badges, points, and bragging rights.'}/>
              <CARD title={'Inspire'} scrollPosition={scrollPosition} scrollStart = {1400}
                  content={'Download workouts from other athletes, whether close friends or certified professionals, to jumpstart your routine and take your workouts to the next level.'}/>
              <div className="button" style={{zIndex: 1, marginTop: '30px'}} onClick={handleClickScroll}>
                SIGN UP
              </div>
            </div>
          </div>
          : <div className="container-fluid fullheight d-flex flex-column align-items-start"
             style={{marginBottom: '200px'}}>
              <h2 className="mb-4" style={{position: 'relative', zIndex:2}}>COMMUNITY-<br/>BASED PLATFORM</h2>
              <div className="d-flex flex-row position-relative">
                <div>
                  <CARD title={'Connect'} scrollPosition={scrollPosition} scrollStart = {1300}
                      content={'Share your workouts, pictures, and progress with athletes around the world through the OLYMPUS social platform.'}/>
                  <CARD title={'Compete'} scrollPosition={scrollPosition} scrollStart = {1350}
                      content={'Join contests, teams, and affinity groups to compete for badges, points, and bragging rights.'}/>
                  <CARD title={'Inspire'} scrollPosition={scrollPosition} scrollStart = {1400}
                      content={'Download workouts from other athletes, whether close friends or certified professionals, to jumpstart your routine and take your workouts to the next level.'}/>
                  <div className="button" style={{zIndex: 1, marginTop: '30px'}} onClick={handleClickScroll}>
                    SIGN UP
                  </div>
                </div>
                <img className='mockup' src={require('./assets/mockup1.png')} alt='mockup'
                  style={{opacity: (scrollPosition-1300)/300, top: 150-75*(scrollPosition-1300)/300}}/>
              </div>
            </div>
        }
        {
          isMobile?
          <div className="container-fluid fullheight d-flex flex-column align-items-start"
          style={{marginBottom: '600px'}}>
            <img src={require('./assets/mockup2.png')} alt='mockup' style={{width: '100%'}}/>
            <h2 className="mt-5 mb-4 text-start" style={{position: 'relative', zIndex:2}}>CUTTING-EDGE<br/>ANALYTICS</h2>
            <div>
              <CARD title={'Comprehensive'} scrollPosition={scrollPosition} scrollStart = {1300}
                  content={'Track key metrics such as volume over time, PR attempts, and RPE to provide you with detailed analytics to optimize your performance.'}/>
              <CARD title={'Digestible'} scrollPosition={scrollPosition} scrollStart = {1350}
                  content={'Gain a deeper understanding of your progression through clear-cut visualizations based on your unique workout history.'}/>
              <CARD title={'Adaptable'} scrollPosition={scrollPosition} scrollStart = {1400}
                  content={'Break through plateaus with a software that’s as versatile as you are: OLYMPUS is equipped with customizable templates and the ability to update your workout in real-time.'}/>
              <div style={{marginTop: '30px'}} onClick={handleClickScroll}>
                <ArrowDownShort style={{scale:'250%'}}/>
              </div>
            </div>
          </div>
          : <div className="container-fluid fullheight d-flex flex-column align-items-start"
          style={{marginBottom: '200px'}}>
            <h2 className="mb-4" style={{position: 'relative', zIndex:2}}>CUTTING-EDGE<br/>ANALYTICS</h2>
            <div className="d-flex flex-row position-relative">
              <div>
                <CARD title={'Comprehensive'} scrollPosition={scrollPosition} scrollStart = {2300}
                      content={'Track key metrics such as volume over time, PR attempts, and RPE to provide you with detailed analytics to optimize your performance.'}/>
                <CARD title={'Digestible'} scrollPosition={scrollPosition} scrollStart = {2350}
                      content={'Gain a deeper understanding of your progression through clear-cut visualizations based on your unique workout history.'}/>
                <CARD title={'Adaptable'} scrollPosition={scrollPosition} scrollStart = {2400}
                      content={'Break through plateaus with a software that’s as versatile as you are: OLYMPUS is equipped with customizable templates and the ability to update your workout in real-time.'}/>
                <div style={{marginTop: '30px'}} onClick={handleClickScroll}>
                  <ArrowDownShort style={{scale:'250%'}}/>
                </div>
              </div>
              <img className='mockup' src={require('./assets/mockup2.png')} alt='mockup'
                style={{opacity: (scrollPosition-2300)/300, top: 150-75*(scrollPosition-2300)/300}}/>
            </div>
          </div>
        }
        <SIGNUP/>
      </div>
      <FOOTER/>
    </div>
  );
}

export default App;
