import React from 'react'
import {
Jumbotron,Button
} from 'reactstrap';

class MovieDescription extends React.Component {

    render() {
        return (
        <div>
                <div>
      <Jumbotron>
        <h1 id="movieTitle" className="display-4">{this.props.movie.title}</h1>
        <p className="display-4">Rating : {this.props.movie.rt_score}</p>
        <hr className="my-2" />
        <p>{this.props.movie.description}</p>
        <p className="lead">Director</p>
        <p>{this.props.movie.director}</p>
        <p className="lead">Producer</p>
        <p>{this.props.movie.producer}</p>
        <p className="lead">Release Year</p>
        <p>{this.props.movie.release_date}</p>
        
      </Jumbotron>
    </div>
        </div>
    )
    }
}

export default MovieDescription