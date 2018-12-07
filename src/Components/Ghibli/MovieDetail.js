import React from 'react'
import GhibliService from '../../Api/GhibliService';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import MovieDescription from '../Detail/MovieDescription';
import MoviePeople from '../Detail/MoviePeople';
import MovieSpecies from '../Detail/MovieSpecies';
import MovieLocation from '../Detail/MovieLocation';
import MovieVehicle from '../Detail/MovieVehicle';
import './MovieDetail.css';


class MovieDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            movie: {}
        }
    }
    async componentDidMount() {
        const temp = await new GhibliService().getFilmById(this.props.match.params.id)
        this.setState({
            movie: temp.data
        });
    }

    render() {
        console.log("hehe", this.props)
        if(this.state.movie.length===0){
            return <div className="notFound">
            dasasdasdasd
            </div>
        }else{
            return (
                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Desc</Tab>
                            <Tab>People</Tab>
                            <Tab>Species</Tab>
                            <Tab>Location</Tab>
                            <Tab>Vehicle</Tab>
                        </TabList>
    
                        <TabPanel>
                            <MovieDescription movie={this.state.movie}/>
                        </TabPanel>
                        <TabPanel>
                            <MoviePeople people={this.state.movie.people} movieId={this.props.match.params.id}/>
                        </TabPanel>
                        <TabPanel>
                            <MovieSpecies movieId={this.props.match.params.id}/>
                        </TabPanel>
                        <TabPanel>
                            <MovieLocation movieId={this.props.match.params.id}/>
                        </TabPanel>
                        <TabPanel>
                            <MovieVehicle movieId={this.props.match.params.id}/>
                        </TabPanel>
                    </Tabs>
                </div>
            )
        }


    }
}

export default MovieDetail