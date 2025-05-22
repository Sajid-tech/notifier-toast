import { CSSProperties } from 'react';

export interface AnimationConfig {
  duration: number;
  easing: string;
}

export const defaultAnimationConfig: AnimationConfig = {
  duration: 300,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

export const getEnterAnimation = (
  position: string,
  config: AnimationConfig = defaultAnimationConfig
): CSSProperties => {
  const [vertical, horizontal] = position.split('-');
  let transform = '';

  if (vertical === 'top') {
    transform = 'translateY(-100%)';
  } else if (vertical === 'bottom') {
    transform = 'translateY(100%)';
  }

  if (horizontal === 'left') {
    transform += ' translateX(-10px)';
  } else if (horizontal === 'right') {
    transform += ' translateX(10px)';
  }

  return {
    opacity: 0,
    transform,
    transition: `transform ${config.duration}ms ${config.easing}, opacity ${config.duration}ms ${config.easing}`,
  };
};

export const getExitAnimation = (
  position: string,
  config: AnimationConfig = defaultAnimationConfig
): CSSProperties => {
  const [vertical, horizontal] = position.split('-');
  let transform = '';

  if (vertical === 'top') {
    transform = 'translateY(-10px)';
  } else if (vertical === 'bottom') {
    transform = 'translateY(10px)';
  }

  if (horizontal === 'left') {
    transform += ' translateX(-5px)';
  } else if (horizontal === 'right') {
    transform += ' translateX(5px)';
  }

  return {
    opacity: 0,
    transform,
    transition: `transform ${config.duration}ms ${config.easing}, opacity ${config.duration}ms ${config.easing}`,
  };
};

export const generateKeyframes = (): string => `
  @keyframes tinkr-enter {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes tinkr-exit {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }
  
  @keyframes tinkr-loading-spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;