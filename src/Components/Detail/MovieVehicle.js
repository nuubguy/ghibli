import React from 'react'
import GhibliService from '../../Api/GhibliService';
import './Detail.css';

class MovieVehicle extends React.Component {
    constructor(){
        super();
        this.state ={
            vehicles:[],
        }
    }

    async componentDidMount(){
       let temp = await new GhibliService().getVehicles();
       this.setState({
        vehicles:this.filterByMovie(temp.data),
       }) 
    }
    
    filterByMovie = (location) =>{
        let result =[];
        for(let x=0;x<location.length;x++){
            if(location[x].films.includes(this.props.movieId)){
                result.push(location[x]);
            }
        }
        return result;
    }

    render() {

        if(this.state.vehicles.length===0){
            return (
            <div className="container">
                <div className="item">
                    <br/><br/><br/>
                    <span className="check checkFontMessage">No detail Vehicle found</span>
                </div>
            </div>
            )
        }else{
            
        return (
            <div className="container">
            {this.state.vehicles.map(data=>(
                <div className="item">
                        <br/><br/><br/>
                        <span className="check checkFont">Name: {data.name}</span>
                        <br/>
                        <span className="check checkFont">Climate: {data.description}</span>
                        <br/>
                        <span className="check checkFont">Terrain: {data.vehicle_class}</span>
                        <br/>
                        <span className="check checkFont">Surface water: {data.length}</span>
                </div>
            ))}
        </div>
        )

        }
    }
}

export default MovieVehicle