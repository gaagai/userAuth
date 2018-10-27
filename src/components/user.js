import React, { Component } from 'react';
import FormFields from '../widgets/FormFields';
import { firebaseDB } from '../firebase';

class User extends Component {

    state = {
        formData:{
            name:{
                element:'input',
                value:'',
                label:true,
                labelText:'Name',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter Your Name'
                },
                validation: {
                    required:true,
                    minLen:3
                },
                valid:false,
                touched:false,
                validMessage:''

            },
            lastname:{
                element:'input',
                value:'',
                label:true,
                labelText:'Last Name',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter Your Last Name'
                },
                validation: {
                    required:true
                },
                valid:false,
                touched:false,
                validMessage:''

            },
            message:{
                element:'textarea',
                value:'',
                label:true,
                labelText:'Message',
                config:{
                    name:'message_input',
                    rows:4,
                    cols:36
                },
                validation: {
                    required:false
                },
                valid:true,
            },
            age:{
                element:'select',
                value:'',
                label:true,
                labelText:'Age',
                config:{
                    name:'age_input',
                    options:[
                        {val:'1', text:'10-20'},
                        {val:'2', text:'20-30'},
                        {val:'3', text:'+30'}
                    ]
                },
                validation: {
                    required:false
                },
                valid:true,
        }
        
    }
}

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }
    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit ={};
        let formIsValid = true;

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
        }

        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid;
        }
        if(formIsValid){
            firebaseDB.ref('users').push(dataToSubmit)
            .then(()=>{
                console.log('new user added')
            }).catch( e=>{
                console.log(e);
            })
        }
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}

                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default User;