import React, { useEffect, useState } from "react";
import { Botao } from "../../components/Botao";
import { Input } from '../../components/Input';
import { PopUp } from '../../components/PopUp';
import { Navbar } from "../../components/Navbar";
import axios from 'axios';
import './style.css';
import { cpfMask, emailMask, phoneMask, senhaMask, textMask } from "../../utils/mask";

export const EditarPerfil = () => {
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
  const [openDeletar, setOpenDeletar] = useState(false);
  const handleOpenSalvar = () => setOpenSalvar(true);
  const handleCloseSalvar = () => setOpenSalvar(false);
  const handleOpenDeletar = () => setOpenDeletar(true);
  const handleCloseDeletar = () => setOpenDeletar(false);
  const regexEmail = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/

  useEffect(() => {
    axios.get(`http://localhost:3001/usuario/${Number(localStorage.getItem('@BuchoCheio:id'))}`)
      .then((response) => {
        setNome(response.data.nome);
        setCPF(cpfMask(response.data.cpf));
        setEmail(response.data.email);
        setTelefone(phoneMask(response.data.telefone));
        setSenha(response.data.senha);
        setConfirmarSenha(response.data.senha);
        setEndereco(response.data.endereco);
        setComplemento(response.data.complemento);
        setPontoRef(response.data.pontoRef);
      })
  }, [])

  const atualizarPerfil = () => {
    axios.put(`http://localhost:3001/usuario/${Number(localStorage.getItem('@BuchoCheio:id'))}`, {
      nome, cpf, email, telefone, senha, endereco, complemento, pontoRef
    }).then(() => {
      setEditar(false);
      window.location.reload();
    })
  }

  const deletarPerfil = () => {
    axios.delete(`http://localhost:3001/usuario/${Number(localStorage.getItem('@BuchoCheio:id'))}`, {
      nome, cpf, email, telefone, senha, endereco, complemento, pontoRef
    }).then(() => {
      setEditar(false);
      window.location.replace("/");
    })
  }
  
  const checkFields = () => {
    if(nome === '' || cpf === '' || email === '' 
    || telefone === '' || senha === '' || confirmarSenha === '' 
    || endereco === '' || complemento === '' || !regexEmail.test(email)) {
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
            <Botao 
              width={150}
              text='EDITAR'
              backgroundColor='#FF9D01'
              color='#FFF2DE'
              onClick={() => setEditar(true)}
              backgroundColorHover='#FFF2DE'
              colorHover='#FF9D01'
              borderHover='2px solid #FF9D01'
            />
          </div>
          <PopUp 
            titulo='DESEJA SALVAR?'
            open={openSalvar}
            handleClose={handleCloseSalvar}
            onClickButtonSim={() => atualizarPerfil()}
            onClickButtonNao={() => handleCloseSalvar()}
          />

          <PopUp 
            titulo='Você deseja excluir a sua conta ?'
            open={openDeletar}
            handleClose={handleCloseDeletar}
            onClickButtonSim={() => deletarPerfil()}
            onClickButtonNao={() => handleCloseDeletar()}
          />

          <div className="Inline">
            <Input
              titulo='Nome'
              placeholder='Nome'
              value={nome}
              onChange={(e) => setNome(textMask(e.target.value))}
              error={nome === '' || nome.length < 3? 'Insira seu nome' : ''}
            />

            <Input
              titulo='CPF'
              placeholder='CPF'
              value={cpf}
              onChange={(e) => setCPF(cpfMask(e.target.value))}
              error={cpf === '' || cpf.length < 14? 'Insira seu CPF' : ''}
            />
          </div>

          <div className="Inline">
            <Input
              titulo='Telefone'
              placeholder='Telefone'
              value={telefone}
              onChange={(e) => setTelefone(phoneMask(e.target.value))}
              error={telefone === '' || telefone.length < 15? 'Insira seu telefone' : ''}
            />

            <Input
              titulo='Email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(emailMask(e.target.value))}
              error={email === '' || email.length < 3 || !regexEmail.test(email)? 'Insira seu email' : ''}
            />
          </div>

          <div className="Inline">
            <Input
              titulo='Senha'
              placeholder='Senha'
              value={senha}
              senha
              onChange={(e) => setSenha(senhaMask(e.target.value))}
              error={senha === '' || confirmarSenha !== senha ? 'Insira sua senha' : ''}
            />

            <Input
              titulo='Confirmar Senha'
              placeholder='Confirmar Senha'
              senha
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(senhaMask(e.target.value))}
              error={confirmarSenha === '' || confirmarSenha !== senha ? 'Insira sua senha' : ''}
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
              onChange={(e) => setPontoRef(textMask(e.target.value))}
            />
          </div>
          
          <div className="ContainerButtonDeletar">
            <div style={{marginLeft: 18}}>
              <Botao 
                width={150}
                text='Deletar conta'
                backgroundColor='#DD1C1A'
                color='#FFF2DE'
                backgroundColorHover='#FFF2DE'
                colorHover='#DD1C1A'
                borderHover='2px solid #DD1C1A'
                onClick={() => handleOpenDeletar()}
              />
            </div>

            { editar && (
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
            )}

            { editar && (
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
                  onClick={() => setEditar(false)}
                />
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}