import React from 'react';
import { shallow } from 'enzyme';
import MovieSpecies from './MovieSpecies';

describe('MovieSpecies',()=>{


    function renderMovieSpecies(id){
        return shallow(<MovieSpecies movieId={id}/>);
    }

    describe('renderMovieSpecies', async()=>{
        it('should show message when there is no detail species',async ()=>{

            const temp =renderMovieSpecies("2baf70d1-42bb-4437-b551-e5fed5a87abe1");
            expect(temp.find('.container').length).toBe(1);
        });
        it('shouldn\'t have location array if there is no species',async ()=>{
            const temp =renderMovieSpecies("2baf70d1-42bb-4437-b551-e5fed5a87abe1");
            expect(temp.state().species.length).toBe(0);
        });
    });

});
