//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  //You'll need one for the home score and another for the away score.

  const [homeScore, setHome] = useState(0);

  const [awayScore, setAway] = useState(0);

  const [quarter, setQuarter] = useState(0);



  const touchdownHome = event => {
    setHome(homeScore + 7);
  };
  
  const touchdownAway = event => {
    setAway(awayScore + 7);
  };

  const fieldGoalHome = e =>{
    setHome(homeScore + 1);
  };

  const fieldGoalAway = e =>{
    setAway(awayScore + 1);
  };

  const addQuarter = (e) =>{
    if(quarter < 4) {
      setQuarter(quarter + 1);
    } else {
      setQuarter(1);
    };
  };


  // const AddQuarter = () => {
  //   return (
  //     <div className="quarterButton">{quarter}</div>
  //   )
  // };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Home home = {homeScore}/>
          <div className="timer">00:03</div>
          <Away away = {awayScore}/>
        </div>
        <BottomRow quarter = {quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {touchdownHome}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {fieldGoalHome}>Home Field Goal</button>
        </div>
        <div className="quarterButton">
          <button className="quarterButtons" onClick = {addQuarter}>Add a Quarter</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {touchdownAway}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {fieldGoalAway}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

function Home(props){
  return(
    <div className="home">
      <h2 className="home__name">Lions</h2>

      {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

      <div className="home__score">{props.home}</div>
    </div>
  )
}

function Away(props){
  return(
    <div className="away">
      <h2 className="away__name">Tigers</h2>
      <div className="away__score">{props.away}</div>
    </div>
  )

}


export default App;
