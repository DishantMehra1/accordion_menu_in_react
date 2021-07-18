import React from 'react'

import Accordion from './Accordion'
import { accordionData } from './accordionData'
import './accordion.css'

const AccordionMenu = () => {
  return (
    <>
      <h1>Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  )
}

export default AccordionMenu
