import { MdOutlineStar } from 'react-icons/md';
// eslint-disable-next-line react/prop-types
const Rating = ({ styles }) => {
  return (
    <div className="flex">
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <span className={styles} key={index}>
            <MdOutlineStar />
          </span>
        ))}
    </div>
  );
};

export default Rating;
