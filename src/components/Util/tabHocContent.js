import React from 'react';

export default (WrappedComponent) => {
  const tabHocContent = ({ ...props }) => <WrappedComponent {...props} />;

  return tabHocContent;
};
