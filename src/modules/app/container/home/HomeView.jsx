import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Spinner } from 'src/components/shared';
import Posts from '../components/Posts';
import CreatePost from '../components/CreatePost';

const HomeView = ({ posts, loader, ...props }) => {
  return (
    <Container fluid>
      <Row className="py-5 px-3">
        <Col>
          {loader.fetch ? (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner color="#343a40" className="pr-2" /> Fetching posts...
            </div>
          ) : (
            <Posts posts={posts} />
          )}
        </Col>
        <Col>
          <CreatePost cretePost={props.cretePost} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeView;
