import React, { useState, useEffect } from 'react';
import { useSpring, animated, easings } from 'react-spring';

//styles import
import styles from '../styles/Slider.module.css';

const Slider: React.FC = () => {
  const [load, setLoad] = useState(false);

  const loader: object = useSpring({
    config: { duration: 1500, easing: easings.easeInOutQuint },
    to: [{ width: load ? '100%' : '0%' }, { left: load ? '100%' : '0' }],
    reset: true,
  });

  const text: object = useSpring({
    config: { duration: 1500, easing: easings.easeInOutElastic },
    from: { transform: 'translate(0px,100px)', opacity: 0 },
    to: [
      { transform: 'translate(0px,0px)', opacity: 1 },
      { transfrom: 'translate(0px,-100px)', opacity: 0 },
    ],
    reset: true,
  });

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loadcontainer}>
        <animated.div
          style={loader}
          className={styles.loadscreen1}
        ></animated.div>
      </div>
      <animated.div style={text} className={styles.text}>
        <h1>hello</h1>
      </animated.div>
    </div>
  );
};

export default Slider;
