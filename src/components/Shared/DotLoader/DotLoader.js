import React from 'react';

//CSS imports
import './DotLoader.scss';

export default function DotLoader(props) {

    return (
        <div className="spinner w-100">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  
}