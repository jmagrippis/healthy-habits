import React from "react";

import { Header } from "./Header/Header";
import { Checklist } from "./Checklist/Checklist";
import { Pets } from "./Pets/Pets";

import { useActivities } from "useActivities";
import { getCurrentDateHash } from "getCurrentDateHash";
import { defaultPets } from "../defaultPets";
import {MainContainer} from "./MainContainer";

export const App = () => {
  const {
    activities,
    completeActivity,
    consecutiveStreak,
    totalActivitiesCompletedCount,
  } = useActivities();
  const currentDateHash = getCurrentDateHash();

  const todaysActivities = activities[currentDateHash];

  return (
    <>
      <Header />
      {todaysActivities ? (
        <MainContainer>
          <Checklist
            activities={todaysActivities}
            completeActivity={completeActivity}
          />
          <Pets
            totalActivitiesCompletedCount={totalActivitiesCompletedCount}
            pets={defaultPets}
          />
        </MainContainer>
      ) : (
        "loading activities..."
      )}
      <div>
        Current days streak: <strong>{consecutiveStreak}</strong>
      </div>
      <div>
        Total activities completed:{" "}
        <strong>{totalActivitiesCompletedCount}</strong>
      </div>
    </>
  );
};

export default App;
