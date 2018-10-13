import React, { Component } from 'react';
import logo from '../logo.svg'; 
import '../Css/Header.css';
import PropTypes from 'prop-types';

class Header extends Component{
    constructor(props) {
        super(props)
        this.state={
            title: this.props.title
        }
        this.changeTitle = this.changeTitle.bind(this)
    }
    changeTitle() {
        this.setState({
            title: 'Otro Título'
        })
    }
    render(){
        return(
            <header>
                    <h1>{this.state.title}</h1>
                    <img src ={logo} alt='Imagen'/>
            <hr/>
            <button onClick={this.changeTitle}> Cambiar Título</button>
            <hr/>
            <ul>
            <li><a href= 'https://www.google.com.ar/'>item1</a></li>
            <li><a href= 'https://www.google.com.ar/'>item2</a></li>
            <li><a href= 'https://www.google.com.ar/'>item3</a></li>
            </ul>
            </header>
        )
    }   
}
Header.defaultProps = {
    title: 'Titulo por defecto'
}
Header.PropTypes = {
    title: PropTypes.string
}
export default Header
