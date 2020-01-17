import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';



export const CatalogItem = ({item}) => {
    return (
        <Card>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            </ListGroup> */}
            <Card.Body>
                <Card.Link href="#">Open</Card.Link>
                <Card.Link href="#">Add To Cart</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CatalogItem;
