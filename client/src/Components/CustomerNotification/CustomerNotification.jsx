import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import baseUrl from "../../Apis/baseUrl";
import CustomerNotificationCard from "./CustomerNotificationCard";

const CustomerNotification = () => {
  const [notificationData, setNotificationData] = useState([]);
  const [user_id, serUser_id] = useState("wzPWOYMQpdxuiP1OfsCH");

  function getUserID() {
    return "QZS3ql8T9MD8ETj3IobD";
  }

  function getUnReadNotificationList() {
    console.log(user_id);
    baseUrl
      .get("/api/customer/get/marked/notification" + user_id)
      .then((res) => {
        setNotificationData(res.data);
        console.log(notificationData.title);
        // alert(res.data)
      })
      .catch((err) => {
        alert(err)
      });
  }


  function NotificationModel(props) {
    let count = 0;
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {notificationData.map((element, index) => (
              <div key={index}>
                {count < 3 ? (
                  <>
                    <Row>
                      {(count = count + 1)}
                      <CustomerNotificationCard notificationData={element} />
                    </Row>
                  </>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button href="/customer/notifications" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }


  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="notification-container">
      <div className="notification-btn">
        <div className="notofications">
          <NotificationModel
            show={modalShow}
            onHide={() => setModalShow(false)}
          />{" "}
        </div>

        <Button
          variant="primary"
          onClick={() => {
            getUnReadNotificationList();
            setModalShow(true);
          }}
        >
          Notifications
        </Button>
      </div>
    </div>
  );
};

export default CustomerNotification;
