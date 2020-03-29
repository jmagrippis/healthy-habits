import React, { ReactNode } from "react";
import { Pet } from "../../types";
import styled from "styled-components";

type Props = {
  totalActivitiesCompletedCount: number;
  pets: Pet[];
};

const PetImage = styled.img``;

const getPets = (
  totalActivitiesCompletedCount: number,
  pets: Pet[]
): ReactNode => {
  const petCount = Math.floor(totalActivitiesCompletedCount / 2);
  return pets
    .slice(0, petCount)
    .map((pet) => <PetImage src={pet.image} key={pet.id} />);
};

export const Pets = ({ totalActivitiesCompletedCount, pets }: Props) => (
  <div>{getPets(totalActivitiesCompletedCount, pets)}</div>
);
