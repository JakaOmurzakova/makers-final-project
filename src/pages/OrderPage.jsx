import React from "react";
import { Table } from "react-bootstrap";
import moment from "moment";

const OrderPage = () => {
  moment.updateLocale("en", { week: { dow: 1 } });
  const startOfWeek = moment().startOf("week");
  // const endOfWeek = moment().endOf("week");

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

  const generateCellContent = () => {
    // Generate the content for each cell here
    return "Table cell";
  };

  return (
    <div>
      <Table style={{ marginTop: "100px" }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: "#f8c43a" }}>Days of Week</th>
            {daysOfWeek.map((day) => (
              <th key={day} style={{ backgroundColor: "#f8c43a" }}>
                {day}
              </th>
            ))}
          </tr>
          <tr>
            <th style={{ backgroundColor: "#f8c43a" }}>Working time</th>
            {daysOfWeek.map((_, index) => (
              <th key={index} style={{ backgroundColor: "#f8c43a" }}>
                {startOfWeek.clone().add(index, "day").format("l")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ margin: "15px" }}>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td
                style={{
                  backgroundColor: "#f8c43a",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {time}
              </td>
              {daysOfWeek.map((_, index) => (
                <td key={index}>{generateCellContent()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderPage;
