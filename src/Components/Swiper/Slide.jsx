import React from 'react';
import '../../css/Slide.css';

const Slide = ({ name, color, image }) => {



  return (
    <div className="container__slide">
      <a>
        <img className="content__img" src={image}/>
      </a>
      <footer className="footer__slide">
        {name}
      </footer>
    </div>
  );
};

export default Slide;