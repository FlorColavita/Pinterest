import React, { Component } from 'react';
import '../App.css';
import './Categories.js'

class Content extends Component{
    constructor(props) {
    super(props)
        this.state= {
            categories: [
                {id:1, name: 'Propiedades'},
                {id:2, name: 'Estado'},
                {id:3, name: 'Métodos'},
                {id:4, name: 'Componentes'},
        ]
    }
}
    render (){
        return(
            <div className="App">
            <p>Categories({ this.state.categories.length })</p>
                <ul>
                    {
                        this.state.categories.map((category)=> {
                            return (
                                <li key={category.id}>
                                {category.name.toUpperCase()}
                                </li>
                            )
                        })
                    }
                </ul>
                <aside>
                    <form>
                        <input type="text"/>
                        <button>Buscar</button>
                    </form>
                </aside>
                <section>
                    <h1>Título de Post</h1>
                    <p>Loren Ipsum dolor sit amet, consecteur..</p>
                </section>
            </div>
        )
    }
    
}
export default Content;
       