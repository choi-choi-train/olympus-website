import React from 'react'
import { animated, useSpring } from 'react-spring';

export default function Animation(props) {

  const mockupbgSpring = useSpring({
    top: 0,
    transform: `translate(0px, ${props.scroll/10}px)`,
    config: {
      mass: 1,
      friction: 40,
      tension: 160,
    },
  });

  const mockupcardSpring = useSpring({
    left: 0,
    translate: -props.scroll/10,
    config: {
      mass: 1,
      friction: 40,
      tension: 160,
    },
  });

  const mockupyellowcircleSpring = useSpring({
    transform: `translate(${props.scroll/20}px, ${props.scroll/20}px)`,
    left: 0,
    top: 0,
    opacity: (props.scroll > 100) ? 1/props.scroll : 1,
    config: {
      mass: 1,
      friction: 40,
      tension: 160,
    },
  });

  const mockupyellowlinesSpring = useSpring({
    transform: `translate(${props.scroll/20}px, ${props.scroll/20}px)`,
    left: 0,
    top: 0,
    opacity: (props.scroll > 100) ? 1/props.scroll : 1,
    config: {
      mass: 1,
      friction: 40,
      tension: 160,
    },
  });

  const mockuppurpSpring = useSpring({
    transform: `translate(${props.scroll/15}px, ${props.scroll/15}px)`,
    left: 0,
    top: 0,
    opacity: (props.scroll !== 0) ? 100/props.scroll : 1,
    config: {
      mass: 1,
      friction: 40,
      tension: 160,
    },
  });

  const mockupstreaksSpring = useSpring({
    transform: `translate(${props.scroll/15}px, ${props.scroll/15}px)`,
    left: 0,
    top: 0,
    opacity: (props.scroll !== 0) ? 100/props.scroll : 1,
    config: {
      mass: 1,
      friction: 40,
      tension: 160,
    },
  });

  const mockupSpring = useSpring({
    opacity: props.mockup ? 1 : 0,
  })

  return (
<animated.div className='absolute z-10 h-[110%] min-w-[500px] w-[80%] bottom-[-45%] sm:bottom-[-30%] left-[40%] sm:left-[1rem] overflow-hidden'
  style={mockupSpring}>
    <animated.div className='absolute w-full h-full z-10' style={mockupbgSpring}>
        <img id='mockupbg' className='object-contain w-full h-full' src={require('../assets/mockupanimation/mockupbg.png')} alt={'olympus mockup'}/>
    </animated.div>
    <animated.div className='absolute w-full h-full z-10' style={mockupcardSpring}>
      <img id='mockupcard' className='object-contain w-full h-full z-20' src={require('../assets/mockupanimation/mockupcard.png')} alt={'olympus mockup'}/>
    </animated.div>
    <animated.div className='absolute w-full h-full z-10' style={mockupyellowcircleSpring}>
      <img id='mockupyellowcircle' className='object-contain w-full h-full z-20' src={require('../assets/mockupanimation/mockupyellowcircle.png')} alt={'olympus mockup'}/>
    </animated.div>
    <animated.div className='absolute w-full h-full z-10' style={mockupyellowlinesSpring}>
      <img id='mockupyellowlines' className='object-contain w-full h-full z-20' src={require('../assets/mockupanimation/mockupyellowlines.png')} alt={'olympus mockup'}/>
    </animated.div>
    <animated.div className='absolute w-full h-full z-10' style={mockupstreaksSpring}>
      <img id='mockupstreaks' className='object-contain w-full h-full z-20' src={require('../assets/mockupanimation/mockupstreaks.png')} alt={'olympus mockup'}/>
    </animated.div>
    <animated.div className='absolute w-full h-full z-10' style={mockuppurpSpring}>
      <img id='mockuppurp' className='object-contain w-full h-full z-20' src={require('../assets/mockupanimation/mockuppurp.png')} alt={'olympus mockup'}/>
    </animated.div>
</animated.div>

  )
}
