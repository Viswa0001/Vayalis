import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaRegClock } from "react-icons/fa";
import data from "../../Content/ToStartUp/Tostartup.json";
function DateTime() {
  const [selectedDate, setSelectedDate] = useState(null);
  const defaultText = selectedDate
    ? selectedDate.toDateString()
    : "Please select a date";

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotClick = (timeSlot) => {
    console.log("Select date and time", timeSlot);
    console.log("Selected date:", selectedDate);
  };

  const renderTimeSlots = () => {
    const timeSlots = [
      "9:00AM",
      "10:00AM",
      "11:00AM",
      "12:00PM",
      "1:00PM",
      "2:00PM",
      "3:00PM",
      "4:00PM",
      "5:00PM",
      "9:00AM",
      "10:00AM",
      "11:00AM",
      "12:00PM",
      "1:00PM",
      "2:00PM",
      "3:00PM",
      "4:00PM",
      "5:00PM",
      "9:00AM",
      "10:00AM",
      "11:00AM",
      "12:00PM",
      "1:00PM",
      "2:00PM",
      "3:00PM",
      "4:00PM",
      "5:00PM",
    ];

    return (
      <div className="h-full md:px-2 overflow-y-auto">
        {selectedDate &&
          timeSlots.map((timeSlot, index) => (
            <button
              key={index}
              onClick={() => handleTimeSlotClick(timeSlot)}
              className="flex w-full py-1 justify-center "
            >
              <button className="rounded-lg py-3 bg-[#F77055] text-white w-1/2">
                {timeSlot}
              </button>
            </button>
          ))}
      </div>
    );
  };

  return (
    <div className="xl:flex h-screen justify-center items-center ">
      <div className="xl:w-1/4 xl:h-3/5 px-4 ">
        <div className="border-b  flex justify-center gap-2 items-center mb-6 ">
          <img src="/Assets/Home/Logo.svg" alt="" className="w-10 h-10" />

          <h2 className="text-3xl font-semibold">VAYALIS</h2>
        </div>
        <div className="grid space-y-3 xl:place-items-start place-items-center">
          <img src={data.img} alt="" className="w-16 h-16 rounded-full mb-1" />

          <h1>{data.name}</h1>
          <h2 className="text-2xl ">{data.title}</h2>
          <p className="flex items-center gap-2 pb-2">
            <FaRegClock />
            {data.time}
          </p>
          <p>{data.description}</p>
        </div>
      </div>

      <div className="grid gap-2 md:h-3/5 h-1/2 xl:mt-0 mt-8 ">
        <div>
          <h1 className="text-2xl">Sélectionnez la date et l'heure</h1>
        </div>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="overflow-auto "
        />
      </div>
    </div>
  );
}

export default DateTime;
