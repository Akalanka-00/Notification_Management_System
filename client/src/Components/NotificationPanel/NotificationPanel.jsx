import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import Button from "react-bootstrap/Button";
import baseUrl from "../../Apis/baseUrl";

const NotificationPanel = ({ isDev }) => {
  const [notificationData, setNotificationData] = useState([]);
  const [user_id, setUser_id] = useState("wzPWOYMQpdxuiP1OfsCH");

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
        alert(err);
      });
  }

  useEffect(()=>{
   //getUnReadNotificationList();

  })
  return (
    <div className="notification-card-list">
      <div className="btn-container">
        <Button
          variant="primary"
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            getUnReadNotificationList();
            {
              notificationData.map((element, index) => {
                if (!element.reviewed_by_user && element.customer_broadcast) {
                  //mark as read
                }
              });
            }
          }}
        >
          Notifications
        </Button>
      </div>
      <div className="new-notification">
        {notificationData.map((element, index) => {
          if (
            !element.reviewed_by_user &&
            !element.customer_broadcast == isDev
          ) {
            return <NotificationCard key={index} notificationData={element} />;
          }
          if (
            !element.reviewed_by_user &&
            element.developer_broadcast == isDev
          ) {
            return <NotificationCard key={index} notificationData={element} />;
          }
        })}
      </div>

      <div className="new-notification">
        {notificationData.map((element, index) => {
          if (element.reviewed_by_user && element.customer_broadcast) {
            return <NotificationCard key={index} notificationData={element} />;
          }
        })}
      </div>
    </div>
  );
};

export default NotificationPanel;
