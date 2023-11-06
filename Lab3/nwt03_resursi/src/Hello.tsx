import React, { Component } from "react";

interface ComponentState{
    name: string
}

class Hello extends Component<{}, ComponentState> {
    constructor(props: {}){
        super(props); //Poziv
        console.log('Poziv konstruktora')
        this.state={
            name:'Mate'
        }
    }

    componentDidMount(){
        console.log('stanje prije mount-a',this.state.name)
        this.setState({name: 'Andrej'})
    }

    render() {
        console.log('Render')
        return(
            <h1>{this.state.name}</h1>
        )


}

}

export default Hello;