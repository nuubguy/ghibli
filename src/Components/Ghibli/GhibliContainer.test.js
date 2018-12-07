import React from 'react';
import { shallow } from 'enzyme';
import GhibliContainer from './GhibliContainer';

describe('GhibliContainer',()=>{


    function renderGhibliContainer(){
        return shallow(<GhibliContainer/>);
    }

    describe('renderGhibliContainer', async()=>{
        it('should have state when render',async ()=>{

            const temp =renderGhibliContainer();
            expect(temp.state().items).toBe(6);
        });
        it('should have GhibliFilm state',async ()=>{

            const temp =renderGhibliContainer();
            expect(temp.state().GhibliFilms.length).toBe(0);
        });
    });

});
