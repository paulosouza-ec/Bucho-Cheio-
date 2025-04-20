import { Request, Response } from 'express';
import { Usuario } from '@models/Usuario';
import { BuchoCheio, Crud } from '../global'

export default class UsuarioController implements Crud {

    async create(request: Request, response: Response){
        const {nome, cpf, telefone, email, senha, endereco, complemento, pontoRef} = request.body;

        const isAnyUndefined = BuchoCheio.areValuesUndefined(nome, cpf, telefone, email, senha, endereco, complemento, pontoRef);
        if(isAnyUndefined) return response.status(400).send();

        const novoUsuario = { nome, cpf, telefone, email, senha, endereco, complemento, pontoRef };
        const {httpStatus, message} = await BuchoCheio.insertIntoDatabase(Usuario, novoUsuario);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await BuchoCheio.getAll(Usuario);
        return response.status(httpStatus).send(values);
    }

    async getById(request: Request, response: Response){
        const { id } = request.params;
        const {value: usuarioNaoEncontrado, message } = await BuchoCheio.findByID(Usuario, id); 
           
        if(!usuarioNaoEncontrado) return response.status(400).send([]);

        return response.status(200).send(usuarioNaoEncontrado);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: usuarioNaoEncontrado, message } = await BuchoCheio.findByID(Usuario, id); 
           
        if(!usuarioNaoEncontrado) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await BuchoCheio.deleteValue(Usuario, usuarioNaoEncontrado);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {nome, cpf, telefone, email, senha, endereco, complemento, pontoRef } = request.body;

        const ehUsuarioUndefined = BuchoCheio.areValuesUndefined(nome, cpf, telefone, email, senha, endereco, complemento, pontoRef, id);
        if(ehUsuarioUndefined) return response.status(400).send();

        const usuarioAtualizado = { nome, cpf, telefone, email, senha, endereco, complemento, pontoRef };

        const { httpStatus, messageFromUpdate } = await BuchoCheio.updateValue(Usuario, id, usuarioAtualizado);
        return response.status(httpStatus).send({ messageFromUpdate });
    }


    async login(request: Request, response: Response) {
        const { email, senha } = request.body;
        // Verifica se o email e a senha foram fornecidos
        if (!email || !senha) {
          return response.status(400).send({ mensagem: 'Email e senha são obrigatórios.' });
        }
      
        // Busca o usuário pelo email
        const usuario = await BuchoCheio.findByEmail(Usuario, email); 
        // Verifica se o usuário foi encontrado
        if (!usuario) {
          return response.status(401).send({ mensagem: 'Usuário não encontrado.' });
        }
      
        // Verifica se a senha fornecida corresponde à senha do usuário
        if (usuario.value.senha !== senha) {
          return response.status(401).send({ mensagem: 'Senha incorreta.' });
        }
      
        // Se chegamos aqui, o login foi bem-sucedido
        return response.status(200).send({ id: usuario.value.id });
      }
      
    
}