import {
  background_large,
  background_med, 
  background_small 
} from '../img';
import React from 'react';

export const backgroundImage = (): React.CSSProperties => {
    const isMobile = window.matchMedia("(max-width: 480px)")
    const isIpad = window.matchMedia("(max-width: 770px)")
    const bgImg = isMobile.matches ? background_small : (isIpad.matches ? background_med: background_large);
    const logoStyle = {
      backgroundImage: 'url(' + bgImg.default as string +')',
      height: '100vh',
      position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      zIndex: -1,
      width: '100vw',
    }
    return logoStyle as React.CSSProperties;
}
