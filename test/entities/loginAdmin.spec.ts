import { test, expect } from 'vitest';
import { LoginAdmin } from './loginAdmin';

function loginCorreto(email, senha) {
  if(senha === 'admin123' && email === 'admin@gmail.com') {
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
      return Promise.reject(new Error('preencha todos os campos'))
  } else {
      return Promise.resolve(email)
  }
} 

function senhaIncorreta(senha, email) {
  if(senha != "admin123" && email === "admin@gmail.com") {
      return Promise.reject(new Error('email ou senha incorreto'))
  } else {
      return Promise.resolve(senha)
  }
} 

function emailIncorreto(email, senha) {
  if(email != "admin@gmail.com" && senha === "admin123") {
      return Promise.reject(new Error('email ou senha incorreto'))
  } else {
      return Promise.resolve(email)
  }
} 

test('login Correto', async() => {
  const loginAdmin = new LoginAdmin({
      email: 'admin@gmail.com',
      senha: 'admin123',
  });
  await expect(() => loginCorreto(loginAdmin.email, loginAdmin.senha))
});

test('email e senha vazio', async() => {
  const loginAdmin = new LoginAdmin({
      email: '',
      senha: '',
  });
  await expect(() => camposVazios(loginAdmin.email, loginAdmin.senha)).rejects.toThrowError('preencha todos os campos')
});

test('email vazio', async() => {
  const loginAdmin = new LoginAdmin({
      email: '',
      senha: 'aleatoria',
  });
  await expect(() => emailVazio(loginAdmin.email)).rejects.toThrowError('Insira seu email')
});

test('senha vazia', async() => {
  const loginAdmin = new LoginAdmin({
      email: 'aleatorio',
      senha: '',
  });
  await expect(() => senhaVazia(loginAdmin.senha)).rejects.toThrowError('Insira sua senha')
});

test('senha incorreta', async() => {
  const loginAdmin = new LoginAdmin({
      email: 'admin@gmail.com',
      senha: 'aleatório',
  });
  await expect(() => senhaIncorreta(loginAdmin.senha,loginAdmin.email )).rejects.toThrowError('email ou senha incorreto')
});

test('email incorreto', async() => {
  const loginAdmin = new LoginAdmin({
      email: 'aleatorio',
      senha: 'admin123',
  });
  await expect(() => emailIncorreto(loginAdmin.email,loginAdmin.senha)).rejects.toThrowError('email ou senha incorreto')
});