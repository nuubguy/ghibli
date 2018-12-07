import React from 'react'
import GhibliService from '../../Api/GhibliService';
import './Detail.css'

class MovieSpecies extends React.Component {
    constructor(){
        super();
        this.state ={
            species:[],
        }
    }

    async componentDidMount(){
       let temp = await new GhibliService().getSpecies();
       this.setState({
           species:this.filterByMovie(temp.data),
       }) 
    }
    
    filterByMovie = (location) =>{
        let result =[];
        for(let x=0;x<location.length;x++){
            for(let z=0;z<location[x].films.length;z++){
                if(location[x].films[z].includes(this.props.movieId)){
                    result.push(location[x]);
                }
            }
        }
        return result;
    }

    render() {

        if(this.state.species.length===0){
            return (
            <div className="container">
                <div className="item">
                    <br/><br/><br/>
                    <span className="check checkFontMessage">No detail Species found</span>
                </div>
            </div>
            )
        }else{
            return (
                <div className="container">
                {this.state.species.map(data=>(
                    <div className="item">
                            <br/><br/>
                            <span className="check">Name: {data.name}</span>
                            <br/>
                            <span className="check">Classification: {data.classification}</span>
                            <br/>
                            <span className="check">Eye color: {data.eye_colors}</span>
                            <br/>
                            <span className="check">Hair colors: {data.hair_colors}</span>
                    </div>
                ))}
            </div>
            )    
        }


    }
}

export default MovieSpecies