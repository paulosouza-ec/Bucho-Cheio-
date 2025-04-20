import { test, expect } from 'vitest';
import { EditarPerfil } from './editarPerfil';

function createEditarPerfil() {
    return new EditarPerfil({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '123456',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });
}

function cpfValido(cpf) {
    if(cpf.length > 14) {
        return Promise.resolve(cpf)
    } else {
        return Promise.reject(new Error('Insira um CPF válido'))
    }
}  

function camposValidos(perfil) {
    if(!perfil.nome || !perfil.email || !perfil.telefone || !perfil.senha || !perfil.endereco || !perfil.complemento) {
        return Promise.reject(new Error('Insira os campos corretamente'))
    } else {
        return Promise.resolve(perfil)
    }
} 

function nomeValido(nome) {
    console.log(nome)
    if(nome === '') {
        return Promise.reject(new Error('Insira o nome'))
    } else {
        return Promise.resolve(nome)
    }
} 

function enderecoValido(endereco) {
    if(endereco.length <= 0) {
        return Promise.reject(new Error('Insira o endereco'))
    } else {
        return Promise.resolve(endereco)
    }
} 

function senhaValido(senha) {
    if(senha.length <= 0) {
        return Promise.reject(new Error('Insira a senha'))
    } else {
        return Promise.resolve(senha)
    }
} 

function confirmaSenhaValido(senha, confirmarSenha) {
    if(senha !== confirmarSenha) {
        return Promise.reject(new Error('Insira a senha'))
    } else {
        return Promise.resolve(senha)
    }
} 

test('perfil bem sucedido', () => {
    const editarPerfil = new EditarPerfil({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '123456',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });

    expect(editarPerfil).toBeDefined();
});

test('test campos vazios', async () => {
    const editarPerfil = new EditarPerfil({
        id: 1,
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        senha: '',
        confirmarSenha: '',
        endereco: '',
        complemento: '',
        pontoRef: ''
    });
    
    await expect(() => camposValidos(editarPerfil)).rejects.toThrowError('Insira os campos corretamente')
})

test('test cpf', async () => {
    const editarPerfil = new EditarPerfil({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '123456',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });

    await expect(() => cpfValido(editarPerfil.cpf)).rejects.toThrowError('Insira um CPF válido')
})

test('test nome', async () => {
    const editarPerfil = new EditarPerfil({
        id: 1,
        nome: '',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '123456',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });
    
    await expect(() => nomeValido(editarPerfil.nome)).rejects.toThrowError('Insira o nome')
})

test('test endereço', async () => {
    const editarPerfil = new EditarPerfil({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '123456',
        confirmarSenha: '123456',
        endereco: '',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });
    
    await expect(() => enderecoValido(editarPerfil.endereco)).rejects.toThrowError('Insira o endereco')
})

test('test senha', async () => {
    const editarPerfil = new EditarPerfil({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '',
        confirmarSenha: '',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });
    
    await expect(() => senhaValido(editarPerfil.senha)).rejects.toThrowError('Insira a senha')
})

test('test senha e confirmar senha', async () => {
    const editarPerfil = new EditarPerfil({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '12345678',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });
    
    await expect(() => confirmaSenhaValido(editarPerfil.senha, editarPerfil.confirmarSenha)).rejects.toThrowError('Insira a senha')
})

test('test senha e confirmar senha', async () => {
    const editarPerfil = new EditarPerfil({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '12345678',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });
    
    await expect(() => confirmaSenhaValido(editarPerfil.senha, editarPerfil.confirmarSenha)).rejects.toThrowError('Insira a senha')
})