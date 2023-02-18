import React from 'react';
import { Form, Button } from 'src/components/shared';
import { Container, Row, Col } from 'react-bootstrap';
import toast from 'src/utils/toast';
function index() {
  return (
    <Container>
      <Row>
        <Col>
          <Button
            variant="danger"
            size="xl"
            type="submit"
            onClick={() => {
              toast.info('Please check you login details and try again');
              toast.danger('Loren ipsum sit amet!');
              toast.success('Loren ipsum sit amet!');
              toast.warning('Loren ipsum sit amet!');
            }}
          >
            Button
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default index;
