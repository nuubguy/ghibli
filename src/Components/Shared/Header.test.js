import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header',()=>{


    function renderHeader(){
        return shallow(<Header/>);
    }

    describe('renderHeader', ()=>{
        it('should have classname overlay', ()=>{

            const temp =renderHeader();
            expect(temp.find('.overlay').length).toBe(1);
        });

        it('should have button home', ()=>{

            const temp =renderHeader();
            expect(temp.find('Button').length).toBe(1);
        });
 
    });

});
