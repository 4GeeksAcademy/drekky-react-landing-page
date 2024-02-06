import React from "react";

const Card = () => {
  return (
    <div className='card'>
      <div className='image-box'>
        <img
          src='https://placehold.co/300x170'
          alt='placeholder'
        />
      </div>
      <div className='card-text'>
        <h4>Card title</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eligendi, in sed!
          Praesentium sunt, dolorum, adipisci
          consequatur saepe numquam dolore ad assumenda
          quidem consequuntur officiis incidunt
          accusamus doloribus iusto animi. Provident?
        </p>
      </div>
      <div className='card-cta'>
        <a href='/' className='cta-blue'>
          Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Card;
