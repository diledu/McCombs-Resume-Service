import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import Sidebar from './Sidebar';
import CreateResume from './CreateResume';
import Settings from './Settings';
import { motion } from "framer-motion";

function Dashboard() {
  const [selectedItem, setSelectedItem] = useState('');
  const [animateCreate, setAnimateCreate] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(null);
  const [isAnimationReversing, setIsAnimationReversing] = useState(false);

  const transitions = useTransition(selectedItem, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  const handleCreate = (buttonRect) => {
    setButtonPosition(buttonRect);
    setAnimateCreate(true);
    setIsAnimationReversing(false);
  };

  const handleNewButtonPress = () => {
    setIsAnimationReversing(true);
    setTimeout(() => {
      setAnimateCreate(false);
      setSelectedItem('My Resumes');
      setIsAnimationReversing(false);
    }, 500); // Faster duration for the reverse animation
  };

  return (
    <div className="flex relative">
      <Sidebar onItemSelected={setSelectedItem} />
      {transitions((style, item) => {
        if (item === 'My Resumes') {
          return (
            <animated.div style={style} className="z-10">
              <CreateResume onCreate={handleCreate} />
            </animated.div>
          );
        } else if (item === 'Settings') {
          return (
            <animated.div style={style} className="z-10">
              <Settings />
            </animated.div>
          );
        }
        return null;
      })}
      {(animateCreate || isAnimationReversing) && buttonPosition && (
        <motion.div
          initial={{ clipPath: `circle(${isAnimationReversing ? '150%' : '30px'} at ${buttonPosition.left - 240}px ${buttonPosition.top}px)` }}
          animate={{ clipPath: `circle(${isAnimationReversing ? '30px' : '150%'} at ${buttonPosition.left - 240}px ${buttonPosition.top}px)` }}
          transition={{ duration: isAnimationReversing ? 0.5 : 1 }} // Faster duration when reversing
          className="absolute top-0 right-0 h-full bg-gray-100 z-50"
          style={{
            width: `calc(100% - 20rem)`,
            boxShadow: '0 0 0 2px black', // Add a black border during the animation
            border: '2px solid gray-200', // Ensure the border is visible throughout the animation
          }}
        >
          <button
            onClick={handleNewButtonPress}
            className="absolute bottom-10 right-10 bg-blue-500 text-white p-2 rounded transform transition-transform hover:scale-110"
          >
            EXIT
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Dashboard;
