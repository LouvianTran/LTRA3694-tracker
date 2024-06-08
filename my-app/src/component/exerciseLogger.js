
// export const ExerciseLogger=()=> {
//     //Create widget + Insert MUI here
//     return(<>hello</>)

// }

// // put functionalities here
// // Number input MUI

import React, { useState } from 'react';

// Importing styles from styleSheet.js
import { palette } from './styleSheet';
import { typography } from './styleSheet';
import { wideBox } from './styleSheet';

import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid
} from '@mui/material';


const ExerciseLogger = () => {
  //define variables (when there is no value, changes to value in (), but with user imput, changes to users input)
  const [bodyPart, setBodyPart] = useState('');
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('-');
  const [sets, setSets] = useState('-');
  const [reps, setReps] = useState('');

  const handleRecordExercise = () => {
    // Logic to record the exercise
    console.log(`Recorded: ${bodyPart}, ${exercise}, ${weight}kg, ${sets} sets, ${reps} reps`);
  };


return (
  <Box sx={wideBox}>
    <Typography sx={typography.h1} gutterBottom>Exercise logger</Typography>
    {/* MaterialUI Form: select to specify dropdown */}
    <FormControl fullWidth margin="normal">
      {/* Body part dropdown menu, typography styling added to this */}
      <InputLabel id="body-part-label" sx={typography.caption}>Select one</InputLabel>
      <Select
        labelId="body-part-label"
        value={bodyPart}
        // Action, use e to define input
        onChange={(e) => setBodyPart(e.target.value)}
        label="Body part"
      >
        {/* Options in dropdown menu */}
        <MenuItem value="arms">Arms</MenuItem>
        <MenuItem value="legs">Legs</MenuItem>
        <MenuItem value="back">Back</MenuItem>
        <MenuItem value="chest">Chest</MenuItem>
      </Select>
    </FormControl>
    <FormControl fullWidth margin="normal">
      {/* Construct select exercise dropdown menu, typography styling added to this */}
      <InputLabel id="exercise-label" sx={typography.caption} >Exercise</InputLabel>
      <Select
        labelId="exercise-label"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        label="Exercise"
      >
        {/* Options in dropdown menu */}
        <MenuItem value="bicep-curl">Bicep Curl</MenuItem>
        <MenuItem value="squat">Squat</MenuItem>
        <MenuItem value="deadlift">Deadlift</MenuItem>
        <MenuItem value="bench-press">Bench Press</MenuItem>
      </Select>
    </FormControl>

{/* Edit connect with consts set earlier (33-37). Show the last logs */}
    <Box sx={{ margin: '16px 0' }}>
        <Typography sx={typography.caption}> Last log:</Typography>
        <Box sx={{display:'flex', width: "100%",justifyContent: 'space-evenly', padding: "0.5"}}>
          <Typography sx={typography.p}>{`Weight: ${weight} kg`}</Typography>
          <Typography sx={typography.p}>{`Sets: ${sets}`}</Typography>
          <Typography sx={typography.p}>{`Reps: ${reps}`}</Typography>
        </Box>
    </Box>

      {/* Create the 3 input fields for weights, sets, reps */}
      {/* Log weight = weight input. Use grid to help with formatting writing next to the input field */}
      {/* use grid to  */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <Typography variant="body1">Weight:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            type="number"
            value={weight}
            // When user inputs a value, set the value of "set_" to be the users input value. Do the same for the other forms
            onChange={(e) => setWeight(e.target.value)}
            // Adds a "kg" suffix to the end of the input box
            InputProps={{
              endAdornment: <Typography>kg</Typography>,
            }}
          />
        </Grid>
      </Grid>
      
      <TextField
        fullWidth
        type="number"
        label="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        type="number"
        label="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        margin="normal"
      />

      {/* Create "record exercise" button */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleRecordExercise}
        // Requires all forms above to be filled before the button is clickable
        disabled={!bodyPart || !exercise || !weight || !sets || !reps}
        sx={{ marginTop: 2, backgroundColor: palette.primary.main, "&:hover": palette.primary.hover}}
      >
        Record exercise
      </Button>
    </Box>
  );
};

// Allow this widget to be exported into App.js
export default ExerciseLogger;