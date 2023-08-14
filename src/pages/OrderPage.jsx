import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import moment from "moment";
import { useOrderContext } from "../contexts/OrderContext";

const OrderPage = () => {
  moment.updateLocale("en", { week: { dow: 1 } });
  const startOfWeek = moment().startOf("week");
  const [selectedIteration, setSelectedIteration] = useState(null);
  // const { orderCard } = useOrderContext();

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

  function order(e) {
    e.style.backgroundColor = "green";
  }
  const handleCellClick = (iteration) => {
    setSelectedIteration(iteration);
  };

  // const generateCellContent = (iteration) => {

  //   return iteration !== null ? iteration + 1 : "-";

  //   // orderCard();
  // };

  const getSelectedIterationValue = () => {
    if (selectedIteration !== null) {
      // Do something with the selected iteration value
      return selectedIteration + 1; // Adding 1 to match the numbering
    }
    return null;
  };

  return (
    <div>
      <Table bordered style={{ marginTop: "100px" }}>
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
          {timeSlots.map((time, timeIndex) => (
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
              {daysOfWeek.map((_, dayIndex) => (
                <td
                  key={dayIndex}
                  style={{
                    border: "1px solid #000",
                    padding: "5px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedIteration === null
                        ? "transparent"
                        : selectedIteration ===
                          timeIndex * daysOfWeek.length + dayIndex
                        ? "#f8c43a"
                        : "transparent",
                  }}
                  onClick={(e) =>
                    // handleCellClick(timeIndex * daysOfWeek.length + dayIndex);
                    // console.log(
                    //   timeIndex * daysOfWeek.length + dayIndex,
                    //   timeIndex,
                    //   dayIndex
                    // )
                    order(e.currentTarget)
                  }
                >
                  {/* {generateCellContent(
                    timeIndex * daysOfWeek.length + dayIndex
                  )} */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderPage;
