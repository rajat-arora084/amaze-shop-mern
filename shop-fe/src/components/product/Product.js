import React, { Profiler } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";

const Product = ({ _id, name, image, rating, numReviews, price }) => {
  return (
    <Card className="rounded my-3 p-3">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Title as="div" className="p-2">
        {name}
      </Card.Title>
      <Card.Text as="div" className="p-2">
        <Rating prodRating={rating} totalReviews={numReviews} />
      </Card.Text>
      <Card.Text as="h3" className="p-2">
        ${price}
      </Card.Text>
    </Card>
  );
};

export default Product;
