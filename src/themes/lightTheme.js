import styled from "styled-components";
import Dropdown from './Dropdown';

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
