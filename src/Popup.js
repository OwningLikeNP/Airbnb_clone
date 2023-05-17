import React, {useState} from 'react'

//popup component to be used for generating response to user actions

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'Popup>
        <div className='popup__inner'>
            {props.children}

        </div>
    </div>
  ) : '';
}

export default Popup