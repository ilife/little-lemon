import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = (props) => {
  const [date, setDate] = useState()
  const [guests, setGuests] = useState()
  const [time, setTime] = useState()
  const [eventName, setEventName] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit({date, guests, time, eventName})
  };

  const formik = useFormik({
    initialValues: {
      date: '',
      guests: '',
      time: '',
      eventName: ''
    },
    onSubmit: (values) => {
      /*submit('', values)*/
    },
    validationSchema: Yup.object({
      date: Yup.string().required('Required'),
      guests: Yup.string().email().required('Required'),
      time: Yup.string().required('Required'),
      eventName: Yup.string().required('Required')
    })
  });

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit} >
      <label for="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)}/>
      <label for="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label for="guests">Number of guests</label>
      <input type="number" placeholder="-" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
      <label for="occasion">Occasion</label>
      <select id="occasion" value={eventName} onChange={e => setEventName(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation"/>
    </form>
  );
};

export default BookingForm;
