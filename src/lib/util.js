import background_large from '../img/bg_large.jpg';
import background_med from '../img/bg_680.jpg'
import background_small from '../img/bg_480.jpg';

export const backgroundImage = () => {
    const isMobile = window.matchMedia("(max-width: 480px)")
    const isIpad = window.matchMedia("(max-width: 770px)")
    const bgImg = isMobile.matches ? background_small : (isIpad.matches ? background_med: background_large);
    const logoStyle = {
      backgroundImage: 'url('+ bgImg +')',
      height: '100vh',
      position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      zIndex: -1,
      width: '100vw',
    }
    return logoStyle;
}
