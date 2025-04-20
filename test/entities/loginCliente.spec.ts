import { test, expect } from 'vitest';
import { LoginCliente } from './loginCliente';



function createLoginCliente() {
    return new LoginCliente({
        email: 'psgs@cin.ufpe.br',
        senha: '1234'
    });
}

function loginBemSucedido(email, senha) {
    if(senha === senha.createLoginCliente && email === email.createLoginCliente) {
        return Promise.resolve('login bem sucedido')
    }
  }

  function emailVazio(email) {
    if(email === '') {
        return Promise.reject(new Error('Insira seu email'))
    } else {
        return Promise.resolve(email)
    }
  } 


  function senhaVazia(senha) {
    if(senha === '') {
        return Promise.reject(new Error('Insira sua senha'))
    } else {
        return Promise.resolve(senha)
    }
  } 
  

  function camposVazios(email, senha) {
    if(senha === '' && email === '') {
        return Promise.reject(new Error('Preencha todos os campos'))
    } else {
        return Promise.resolve(email)
    }
  } 


  function senhaIncorreta(senha, email) {
    if(senha != '1234' && email === 'psgs@cin.ufpe.br') {
        return Promise.reject(new Error('Email ou senha incorreto'))
    } else {
        return Promise.resolve(senha)
    }
  } 
  
  function emailIncorreto(email, senha) {
    if(email != 'psgs@cin.ufpe.br' && senha === '1234') {
        return Promise.reject(new Error('Email ou senha incorreto'))
    } else {
        return Promise.resolve(email)
    }
  } 


  test('login bem sucedido', async() => {
    const loginCliente = new LoginCliente({
        email: 'psgs@cin.ufpe.br',
        senha: '1234',
    });
    await expect(() => loginBemSucedido(loginCliente.email, loginCliente.senha))
  });


  test('email e senha vazio', async() => {
    const loginCliente = new LoginCliente({
        email: '',
        senha: '',
    });
    await expect(() => camposVazios(loginCliente.email, loginCliente.senha)).rejects.toThrowError('Preencha todos os campos')
  });


  test('email vazio', async() => {
    const loginCliente = new LoginCliente({
        email: '',
        senha: 'senha123',
    });
    await expect(() => emailVazio(loginCliente.email)).rejects.toThrowError('Insira seu email')
  });

  
  test('senha vazia', async() => {
    const loginCliente = new LoginCliente({
        email: 'pessoa@mail.com',
        senha: '',
    });
    await expect(() => senhaVazia(loginCliente.senha)).rejects.toThrowError('Insira sua senha')
  });
  
  test('senha incorreta', async() => {
    const loginCliente = new LoginCliente({
        email: 'psgs@cin.ufpe.br',
        senha: 'senha123',
    });
    await expect(() => senhaIncorreta(loginCliente.senha,loginCliente.email )).rejects.toThrowError('Email ou senha incorreto')
  });
  
  test('email incorreto', async() => {
    const loginCliente = new LoginCliente({
        email: 'pessoa@mail.com',
        senha: '1234',
    });
    await expect(() => emailIncorreto(loginCliente.email,loginCliente.senha)).rejects.toThrowError('Email ou senha incorreto')
  });








