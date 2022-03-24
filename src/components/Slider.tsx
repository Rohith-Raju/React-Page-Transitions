import React, { useState } from 'react';
import { useSpring, animated, easings } from 'react-spring';

//styles import
import styles from '../styles/Slider.module.css';

const Slider: React.FC = () => {
  const [click, setClick] = useState(false);

  const props: object = useSpring({
    config: { duration: 1500, easing: easings.easeInOutQuint },
    to: [{ width: click ? '100%' : '0%' }, { left: click ? '100%' : '0' }],
  });

  return (
    <>
      <button onClick={() => setClick(true)}>click</button>
      <div className={styles.loadcontainer}>
        <animated.div
          style={props}
          className={styles.loadscreen1}
        ></animated.div>
      </div>
    </>
  );
};

export default Slider;
