import React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  duration?: number;
  styles?: object;
}

const Opacity: React.FC<Props> = (props) => {
  const opacity = useSpring({
    delay: 2500,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div
      style={{
        ...props.styles,
        ...opacity,
      }}
    >
      {props.children}
    </animated.div>
  );
};

Opacity.defaultProps = {
  duration: 2000,
};

export default Opacity;
