import React, {Component} from 'react';
import base64 from 'base-64';
import axios from 'axios';


export default class Login extends Component{

    constructor(){
        super();
        this.state = {msg: ''};
    }

   
    envia(event){
        event.preventDefault(); // Impossibilita recarregar a página
        const buffer = base64.encode(this.login.value + ':' + this.senha.value)
        const basicAuth = 'Basic ' + buffer; 
        const config = {headers:{Authorization:basicAuth}} 

        // Como criar o HEADER em fetch
                    // Link da API
        axios.post('', {},  config)
            .then(response =>
                    {
                        console.log(response);
                        if(response.data.status_code === 200){
                            this.props.history.push('/timeline');
                        }
                    })
                
                .catch(error => 
                    {
                        this.setState({msg:'não foi possível fazer o login'});
                    });
    }

    render(){
        return(
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <label>Login: </label>
                    <input type="text" ref={(input) => this.login = input} />
                    <label>Senha: </label>
                    <input type="password" ref={(input) => this.senha = input}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}