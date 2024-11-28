// import "./styles.css";
import {AnimalCardWrapper, AnimalCardWrapperImg} from './styles'

import { AnimalCardProps } from './types';



function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <h3>{animalData.name}</h3>
      <div>{animalData.species}</div>
      <AnimalCardWrapperImg src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;

