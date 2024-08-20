import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// import { Container } from './styles';
import { Modal } from 'react-bootstrap';
interface ModalTypes {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
    title: string
    children: React.ReactNode
}

import styles from './Modal.module.css'
const ModalComponente: React.FC<ModalTypes> = ({ setShowModal, showModal, title, children }) => {
    const handleClose = () => setShowModal(false)
    return (
        <>
            <Modal show={showModal} onHide={handleClose}
            style={{borderRadius: 20}}
            centered	

            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        children
                    }
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ModalComponente;