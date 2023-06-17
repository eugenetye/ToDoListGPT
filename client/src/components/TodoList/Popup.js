import React from 'react'
import './Popup.css'
import {VscChromeClose} from 'react-icons/vsc';
import styled from "styled-components";

const Close = styled(VscChromeClose)`
  cursor: pointer;
  margin-left: 50px
`;

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <Close className='close-btn' onClick={() => props.setTrigger(false)}></Close>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup