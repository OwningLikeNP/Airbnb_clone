import React, {useState} from 'react'

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