import React from 'react';
import '../assets/styles/components/Carrousel.scss';

const Carrousel = ({children}) =>(
<div className="Carrousel">
<section className="carousel">
      <div className="carousel__container">
        {children}
     </div>
</section>
</div>
);

export default Carrousel;