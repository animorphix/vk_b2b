import React from 'react';
import styled from "styled-components";

const Dropdown = ({ label, options, value, onChange }) => {
    return (
      <SelectContainer>
        <Label>{label}</Label>
        <Select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </SelectContainer>
    );
  };
  
  const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    max-width: 100%;
  `;
  
  const Label = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
    max-width: 100%;
  `;
  
  const Select = styled.select`
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    max-width: 100%;
  `;
  

export default Dropdown;
