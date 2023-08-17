import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import moment from "moment";
import { useOrderContext } from "../contexts/OrderContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const OrderPage = () => {
  moment.updateLocale("en", { week: { dow: 1 } });
  const startOfWeek = moment().startOf("week");
  const [selectedIteration, setSelectedIteration] = useState(null);
  const { orders, postOrder, getOrders } = useOrderContext();

  useEffect(() => {
    getOrders();
  }, []);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeSlots = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const date = daysOfWeek.map((_, index) =>
    startOfWeek.clone().add(index, "day").format("l")
  );

  const handleOrder = (time, day, name) => {
    const newOrder = {
      titleOrder: "Massages",
      time: time,
      day: day,
      user: name,
    };

    postOrder(newOrder);
    getOrders();
  };

  // const handleCellClick = (iteration) => {
  //   setSelectedIteration(iteration);
  // };

  // const generateCellContent = (iteration) => {
  //   return iteration !== null ? iteration + 1 : "-";
  // };

  // const getSelectedIterationValue = () => {
  //   if (selectedIteration !== null) {
  //     // Do something with the selected iteration value
  //     return selectedIteration + 1; // Adding 1 to match the numbering
  //   }
  //   return null;
  // };

  return (
    <div>
      <div className="calendar">
        <div>
          <h2
            style={{
              color: "white",
              marginTop: "100px",
              textAlign: "center",
              fontSize: "50px",
            }}
          >
            Massage
          </h2>
        </div>
        <Table
          bordered
          style={{
            marginTop: "70px",
            backgroundColor: "#0d7e83",
            marginBottom: "70px",
          }}
        >
          <thead>
            <tr>
              <th style={{ backgroundColor: "#ffaf87" }}>Days of Week</th>
              {daysOfWeek.map((day) => (
                <th key={day} style={{ backgroundColor: "#ffaf87" }}>
                  {day}
                </th>
              ))}
            </tr>
            <tr>
              <th style={{ backgroundColor: "#ffaf87" }}>Working time</th>
              {date.map((item) => (
                <th key={item} style={{ backgroundColor: "#ffaf87" }}>
                  {/* {startOfWeek.clone().add(item, "day").format("l")} */}
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ margin: "15px" }}>
            {timeSlots.map((time, timeIndex) => (
              <tr key={time}>
                <td
                  style={{
                    backgroundColor: "#ffaf87",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {time}
                </td>
                {daysOfWeek.map((_, dayIndex) => {
                  const iteration = timeIndex * daysOfWeek.length + dayIndex;
                  const cellOrders = orders.filter(
                    (order) =>
                      order.time === time && order.day === date[dayIndex]
                  );
                  return (
                    <td
                      key={dayIndex}
                      style={{
                        border: "1px solid white",
                        padding: "5px",
                        cursor: "pointer",
                        backgroundColor:
                          selectedIteration === null
                            ? "transparent"
                            : selectedIteration === iteration
                            ? "cyan"
                            : "transparent",
                      }}
                      onClick={(e) => {
                        const result = window.confirm(
                          "Do you want to take a time for massage?"
                        );
                        if (result) {
                          const name = prompt("Enter your name...");
                          handleOrder(time, date[dayIndex], name);
                        }
                      }}
                    >
                      {cellOrders.map((order) => (
                        <div key={order.orderId}>{order.user}</div>
                      ))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Link to="/services">
        <span className="order_info">
          Не работает на мобильных устройствах. Перейдите на Сервисную страницу
        </span>
      </Link>
    </div>
  );
};

export default OrderPage;
