import React from "react";

class AddContact extends React.Component {
    state = {
        name:"",
        email: "",
        number: "",
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name ==="" || this.state.email === "" || this.state.number === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: "", number: ""});
    }
    render() {
        return (
            <div className="ui main">
                
                <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name*</label>
                    <input 
                    type = "text" 
                    name = "name"
                    placeholder = "Name"
                    value={this.state.name}
                    onChange={ (e) => this.setState({name: e.target.value })} />

                </div>
                <div className="field">
                    <label>Email*</label>
                    <input 
                    type = "text" 
                    name = "email"
                    placeholder = "Email" 
                    value={this.state.email}
                    onChange={ (e) => this.setState({email: e.target.value })} />
                </div>

                <div className="field">
                    <label>Phone Number*</label>
                    <input 
                    type = "text" 
                    name = "number"
                    placeholder = "Phone Number" 
                    value={this.state.number}
                    onChange={ (e) => this.setState({number: e.target.value })} />
                </div>

                <button className="ui button green">Add</button>
                
                <div>
                    <h1>{}</h1>
                   <h2>My Contacts </h2>
                </div>
                </form> 
             </div>
        )
    }
}
export default AddContact;