import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { PanelButton } from './PanelButton';
import { PanelTrigger } from './PanelTrigger';

export const PanelHeader = ({ handlePrev, handleNext, handleClick, children }) => {
  return (
    <div className='d-flex justify-content-center gap-2 align-items-center mb-3'>
      <PanelButton handleClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></PanelButton>
      <PanelTrigger handleClick={handleClick ? handleClick : null}>
        {children}
      </PanelTrigger>
      <PanelButton handleClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></PanelButton>
    </div>
  )
}
