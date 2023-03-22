import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';import Card from 'react-bootstrap/Card';



import './NotificationCard.css'
import Button from 'react-bootstrap/esm/Button';
const NotificationCard = ({notificationData}) => {

  const bg = [{background:"#ffffff"},{background:"#E4EDFA"}]

  return (
    <div className='notification-card-container'>
      <Card className='notification-card' style={notificationData.reviewed_by_user?bg[0]:bg[1]}>
      <Card.Body>
        <Container>
          <Row>
            <Col sm={10}>
            <Card.Title>{notificationData.title}</Card.Title>
        <Card.Text>
          {notificationData.description}
        </Card.Text>
            </Col>
            
            <Col sm={2}>
              <Button onClick={()=>{
                
              }}>Mark as Read</Button>
            </Col>
          </Row>
        </Container>
        
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default NotificationCard
