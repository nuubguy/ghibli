import React from 'react';
import { shallow } from 'enzyme';
import MoviePeople from './MoviePeople';

describe('MoviePeople',()=>{


    function renderMoviePeople(id){
        return shallow(<MoviePeople movieId={id}/>);
    }

    describe('renderMoviePeople', async()=>{
        it('should show message when there is no detail people',async ()=>{

            const temp =renderMoviePeople("2baf70d1-42bb-4437-b551-e5fed5a87abe1");
            expect(temp.find('.container').length).toBe(1);
        });
        it('shouldn\'t have location array if there is no location',async ()=>{
            const temp =renderMoviePeople("2baf70d1-42bb-4437-b551-e5fed5a87abe1");
            expect(temp.state().people.length).toBe(0);
        });
    });

});
