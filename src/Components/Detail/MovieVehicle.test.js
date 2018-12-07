import React from 'react';
import { shallow } from 'enzyme';
import MovieVehicle from './MovieVehicle';

describe('MovieVehicle',()=>{


    function renderMovieVehicle(id){
        return shallow(<MovieVehicle movieId={id}/>);
    }

    describe('renderMovieVehicle', async()=>{
        it('should show message when there is no detail vehicle',async ()=>{

            const temp =renderMovieVehicle("2baf70d1-42bb-4437-b551-e5fed5a87abe1");
            expect(temp.find('.container').length).toBe(1);
        });
        it('shouldn\'t have location array if there is no species',async ()=>{
            const temp =renderMovieVehicle("2baf70d1-42bb-4437-b551-e5fed5a87abe1");
            expect(temp.state().vehicles.length).toBe(0);
        });
    });

});
