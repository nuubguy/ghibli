import React from 'react'
import GhibliService from '../../Api/GhibliService';
import './Detail.css';
import {
    Jumbotron,Button
    } from 'reactstrap';

class MoviePeople extends React.Component {
    constructor(){
        super();
        this.state ={
            people:[],
        }
    }

    async componentDidMount(){
       let temp = await new GhibliService().getPeoples();
            this.setState({
                people:this.filterByMovie(temp.data)
            });
        console.log(this.state.people);


        
    }
    
    filterByMovie = (people) =>{
        let result =[];
        for(let x=0;x<people.length;x++){
            for(let z=0;z<people[x].films.length;z++){
                if(people[x].films[z].includes(this.props.movieId)){
                    result.push(people[x]);
                }
            }
        }
        return result;
    }



    render() {

        if(this.state.people.length===0){
            return (
            <div className="container">
                <div className="item">
                    <br/><br/><br/>
                    <span className="check checkFontMessage">No detail Character found</span>
                </div>
            </div>
            )
        }

        return (
            <div className="container">
                {this.state.people.map(data=>(
                    <div className="item">
                            <br/><br/><br/>
                            <span className="check checkFont">Name: {data.name}</span>
                            <br/>
                            <span className="check checkFont">Gender: {data.gender}</span>
                            <br/>
                            <span className="check checkFont">Age: {data.age}</span>
                    </div>
                ))}
            </div>
        )
    }
}

export default MoviePeople