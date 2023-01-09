import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom"
function UsersItem({name,email,address,phone,id}) {
  let {street} = address;
  return (
    <div>
      <Card style={{ width: "18rem" }} className="bg-dark text-white big-show">
        <Card.Img
          variant="top"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d2cdf40760693.578c9a46bcad6.gif"
        />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <br />
          <Card.Subtitle>Email: {email}</Card.Subtitle>
          <br />
          <Card.Subtitle>Street: {street}</Card.Subtitle>
          <br />
          <Card.Footer>Phone: {phone}</Card.Footer>
          <br />
          <Button variant="primary">
            <Link to={`/posts/${id}`} style={{all:"unset"}}>Posts</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UsersItem