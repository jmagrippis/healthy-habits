import React from "react";
import { Pet } from "../../types";

type Props = {
  totalActivitiesCompletedCount: number;
  pets: Pet[];
};

export const Pets = ({
  totalActivitiesCompletedCount,
  pets,
}: Props) => (
  <div>
    {totalActivitiesCompletedCount >= 1 ? <img src={pets[0].image} /> : null}
  </div>
);
