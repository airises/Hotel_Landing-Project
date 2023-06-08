import React from "react";
import houses from "../../../assets/houses.png";
import styled from "styled-components";
import { TextField } from "@mui/material";
import MuIButton from "../../UI/Button";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SeacrhCheck = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <div className="card-tb">
        <img className="houses" src={houses} alt="houses" />
      </div>
      <div className="card-tb2">
        <p style={{ marginBottom: "10px" }}>CHECK-IN</p>
        <TextField type="date" />
        <p style={{ marginBottom: "10px" }}>CHECK-OUT</p>
        <TextField type="date" />

        <p style={{ marginBottom: "10px" }}>GUESTS :</p>
        <Box sx={{ minWidth: 90 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>Room 1</MenuItem>
              <MenuItem value={2}>Room 2</MenuItem>
              <MenuItem value={3}>Room 3</MenuItem>
              <MenuItem value={3}>Room 3</MenuItem>
              <MenuItem value={5}>Room 5</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>
          <MuIButton variant="outlined">CHECK AVAILABILITY </MuIButton>
        </div>
      </div>
    </Container>
  );
};

export default SeacrhCheck;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .card-tb {
    width: 637px;
    height: 523px;
    background: #b1bed0;
    box-shadow: 0px 4px 79px 7px rgba(115, 115, 115, 0.12);
    border-radius: 8px 0px 0px 8px;
  }
  .houses {
    margin-top: 90px;
  }
  .card-tb2 {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    width: 475px;
    height: 523px;
    background: #f6fcfa;
    border-radius: 0px 8px 8px 0px;
  }
  p {
    margin-top: 35px;
  }
`;

