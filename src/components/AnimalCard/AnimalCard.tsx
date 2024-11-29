// import "./styles.css";
import {AnimalName, AnimalSpecies,AnimalCardWrapper, AnimalCardWrapperImg} from './styles'

import { AnimalCardProps } from './types';



function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <AnimalName>{animalData.name}</AnimalName>
      <AnimalSpecies>{animalData.species}</AnimalSpecies>
      <AnimalCardWrapperImg src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;

