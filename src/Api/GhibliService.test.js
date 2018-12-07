import axios from 'axios';
import GhibliService from './GhibliService';


describe('GhibliService',()=>{
    const GhibliMovie =()=> new GhibliService();

    describe('get list of movies', async()=>{
        it('should get list of movie from api',async()=>{
            const result = await GhibliMovie().getFilms();
            
            expect(result.status).toBe(200);
            expect(result.data.length).toBe(20);
        });
    });

    describe('get movie by Id', async()=>{
        it('should get movie by Id',async()=>{
            const result = await GhibliMovie().getFilmById("2baf70d1-42bb-4437-b551-e5fed5a87abe");
            
            expect(result.status).toBe(200);
            expect(result.data.title).toBe("Castle in the Sky");
            expect(result.data.director).toBe("Hayao Miyazaki");
        });
    });

    describe('get people', async()=>{
        it('should peoples',async()=>{
            const result = await GhibliMovie().getPeoples();
            
            expect(result.status).toBe(200);
            expect(result.data.length).toBe(31);
        });
    });

    describe('get species', async()=>{
        it('get all species',async()=>{
            const result = await GhibliMovie().getSpecies();
            
            expect(result.status).toBe(200);
            expect(result.data.length).toBe(6);
        });
    });

    describe('get locations', async()=>{
        it('should get all locations',async()=>{
            const result = await GhibliMovie().getLocations();
            
            expect(result.status).toBe(200);
            expect(result.data.length).toBe(24);
        });
    });

});
