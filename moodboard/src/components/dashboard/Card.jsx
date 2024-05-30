/* eslint-disable react/prop-types */

const Card = ({ title, desc, bgColor, titleColor, descColor }) => {
  return (
    <div className="card " style={{ background: `${bgColor}` }}>
      <p className="title" style={{ color: `${titleColor}` }}>
        {title}{' '}
      </p>
      <p style={{ color: `${descColor}` }}>{desc} </p>
    </div>
  );
};

export default Card;
