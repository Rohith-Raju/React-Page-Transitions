import React, { useState, useEffect } from 'react';
import { useSpring, animated, easings } from 'react-spring';
//styles import
import styles from '../styles/Slider.module.css';

interface Props {
  text: string;
  backgroundColor: string;
  sliderDuration?: number;
  textDuration?: number;
  Direction?: 'top' | 'side';
  textColor?: string;
}

const Slider: React.FC<Props> = (props) => {
  const [load, setLoad] = useState(false);

  const loader: object = useSpring({
    config: { duration: props.sliderDuration, easing: easings.easeInOutQuint },
    to: [
      props.Direction === 'side'
        ? [{ width: load ? '100%' : '0%' }, { left: load ? '100%' : '0' }]
        : [{ height: load ? '100%' : '0%' }, { top: load ? '100%' : '0' }],
    ],
    reset: true,
  });

  const text: object = useSpring({
    config: {
      duration: props.textDuration,
      easing: easings.easeInOutElastic,
    },
    from: {
      transform: load ? 'translate(0px,100px)' : 'translate(0px,0px)',
      opacity: 0,
    },
    to: [
      {
        transform: load ? 'translate(0px,0px)' : 'translate(0px,100px)',
        opacity: 1,
      },
      {
        transform: load ? 'translate(0px,-100px)' : 'translate(0px,0px)',
        opacity: 0,
      },
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
          style={
            props.Direction === 'side'
              ? {
                  height: '100%',
                  backgroundColor: props.backgroundColor,
                  ...loader,
                }
              : {
                  width: '100%',
                  backgroundColor: props.backgroundColor,
                  ...loader,
                }
          }
          className={styles.loadscreen1}
        ></animated.div>
      </div>
      <div className={styles.text}>
        <animated.div
          style={{
            ...text,
          }}
        >
          <h1
            style={{
              color: props.textColor,
            }}
          >
            {props.text}
          </h1>
        </animated.div>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  sliderDuration: 1500,
  textDuration: 1500,
  Direction: 'top',
  textColor: 'black',
};

export default Slider;
