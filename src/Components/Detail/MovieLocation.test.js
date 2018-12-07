import React from 'react';
import { shallow } from 'enzyme';
import MovieLocation from './MovieLocation';

describe('MovieLocation',()=>{


    function renderMovieLocation(id){
        return shallow(<MovieLocation movieId={id}/>);
    }

    describe('renderMovieLocations', async()=>{
        it('should show message when there is no location',async ()=>{

            const temp =renderMovieLocation("2baf70d1-42bb-4437-b551-e5fed5a87abe1");
            expect(temp.find('.container').length).toBe(1);
        });
        it('shouldn\'t have location array if there is no location',async ()=>{
            const temp =renderMovieLocation("2baf70d1-42bb-4437-b551-e5fed5a87abe1");
            expect(temp.state().locations.length).toBe(0);
        });
    });

});
