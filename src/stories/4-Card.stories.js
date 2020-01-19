import React from 'react';
import Card from '../components/Card';
import { Container, Row, Col } from 'react-grid-system';

export default {
  title: 'Card',
  component: Card,
};

export const Normal = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>Hello Card 1</Card>
        </Col>
        <Col>
          <Card>Hello Card 2</Card>
        </Col>
      </Row>
    </Container>
  );
};
export const Transparent = () => {
  return (
    <Container>
      <Card transparent>Hello Card</Card>
    </Container>
  );
};
