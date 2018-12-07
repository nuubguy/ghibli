import axios from 'axios';
import MovieDescription from './MovieDescription';
import React from 'react';
import { shallow } from 'enzyme';

describe('MovieDescription',()=>{


    function renderMovieDescription(id){
        shallow(<MovieDescription movie={id}/>);
        return shallow(<MovieDescription movie={id}/>);
    }

    describe('renderDetail', async()=>{
        it('should show title',async ()=>{

            const temp =renderMovieDescription("ebbb6b7c-945c-41ee-a792-de0e43191bd8");
            console.log(temp.props());
            expect(temp.find('#movieTitle').text()).toBe('');
            expect(temp.find('#movieTitle').length).toBe(1);
        });
    });

});
