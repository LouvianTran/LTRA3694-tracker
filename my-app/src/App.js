import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';

// Importing all created widgets from seperate JS files into the main JS file.
// import BasicTable from './component/example';
import { ExerciseLogger } from './component/exerciseLogger';
import { ExerciseProgramChecklist } from './component/exerciseProgramCheck';
import { ProteinIntake } from './component/proteinIntake';
import { BodyweightTracker } from './component/bodyweightTracker';

function App() {
  return (
    // Add border to screen with container
    <Container
      sx={{
        // Adjust the arrangements of widgets to suit their screen width size
        flexDirection: {xs: "column", md:"row"},
        // Make desktop version of website stationar/unscrollable, but allow scroll on mobile
        height: {xs: "auto", md: "100vh"},
        //
        padding: {xs: "1.5", md: "5"},
      }}
    >
    <div className="App">

      {/* Given template when creating App.js */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <BasicTable/> */}
      <box sx={{width: {xs: '85%', md: '55%'}}}>
        <ExerciseLogger 
          sx={{ p: {xs: 1, md: 1.5}, 
          bgcolor: "test.main", 
          }}
        ></ExerciseLogger>

        <ExerciseProgramChecklist></ExerciseProgramChecklist>
      </box>

      <box sx={{width: {xs: '85%', md: '40%'}}}>
        <ProteinIntake></ProteinIntake>
        <BodyweightTracker></BodyweightTracker>
      </box>


    </div>
    </Container>
  );
}



export default App;
