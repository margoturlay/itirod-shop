import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContexts';

const Title = ({ name, title }) => {
  const { theme } = useContext(ThemeContext);

  const textClass = theme
    ? 'text-capitalize font-weight-bold text-light custom-font'
    : 'text-capitalize font-weight-bold text-dark custom-font';

  const strongClass = theme ? 'text-primary custom-strong-font' : 'text-blue custom-strong-font';

  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className={textClass}>
          {name}{' '}
          <strong className={strongClass}>
            {title}
          </strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
