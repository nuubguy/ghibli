import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import {
    Button
    } from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
<header>
	<div className="overlay">
<h1>Ghibli Studio</h1>
<h3></h3>
<p>Studio Ghibli, Inc. (Japanese: 株式会社スタジオジブリ Hepburn: Kabushiki gaisha Sutajio Jiburi) is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films, and has also produced several short films, television commercials, and one television film. It was founded on 15 June 1985, after the success of Nausicaä of the Valley of the Wind (1984), with funding by Tokuma Shoten.</p>
		<Link to={`/ghibli`}>
        <Button id="home" color="primary">Home</Button>
        </Link>
        
        </div>

</header>


        )
    }
}
export default Header