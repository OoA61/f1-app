import { useState } from 'react';
import Dropnew from './Dropnew';
import Droptrending from './Droptrending';
import Droppopular from './Droppopular';
import { FaChevronDown } from 'react-icons/fa' 
import { CSSTransition } from 'react-transition-group';

const Tabs = ({ setIsShown, data, isShown }) => {

  return (
    <div className="tabs-bar">
        <div className="tabs" >
          <div>
            <p className='tab-head' id='popular' onClick={() => setIsShown('popular')}>POPULAR <FaChevronDown className='chev'/></p> 
            <CSSTransition in = {isShown === 'popular'} unmountOnExit timeout={0} classNames="menu-popular">
              <div>
                <Droppopular data = { data.tabs[0].popular} /> 
              </div>
            </CSSTransition>
          </div>
           <div>
            <p className='tab-head' id='trending' onClick={() => setIsShown('trending')} >TRENDING <FaChevronDown className='chev'/></p>
            <CSSTransition in = {isShown === 'trending'} unmountOnExit timeout={0} classNames="menu-trending">
              <div>
                { isShown === 'trending' && <Droptrending data = { data.tabs[0].trending } />}
              </div>
            </CSSTransition>
          </div>
          <div>
            <p className='tab-head' id='new' onClick={() => setIsShown('new')}>NEW <FaChevronDown className='chev'/></p>
            <CSSTransition in = {isShown === 'new'} unmountOnExit timeout={0} classNames="menu-new">
              <div>
                { isShown === 'new' && <Dropnew data = { data.tabs[0].new } />}
              </div> 
            </CSSTransition>
          </div>
          <div>
            <p id='create'>CREATE</p>
          </div>
        </div>
    </div>
  )
}

export default Tabs
