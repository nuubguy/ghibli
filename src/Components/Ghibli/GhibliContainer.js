import React, { Component } from 'react';
import GhibliService from '../../Api/GhibliService';
import { Link } from 'react-router-dom';
import './GhibliContainer.css';

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';


export default class GhibliContainer extends Component {
    constructor() {
        super();
        this.state = {
            GhibliFilms: [],
            items: 6,
            loadingState: false    
        };
    }

    async componentWillMount() {
        const response = await new GhibliService().getFilms();
        this.setState({
            GhibliFilms: response.data,
        });
        console.log(this.state.GhibliFilms);
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight){
              console.log(this.state.items);
              if(this.state.items<this.state.GhibliFilms.length-2){
                  this.loadMoreItems();
              } 
            }
          });
    }

    displayItems() {
        var items = [];
        for (var i = 0; i < this.state.items; i++) {
          items.push(this.state.GhibliFilms[i]);
        }
        return items;
      }

    loadMoreItems() {
        this.setState({ loadingState: true });
        setTimeout(() => {
          this.setState({ items: this.state.items + 1, loadingState: false });
        }, 2000);
      }

    render() {
        let arrays = this.displayItems();
        if(arrays[0]===undefined){
            return <div></div>
        }else{
        return (
            <div ref="iScroll" style={{ height: "700px", overflow: "auto" }}>
                <Container fluid>
                    <Row sm="3">
                    
                        {arrays.map(data => (
                            <Col sm="6" >
                                <Card key={data.title}>
                                    <CardBody>
                                        <CardTitle>{data.title}</CardTitle>
                                        <CardText style={{maxHeight : '96px', overflow : 'hidden'}}>{data.description}</CardText>
                                        <Link to={`/movie/${data.id}`}>
                                            <Button>View</Button>
                                        </Link>
                                        
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    {this.state.loadingState ? <img alt="" className="loading" src="https://sociorocketnewsen.files.wordpress.com/2016/07/totoro-top.gif" width="150" height="150" /> : ""}
 
                    </Row>
                </Container>
            </div>
        );
    }
    }
}
