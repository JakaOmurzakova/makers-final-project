import React, { createContext, useState } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

const Calendar = () => {
  const [state, setState] = useState({
    selection1: {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 2),
      key: "selection1",
    },
    selection2: {
      startDate: addDays(new Date(), 4),
      endDate: addDays(new Date(), 7),
      key: "selection2",
    },
    selection3: {
      startDate: addDays(new Date(), 8),
      endDate: addDays(new Date(), 10),
      key: "selection3",
      //autoFocus: false,
    },
  });
  console.log(state.selection1);
  return (
    <DateRangePicker
      onChange={(item) => setState({ ...state, ...item })}
      ranges={[
        state.selection1,
        state.selection2,
        state.selection3,
        //  state.selection4,
        //  state.selection5,
      ]}
    />
  );
};

export default Calendar;
