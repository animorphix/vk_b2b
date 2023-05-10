import React, { useEffect, useRef, useState} from "react";
import Dropdown from './Dropdown';
import styled from "styled-components";

//date limit
const maxDateLimit = "2100-12-31"
const minDateLimit = new Date().toISOString().split("T")[0];

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .dropdown-menu {
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-family: Arial, sans-serif;
  width: 300px;
  background-color: #f5f5f5;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 20px;

`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Warning = styled.span`
    
    color: #f44336;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  min-height: 50px;
  max-width: 100%;
  resize: vertical;
  overflow: hidden;
  margin-top: 5px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: #005bbb;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #003c85;
  }
`;

const ClearButton = styled(Button)`
  margin-top: 0;
  margin-left: 10px;
  background-color: #ccc;
  color: #333;

  &:hover {
    background-color: #999;
  }
`;

const TowerDropdown = styled(Dropdown)`
  width: 150px;
  margin-left: 10px;
`;

const FloorDropdown = styled(Dropdown)`
  width: 150px;
  margin-left: 10px;
`;

const RoomDropdown = styled(Dropdown)`
  width: 150px;
  margin-left: 10px;
`;


const BookingForm = () => {
  const [tower, setTower] = useState('a');
  const [floor, setFloor] = useState('3');
  const [room, setRoom] = useState('1');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');

  const textRef = useRef();

  const handleTowerSelected = (e) => {
    setTower(e.target.value);
  };

  const handleFloorSelected = (e) => {
    setFloor(e.target.value);
  };

  const handleRoomSelected = (e) => {
    setRoom(e.target.value);
  };

  const handleDateSelected = (e) => {
    setDate(e.target.value);
  };

  const handleTimeSelected = (e) => {
    setTime(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    const target = e.target;
    textRef.current.style.height = "30px";
    textRef.current.style.height = `${target.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      tower,
      floor,
      room,
      date,
      time,
      comment,
    };
    console.log(JSON.stringify(formData));
  };

  const handleClear = () => {
    setTower('a');
    setFloor('1');
    setRoom('1');
    setDate('');
    setTime('');
    setComment('');
  };

  const towerOptions = [
    { label: 'Башня А', value: 'a' },
    { label: 'Башня Б', value: 'b' },
  ];

  const floorOptions = Array.from({ length: 25 }, (_, i) => ({
    label: `Этаж ${i + 3}`,
    value: `${i + 3}`,
  }));

  const roomOptions = Array.from({ length: 10 }, (_, i) => ({
    label: `Переговорная ${i + 1}`,
    value: `${i + 1}`,
  }));

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} onReset={handleClear}>
        <Label>
          Башня:
          <TowerDropdown
            options={towerOptions}
            value={tower}
            onChange={handleTowerSelected}
          />
        </Label>
        <Label>
          Этаж:
          <FloorDropdown
            options={floorOptions}
            value={floor}
            onChange={handleFloorSelected}
          />
        </Label>
        <Label>
          Переговорная:
          <RoomDropdown
            options={roomOptions}
            value={room}
            onChange={handleRoomSelected}
          />
        </Label>
        <Label>
          Дата:
          <Input 
            type="date" 
            value={date} 
            max={maxDateLimit} 
            min={minDateLimit} 
            onChange={handleDateSelected} 
            onKeyDown={(e) => e.preventDefault()} />
        </Label>
        <Label>
          Время:
          <Input 
            type="time" 
            value={time} 
            onChange={handleTimeSelected} />
        </Label>
        <Label>
          Комментарий:
          <Textarea 
            value={comment} 
            onChange={handleCommentChange} 
            ref={textRef} />
        </Label>
        {( date != "" && time != "")?
            <Button type="submit">Отправить</Button> :
            <Warning>
                Заполните все поля
            </Warning>
        }
        
        <ClearButton type="button" onClick={handleClear}>Очистить</ClearButton>
      </Form>
    </FormContainer>
  );
}  
export default BookingForm;