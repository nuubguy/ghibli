import React from 'react'
import GhibliService from '../../Api/GhibliService';
import './Detail.css';

class MovieLocation extends React.Component {
    constructor(){
        super();
        this.state ={
            locations:[],
        }
    }

    async componentDidMount(){
       let temp = await new GhibliService().getLocations();
       this.setState({
        locations:this.filterByMovie(temp.data),
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

        if(this.state.locations.length===0){
            return (
            <div className="container">
                <div className="item">
                    <br/><br/><br/>
                    <span className="check checkFontMessage">No detail Location found</span>
                </div>
            </div>
            )
        }else{
            
        return (
            <div className="container">
            {this.state.locations.map(data=>(
                <div className="item">
                        <br/><br/><br/>
                        <span className="check checkFont">Name: {data.name}</span>
                        <br/>
                        <span className="check checkFont">Climate: {data.climate}</span>
                        <br/>
                        <span className="check checkFont">Terrain: {data.terrain}</span>
                        <br/>
                        <span className="check checkFont">Surface water: {data.surface_water}</span>
                </div>
            ))}
        </div>
        )

        }
    }
}

export default MovieLocation