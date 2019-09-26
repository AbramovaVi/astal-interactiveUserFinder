import React, { Component } from "react";
import {UserList} from "./UserList";
import { getUsers } from "../sources/users";

class InputForm extends Component {
   constructor(props) {
       super(props);

       this.state ={
           value: '',
           users: []
       };

       this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
       this.setState({ value: event.target.value });
   }

        // обработчик нажатия кнопки
   // handleSubmit(event) {
   //     event.preventDefault();
   //     getUsers( {firstName: this.state.value})
   //         .then ( ({data}) => this.setState( { users: data }) );
   // }

    componentDidMount() {
       getUsers( {firstName: this.state.value})
           .then( ({data}) => this.setState({ users: data}) );
    }

    componentDidUpdate(prevProps, prevState) {
       if (prevState.value !== this.state.value) {
           getUsers({ firstName: this.state.value})
               .then( ({data}) => this.setState({ users: data }));
       }
    }

    render() {
       return (
           <>
               <input type="text" onChange={ this.handleChange}/>
               {/*<input type="submit" value = "search" onClick={ this.handleSubmit}/>*/}
               <UserList users = { this.state.users } />
           </>
       )
   }
}

export default InputForm;