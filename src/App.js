import React, { useState, useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect';
import { animated, useSpring } from 'react-spring';
import { ArrowDownShort } from 'react-bootstrap-icons';

import './App.css';

import Header from './components/header';
import Form from './components/form';

import Animation from './components/animation';

import Card from './components/card';
import EarlyAccess from './components/earlyaccess'

function App() {
  const [top, setTop] = useState(true);
  const [mockup, setMockup] = useState(true);

  const [tailwindLg, setTailwindLg] = useState(true);
  const [tailwindMd, setTailwindMd] = useState(true);

  const [circleSize, setCircleSize] = useState(0);
  const [circlePg, setCirclePg] = useState({width: 0, height: 0});

  const [newSignup, setNewSignup] = useState({width: 0, height: 0});

  const [focus, setFocus] = useState('track')
  const circleRef = useRef(null);
  const circlePlayGround = useRef(null);
  const signupRef = useRef(null);
  const trackRef = useRef(null);
  const analyzeRef = useRef(null);
  const shareRef = useRef(null);


  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
      setScroll(window.scrollY);
      handleResize();
      if (window.scrollY >= (window.innerHeight)/2) {
        setMockup(false);
        setTop(false);
      } else {
        setMockup(true);
        setTop(true);
      }

      if (shareRef.current.getBoundingClientRect().y <= window.innerHeight*0.5) {
        setFocus('share');
      } else if (analyzeRef.current.getBoundingClientRect().y <= window.innerHeight*0.5) {
        setFocus('analyze');
      } else if (trackRef.current.getBoundingClientRect().y <= window.innerHeight*0.5) {
        setFocus('track');
      }
      
      if (signupRef.current.getBoundingClientRect().y <= window.innerHeight*0.5) {
        setFocus('signup');
      }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setTailwindLg(true);
    } else {
      setTailwindLg(false);
    }

    if (window.innerWidth >= 768) {
      setTailwindMd(true);
    } else {
      setTailwindMd(false);
    }

    setCircleSize(circleRef.current.getBoundingClientRect().width);
    setCirclePg({width: circlePlayGround.current.getBoundingClientRect().width,
                height: circlePlayGround.current.getBoundingClientRect().height});
  };
  
  console.log(circlePg);  
  
  useEffect(() => {
    handleResize();
    handleScroll();
    setCircleSize(circleRef.current.getBoundingClientRect().width);
    setCirclePg({width: circlePlayGround.current.getBoundingClientRect().width,
                height: circlePlayGround.current.getBoundingClientRect().height});
  }, [])

  useEffect(() => {      
      window.addEventListener('wheel', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });

      return () => {
          window.removeEventListener('wheel', handleScroll);
          window.removeEventListener('resize', handleResize);
      };
  }, []);
  
  const gradientSpring = useSpring({
    top: 0,
    transform: top ? 'translate(0px, -20%)' : 'translate(0px, -50%)', 
    width: 'calc(500px + 60vw)',
    maxWidth: '1680px',
    aspectRatio : '1/1',
    config: {
      mass: isMobile ? 0.5 : 1,
      friction: 30,
      tension: 160,
    },
  });

  const earlyAccessSpring = useSpring({
    right: 0,
    cursor: 'pointer',
    translate: mockup || focus === 'signup' ? '15rem' : '-2rem',
    config: {
      mass: isMobile ? 0.5 : 1,
      friction: 40,
      tension: 160,
    },
  });

  const circleSpring = useSpring({
    width: mockup ? '40%' : '35%',
    right: circlePg.width/2 - circleSize/2,
    bottom: circlePg.height/2 - circleSize/2,
    transform: tailwindLg ? (mockup ? `translate(${(circlePg.width * 0.2)}px, ${(circlePg.height/2)}px)` : 
                                      (focus === 'track' || focus === 'share' ? `translate(${-(circleSize * 0.5)}px, ${0}px)`
                                                                              : (focus === 'analyze' ? `translate(${(circleSize * 0.5)}px, ${0}px)` : `translate(0px, ${-circlePg.height/2}px)`)))
                          : (mockup ? `translate(${(circlePg.width * 0.2)}px, ${(circlePg.height/2)}px)` : 
                            (focus === 'track' || focus === 'share' ? `translate(${-(circleSize * 0.25)}px, ${-circlePg.width/2}px)`
                                                                    : (focus === 'analyze' ? `translate(${(circleSize * 0.25)}px, ${-circlePg.width/2}px)` : `translate(0px, ${-circlePg.height/2}px)`))),
    opacity: focus === 'signup' ? 0 : 1,
    config: {
      mass: isMobile ? 0.5 : 1,
      friction: 40,
      tension: 120,
    },
  });

  const circlegradientSpring = useSpring({
    right: 0,
    transform: focus !== 'signup' ? `translate(${-scroll/3}px, 0px)` : `translate(${-circleSize/2}px, ${-circleSize/2}px)`,
    config: {
      mass: isMobile ? 0.5 : 1,
      friction: 30,
      tension: 160,
    },
  });

  const animationSpring = useSpring({
    opacity: mockup ? 1 : 0,
  })

  return (
    <div>
      <div className='w-full overflow-hidden'>
      <Header focus={focus} setFocus={setFocus} signupRef={signupRef}/>
      <div className='relative text-[white] z-40 w-full mx-auto max-w-[1680px] h-screen min-h-[1000px] flex justify-between items-start sm:items-center avenirroman'>
        
        <div className='relative z-50 w-[80%] sm:w-[70%] mx-auto max-w-[1176px] h-[40%] sm:h-[50%] flex flex-col justify-between items-start mt-[20vw] sm:mt-0'>
          <div>
            <div className='avenirbook text-[2.5rem] md:text-[4rem]'>Ditch the Notebook.</div>
            <p className='w-[20rem] md:w-[25rem]' style={{color: 'rgba(243, 240, 254, 0.60)'}}>
              <mark>OLYMPUS</mark> is a mobile platform that empowers weightlifters to track, analyze, and share workouts so you can focus on lifting, not logging.
            </p>
          </div>
          <div className='w-[40%] min-w-[20rem] -mt-[5rem] sm:mt-[1rem]'>
            <div className='text-[1.5rem]'>Get Early Access</div>
            <p className='mb-[0.5rem] mt-[1rem]' style={{color: 'rgba(243, 240, 254, 0.60)'}}>Enter Email Address:</p>
            <Form/>
          </div>
        </div>

        <animated.div className='absolute w-[100%] z-20 sm:w-[50%] lg:w-[55%] right-0 top-0 h-screen min-h-[700px]'
          style={animationSpring}>
          {
            isMobile
            ?
            <img className='absolute object-contain z-10 h-[90%] sm:h-[120%] w-auto sm:min-w-[500px] bottom-[-45%] sm:bottom-[-40%] left-[40%] sm:left-[2rem] mt-[10rem]' src={require('./assets/mockup.png')} alt={'olympus mockup'}/>
            :
            <Animation scroll={scroll} mockup={mockup}/>
          }
        </animated.div>

        {
          !isMobile
          ?
          <div ref={circlePlayGround} className='fixed z-10  max-w-[1680px] w-screen h-screen min-h-[700px] max-h-[900px] top-0 m-auto'>
          <animated.div ref={circleRef} className='absolute min-w-[500px] aspect-[1/1] bg-gold rounded-full overflow-hidden'
          style={circleSpring}>
          <animated.div className='absolute w-[60%] aspect-square bg-purple rounded-full blur-[150px]' style={circlegradientSpring}/>
        </animated.div>  
          </div>
          :
          <div ref={circlePlayGround} className='absolute z-10 w-full h-screen min-h-[700px] max-h-[900px] top-0'>
            <div ref={circleRef} className='absolute w-[500px] right-[-30%] bottom-[-30%] aspect-square bg-gold rounded-full overflow-hidden'>
              <div className='absolute w-[60%] aspect-square bg-purple rounded-full blur-[150px] right-0'/>
            </div>
          </div>
        }


        <animated.div className='fixed flex justify-center items-center mx-auto w-screen h-screen max-w-[1680px] min-h-[700px] max-h-[900px]' style={gradientSpring}>
          <img className='object-contain min-h-full w-auto' src={require('./assets/smoothgradientbg.png')} alt='background'/>
        </animated.div>
      </div>

      <div className='mt-[20rem] relative z-40 w-[80%] lg:w-[70%] max-w-[1176px] mx-auto flex flex-col justify-center space-y-[10rem]'>
        <div ref={trackRef} className='relative w-full h-screen min-h-[700px] text-white flex flex-col lg:flex-row justify-center lg:justify-between items-between lg:items-center z-10
                                        mb-[10rem] lg:mb-0'>
          <img className='w-[100%] md:w-[70%] lg:w-[50%] h-auto object-contain mb-[2rem]' src={require('./assets/trackmockupfull.png')} alt='track screen'/>
          <Card justify={'end'} title={'Track'} text={'Optimize your performance by easily tracking key metrics over time: volume, PRs, and RPE right at your fingertips.'}/>
        </div>
        <div ref={analyzeRef} className='relative w-full h-screen min-h-[700px] text-white flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-end lg:items-center z-10
                                        mb-[10rem] lg:mb-0'>
          <div className='flex w-full justify-start'> 
            <Card title={'Analyze'} text={'Turn plateaus into PRs with dynamic data visualizations, competitive analytics, and customized performance recommendations.'}/>
          </div>
          <img className='w-[100%] md:w-[70%] right-0 lg:w-[50%] h-auto object-contain mb-[2rem]' src={require('./assets/analyzemockupfull.png')} alt='analyze screen'/>
        </div>
        <div ref={shareRef} className='relative w-full h-screen min-h-[700px] text-white flex flex-col lg:flex-row justify-center lg:justify-between items-between lg:items-center z-10'>
          <img className='w-[100%] md:w-[70%] lg:w-[50%] h-auto object-contain mb-[2rem]' src={require('./assets/sharemockupfull.png')} alt='share screen'/>
          <Card justify={'end'} title={'Share'} text={'Showcase your progress, support your friends, and discover new workouts all from the Olympus community.'}/>
        </div>
        <div className='bg-gold rounded-full w-[50%] h-[70vh] right-0 my-auto fixed z-0'/>
      </div>

      <div ref={signupRef} className='relative z-40 w-[80%] lg:w-[70%] h-screen min-h-[900px] max-w-[1176px] mx-auto flex flex-col justify-center items-center'>
        <div className='text-white avenirroman w-[80%]'>
          <div className='avenirbook text-[2.5rem] md:text-[4rem]'>Try Olympus</div>
          <p className='w-[20rem] md:w-[25rem] mb-[5rem]' style={{color: 'rgba(243, 240, 254, 0.60)'}}>
            Enter your email address, and receive details on joining our community of test users.
          </p>
          <Form/>
        </div>
      </div>

      </div>

      <animated.div className='fixed bottom-[2rem] z-50' style={earlyAccessSpring} onClick={()=>{setFocus('signup'); signupRef.current.scrollIntoView({behavior: 'smooth'});}}>
        <EarlyAccess/>
      </animated.div>
    </div>
  );
}

export default App;
