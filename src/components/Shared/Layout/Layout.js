import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";

import DotLoader from '../DotLoader';
import icons from '../../../assets/icons/svg-icons.svg';

//SCSS imports
import './Layout.scss';
import styleVariables from '../../../config/variable.scss';

export default function Layout(props) {
  const history = useHistory();

 useEffect(()=>{
  window.scrollTo(0,0);
  },[])

    return (
      <main>
        <section  className="layout-main">
          <div className="mb-1 mobile-header">
            <div className="d-flex">
              <span className="back-naviagtion-menu is-hidden-in-tablet pb-2">
                <svg className="icon left-caret-icon" onClick={history.goBack}>
                  <use xlinkHref={`${icons}#left`} />
                </svg>
              </span>

              <span className="page-name-text text-center is-hidden-in-tablet pb-2">{props.headerTitle}</span>
            </div>
            <div className="w-100">
            <BarLoader
             css={`width:100%;`}
             color={styleVariables.primarycolor1}
             loading={props.pageLoader}
            />
            {!props.pageLoader && <div className="mb-2" />}
            </div>
            </div>
         <div className={`layout-content container ${props.btnText && `height-mgt`}`}>
               {props.children}
          
        {props.btnText && (
             <div className="layout-button px-2 fix-btn"> 


         {!props.btnDisable ?
            ( <>
            {props.paymentProcessStatus ? <DotLoader /> : 
            (<Button
              size="lg"
              className="w-100 spn-btn-config" 
              onClick={props.processPayment}
              >
               {props.btnText}
         </Button>)
            }
            
           </>
            ):
          <div className="w-100 spn-btn-config-disable" >
          <div className="disable-text w-60"> {props.btnDisableText}</div>
          </div> 
            }
            

          </div>
         )} 
         
         </div>
          
        </section>
      </main>
    );
  
}

Layout.propTypes = {
  dotLoader: PropTypes.bool,
  pageLoader:PropTypes.bool
}

Layout.defaultProps = {
  headerTitle:' ',
  dotLoader:false,
  pageLoader:false,
  btnText:null,
  btnPath:'/',
  btnDisable:false,
  btnDisableText:''
};