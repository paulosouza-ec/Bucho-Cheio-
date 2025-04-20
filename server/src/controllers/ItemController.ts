import { Request, Response } from 'express';
import { Item } from '@models/Item';
import { BuchoCheio, Crud } from '../global'

export default class ItemController implements Crud {

    async create(request: Request, response: Response){
        const {nome, ingredientes, imagem, adicionais, preco} = request.body;

        const isAnyUndefined = BuchoCheio.areValuesUndefined(nome, ingredientes, imagem, adicionais, preco);
        if(isAnyUndefined) return response.status(400).send();

        const novoItem = { nome, ingredientes, imagem, adicionais, preco };
        const {httpStatus, message} = await BuchoCheio.insertIntoDatabase(Item, novoItem);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await BuchoCheio.getAll(Item);
        return response.status(httpStatus).send(values);
    }

    async getById(request: Request, response: Response){
        const { id } = request.params;
        const {value: itemNaoEncontrado, message } = await BuchoCheio.findByID(Item, id); 
           
        if(!itemNaoEncontrado) return response.status(400).send([]);

        return response.status(200).send(itemNaoEncontrado);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: itemNaoEncontrado, message } = await BuchoCheio.findByID(Item, id); 
           
        if(!itemNaoEncontrado) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await BuchoCheio.deleteValue(Item, itemNaoEncontrado);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {nome, ingredientes, imagem, adicionais, preco } = request.body;

        const ehItemUndefined = BuchoCheio.areValuesUndefined(nome, ingredientes, imagem, adicionais, preco, id);
        if(ehItemUndefined) return response.status(400).send();

        const itemAtualizado = { nome, ingredientes, imagem, adicionais, preco };

        const { httpStatus, messageFromUpdate } = await BuchoCheio.updateValue(Item, id, itemAtualizado);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
         
}