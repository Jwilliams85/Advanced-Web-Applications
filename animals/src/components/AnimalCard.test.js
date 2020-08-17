import React from 'react';
import AnimalCard from './AnimalCard';
import { render } from '@testing-library/react'

let animal = {
    name:'Lion',
    sound:'RAWR!',
    classification: {
        species: 'Panthera leo'
    }
}

test ('Animal Card renders and props will be updated when passed in', () =>{
    const{queryAllByTestId, getAllByText, rerender} = render(<AnimalCard animal = {{animal: '', sound: '', classification: {species: ''}}} />)
    expect(queryAllByTestId('animalcard')).toHaveLength(1)
    rerender(<AnimalCard animal = {animal}/>)
    getAllByText(/Lion/i)
    getAllByText(/RAWR!/i)
    getAllByText((/Panthera leo/i))
    
})