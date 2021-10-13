import React from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../../shared/customStyles';
import { Container, Row, Col } from 'react-bootstrap';
import style from './ComicModal.module.css';
import { convertDate } from '../../../shared/utilities';

const ComicModal = ({ comicDetails, modalIsOpen, openModal }) => {
    const { name, modalImage, date, price } = comicDetails;
    return (
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => { openModal({}) }}
            style={customStyles}
            contentLabel="Hero Modal"
        >
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className={style.textCenter}>
                        <img src={modalImage} alt='modalImg' className={style.width} />
                    </Col>
                    <Col lg={8} md={8} sm={12} xs={12} className={style.marginTop}>
                        <p className={`${style.marginTop} ${style.marginBottom}`}>Name:</p>
                        <h4 className={style.bold}>{name}</h4>
                        <p className={`${style.marginTop} ${style.marginBottom}`}>Date:</p>
                        <h4 className={style.bold}>{convertDate(date)}</h4>
                        <p className={`${style.marginTop} ${style.marginBottom}`}>Price:</p>
                        <h4 className={style.bold}>{`${price} $`}</h4>
                    </Col>
                </Row>
            </Container>

        </Modal>
    )
}

export { ComicModal }