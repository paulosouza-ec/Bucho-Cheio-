import React, { useState } from "react";
import { Botao } from "../../components/Botao";
import { Input } from '../../components/Input';
import { Logo } from "../../assets";
import { Icone } from "../../assets";

import axios from 'axios';
import './style.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post("http://localhost:3001/login", {
            email,
            senha,
          });
          if (response.data.id) {
            localStorage.setItem('@BuchoCheio:key',1); 
            localStorage.setItem('@BuchoCheio:id',response.data.id);
           return window.location.replace("/home");
          } else {
            alert("Login ou senha inválidos");
          }
        } catch (error) {
          alert("Erro ao fazer login. Tente novamente mais tarde.");
        }
      };

    const verificationAdmin = ()=>{
        if (email === "admin@gmail.com" && senha === "admin123"){
            localStorage.setItem('@BuchoCheio:key',2); 
            return window.location.replace("/home");
        }else if(email === "admin@gmail.com" && senha !== "admin123"){
            alert("Login ou senha inválidos");
        }
        else{
            return handleLogin();
        }    
    } 

    const checkFields = () => {
        if( (email === ''|| email.length<3)|| senha === '') {
          return false;
        }
        else{
          return true;
        }
      }
    

    return (
        <div className="containerPage">
            <div className="form">
                <div className="titulo">  
                    <div className="icone">
                    <Icone style={{ width: 45 , marginRight: 25 }}/>
                    </div>
                    <div className="">
                        <h1>Login</h1>
                    </div>
                </div>

                <div className="email">
                    <Input
                        titulo='E-MAIL'
                        placeholder='e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={email === '' || email.length < 3? 'Insira seu email' : ''}
                    />
                </div>
                <div className="senha">
                    <Input
                        titulo='SENHA'
                        placeholder='senha'
                        value={senha}
                        senha
                        onChange={(e) => setSenha(e.target.value)}
                        error={senha === '' ? 'Insira sua senha' : ''}
                    />
                </div>
                <div className="botao">
                    <Botao 
                        width={'100%'}
                        text='ENTRAR'
                        backgroundColor='#FF9D01'
                        color='#FFF2DE'
                        backgroundColorHover='#FFF2DE'
                        colorHover='#FF9D01'
                        borderHover='2px solid #FF9D01'
                        onClick={() => {
                            const check = checkFields();
                            if(check){
                                verificationAdmin();
                            }
                          }}
                    />
                </div>
                <div className="botao2">
                    <Botao 
                        width={'100%'}
                        text='CADASTRE-SE'
                        backgroundColor='#FF9D01'
                        color='#FFF2DE'
                        backgroundColorHover='#FFF2DE'
                        colorHover='#FF9D01'
                        borderHover='2px solid #FF9D01'
                        onClick={() => {
                          return window.location.replace("/cadastro");
                          }}
                    />
                </div>
            </div>
            <div className="logo">
                <img src={Logo} alt="Logo" style={{width: 600}}/>
            </div>
        </div>
    )
}