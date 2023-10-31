import React,{Fragment} from 'react'
import ReactDOM  from 'react-dom'
import styles from './Modal.module.css'

const Backdrop = (props)=>{
    return (<div className={styles.backdrop} onClick={props.onClose}></div>)
}

const ModalOverlay = (props)=>{
    return (
        <div className={styles.modal}> {props.children}</div>
    )
}

const portalElement = document.getElementById('overlays')

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}
