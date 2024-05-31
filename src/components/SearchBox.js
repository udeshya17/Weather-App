import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WeatherInfo from "./WeatherInfo";

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [cityName, setCityName] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCityName(location);
    setLocation("");
  };

  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", gap: 2 }}
      >
        <TextField
          variant="outlined"
          label="Enter location..."
          value={location}
          onChange={handleChange}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
          }}
        >
          Search
        </Button>
      </Box>
      {cityName && <WeatherInfo cityName={cityName} />}
    </Box>
  );
};

export default SearchBox;
