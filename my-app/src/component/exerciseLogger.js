
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
      {/* Body part dropdown */}
      <InputLabel id="body-part-label" sx={typography.caption}>Select one</InputLabel>
      <Select
        labelId="body-part-label"
        value={bodyPart}
        // Action, use e to define input
        onChange={(e) => setBodyPart(e.target.value)}
        label="Body part"
      >
        <MenuItem value="arms">Arms</MenuItem>
        <MenuItem value="legs">Legs</MenuItem>
        <MenuItem value="back">Back</MenuItem>
        <MenuItem value="chest">Chest</MenuItem>
      </Select>
    </FormControl>
    <FormControl fullWidth margin="normal">
      <InputLabel id="exercise-label" sx={typography.caption} >Exercise</InputLabel>
      <Select
        labelId="exercise-label"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        label="Exercise"
      >
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

      {/* Log weight = weight input */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <Typography variant="body1">Weight:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
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
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleRecordExercise}
        disabled={!bodyPart || !exercise || !weight || !sets || !reps}
        sx={{ marginTop: 2, backgroundColor: palette.primary.main, "&:hover": palette.primary.hover}}
      >
        Record exercise
      </Button>
    </Box>
  );
};

export default ExerciseLogger;