import React from 'react';

function ButtonLink({ href, className, children }) {
  // props => { className: "o que alguém passar", href: "/" }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default ButtonLink;
