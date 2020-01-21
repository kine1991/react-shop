import React from 'react';
import Card from 'react-bootstrap/Card';

export const CatalogItem = ({ item }) => {
  return (
    <Card>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Open</Card.Link>
        <Card.Link href="#">Add To Cart</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CatalogItem;
