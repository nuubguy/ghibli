
import GhibliContainer from "./Components/Ghibli/GhibliContainer";
import MovieDetail from "./Components/Ghibli/MovieDetail";


export default [
    { path: '/ghibli', component: GhibliContainer},
    { path: '/movie/:id', component: MovieDetail},
    
]