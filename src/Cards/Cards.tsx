import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards() {
  return (
    <div className="row">
      <div className="col-lg-4">
        <Card style={{ width: '18rem' }}>
          {/* Card Content */}
        </Card>
      </div>
      <div className="col-lg-4">
        <Card style={{ width: '18rem' }}>
          {/* Card Content */}
        </Card>
      </div>
      <div className="col-lg-4">
        <Card style={{ width: '18rem' }}>
          {/* Card Content */}
        </Card>
      </div>
    </div>
  );
}

export default Cards;
