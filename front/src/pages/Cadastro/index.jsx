import React, { useEffect, useState } from "react";
import { Botao } from "../../components/Botao";
import { Input } from '../../components/Input';
import { PopUp } from '../../components/PopUp';
import { Navbar } from "../../components/Navbar";
import axios from 'axios';
import './style.css';
import { cpfMask, emailMask, phoneMask, senhaMask, textMask } from "../../utils/mask";

export const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [pontoRef, setPontoRef] = useState('');
  const [editar, setEditar] = useState(false);
  const [openSalvar, setOpenSalvar] = useState(false);
  const handleOpenSalvar = () => setOpenSalvar(true);
  const handleCloseSalvar = () => setOpenSalvar(false);


  const cadastrarPerfil = () => {
    axios.post('http://localhost:3001/usuario', {
      nome, cpf, email, telefone, senha, endereco, complemento, pontoRef
    }).then((response) => {
      window.location.replace("/");
    })
      .catch((response) => {
        alert(response);
      })
  }

  const checkFields = () => {
    if(nome === '' || cpf === '' || email === '' 
    || telefone === '' || senha === '' || confirmarSenha === '' 
    || endereco === '' || complemento === '' || pontoRef === '') {
      return false;
    }
    else{
      return true;
    }
  }

  return (
    <>
      <Navbar />
      <div className="Page">
        <div className="ContainerForm">
          <div className="ContainerTitulo">
            <div style={{width: 200}}></div>
            <h1>PERFIL</h1>
        </div>
          <PopUp 
            titulo='DESEJA SALVAR?'
            open={openSalvar}
            handleClose={handleCloseSalvar}
            onClickButtonSim={() => cadastrarPerfil()}
            onClickButtonNao={() => handleCloseSalvar()}
          />

        <div className="Inline">
        <Input
              titulo='Nome'
              placeholder='Nome'
              value={nome}
              onChange={(e) => setNome(textMask(e.target.value))}
              error={nome && nome.length < 3? 'Insira seu nome' : ''}
            />

            <Input
              titulo='CPF'
              placeholder='CPF'
              value={cpf}
              onChange={(e) => setCPF(cpfMask(e.target.value))}
              error={cpf && cpf.length < 14? 'Insira seu CPF' : ''}
            />
          </div>

          <div className="Inline">
            <Input
              titulo='Telefone'
              placeholder='Telefone'
              value={telefone}
              onChange={(e) => setTelefone(phoneMask(e.target.value))}
              error={telefone && telefone.length < 15? 'Insira seu telefone' : ''}
            />

            <Input
              titulo='Email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(emailMask(e.target.value))}
              error={email && email.length < 3? 'Insira seu email' : ''}
            />
          </div>

          <div className="Inline">
            <Input
              titulo='Senha'
              placeholder='Senha'
              value={senha}
              senha
              onChange={(e) => setSenha(senhaMask(e.target.value))}
              error={senha && confirmarSenha !== senha ? 'Insira sua senha' : ''}
            />

            <Input
              titulo='Confirmar Senha'
              placeholder='Confirmar Senha'
              senha
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(senhaMask(e.target.value))}
              error={confirmarSenha && confirmarSenha !== senha ? 'Insira sua senha' : ''}
            />
          </div>

          <div className="Inline">
            <Input
              titulo='Endereço'
              placeholder='Endereço'
              value={endereco}
              onChange={(e) => setEndereco(textMask(e.target.value))}
              error={endereco === '' ? 'Insira seu endereço' : ''}
            />

            <Input
              titulo='Complemento'
              placeholder='Complemento'
              value={complemento}
              onChange={(e) => setComplemento(textMask(e.target.value))}
              error={complemento === '' ? 'Insira seu complemento' : ''}
            />

          <Input
            titulo='Ponto de Referência'
            placeholder='Ponto de Referência'
            value={pontoRef}
            onChange={(e) => setPontoRef(e.target.value)}
            error={nome === '' ? 'Insira o ponto de referência' : ''}
          />
        </div>
        
        <div className="ContainerButtonDeletar">

            <Botao 
            width={150}
            text='Salvar'
            backgroundColor='#FF9D01'
            color='#FFF2DE'
            backgroundColorHover='#FFF2DE'
            colorHover='#FF9D01'
            borderHover='2px solid #FF9D01'
            onClick={() => {
                const check = checkFields();
                if(check){
                  handleOpenSalvar();
                }
              }}
          />
            <div style={{marginRight: 18}}>
              <Botao 
                width={150}
                text='Cancelar'
                backgroundColor='transparent'
                color='#FF9D01'
                border='2px solid #FF9D01'
                backgroundColorHover='#FF9D01'
                colorHover='#FFF2DE'
                borderHover='2px solid #FF9D01'
                onClick={() => window.location.replace("/")}
              />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}