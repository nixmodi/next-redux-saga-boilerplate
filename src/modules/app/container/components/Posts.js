import React from 'react';
import { Table } from 'react-bootstrap';

const Posts = ({ posts }) => {
  return (
    <Table striped bordered hover variant="">
      <thead>
        <tr>
          <th>Posts</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => {
          return (
            <tr key={post.id}>
              <td>{post.title}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Posts;
