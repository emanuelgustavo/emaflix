import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ href, className, children }) {
  // props => { className: "o que alguém passar", href: "/" }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default ButtonLink;

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
