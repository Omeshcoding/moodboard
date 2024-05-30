import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <h2 className="flex-auto text-xl sm:text-3xl max-md:pl-4 xl:text-4xl font-medium">
        {' '}
        SubhMangalPlanning{' '}
      </h2>
    </Link>
  );
};

export default Logo;
