import React from "react";
import { Container, Image, Body, Title, Text,Button } from "./styles/card";

export default function Card({ children, ...resProps }) {
  console.log(resProps);
  return <Container {...resProps}>{children}</Container>;
}

Card.Image = function CardImage({ src, alt, ...resProps }) {
  return <Image src={src} alt={alt} {...resProps} />;
};
Card.Body = function CardBody({ children, ...resProps }) {
  return <Body {...resProps}>{children}</Body>;
};
Card.Title = function CardTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};

Card.Text = function CardText({ children, ...resProps }) {
  return <Text {...resProps}>{children}</Text>;
};
Card.Button = function CardButton({ children, ...resProps }) {
    return <Button {...resProps}>{children}</Button>;
  };
  