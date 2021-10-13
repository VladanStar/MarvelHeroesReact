import React from 'react';
import { Row } from 'react-bootstrap';
import { ComicCard } from './ComicCard/ComicCard';
import { ComicModal } from '../Modal/ComicModal';

const Comics = ({ comics, comicDetails, modalIsOpen, openModal }) => {
    return (
        <Row>
            <ComicModal comicDetails={comicDetails} modalIsOpen={modalIsOpen} openModal={openModal} />
            {comics.map(comic => <ComicCard
                name={comic.name}
                image={comic.image}
                modalImage={comic.modalImage}
                date={comic.date}
                price={comic.price}
                key={comic.id}
                comicDetails={comicDetails}
                modalIsOpen={modalIsOpen}
                openModal={openModal}
            />)}
        </Row>
    )
}

export { Comics }