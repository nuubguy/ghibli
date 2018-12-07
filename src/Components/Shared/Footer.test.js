import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer',()=>{


    function renderFooter(){
        return shallow(<Footer/>);
    }

    describe('renderFooter', ()=>{
        it('should have class footer', ()=>{

            const temp =renderFooter();
            expect(temp.find('.footer').length).toBe(0);
        });
 
    });

});
