import { Request, Response } from 'express';
import { Pedido } from '@models/Pedido';
import { BuchoCheio, Crud } from '../global'

export default class PedidoController implements Crud {

    async create(request: Request, response: Response){
        const {itens,valorTotal} = request.body;
        const isAnyUndefined = BuchoCheio.areValuesUndefined(itens,valorTotal);
        if(isAnyUndefined) return response.status(400).send();

        const novoPedido = { itens,valorTotal };
        const {httpStatus, message} = await BuchoCheio.insertIntoDatabase(Pedido, novoPedido);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await BuchoCheio.getAll(Pedido);
        return response.status(httpStatus).send(values);
    }

    async getById(request: Request, response: Response){
        const { id } = request.params;
        const {value: pedidoNaoEncontrado, message } = await BuchoCheio.findByID(Pedido, id); 
           
        if(!pedidoNaoEncontrado) return response.status(400).send([]);

        return response.status(200).send(pedidoNaoEncontrado);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: pedidoNaoEncontrado, message } = await BuchoCheio.findByID(Pedido, id); 
           
        if(!pedidoNaoEncontrado) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await BuchoCheio.deleteValue(Pedido, pedidoNaoEncontrado);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {itens,valorTotal } = request.body;

        const ehPedidoUndefined = BuchoCheio.areValuesUndefined(itens,valorTotal, id);
        if(ehPedidoUndefined) return response.status(400).send();

        const pedidoAtualizado = { itens,valorTotal };

        const { httpStatus, messageFromUpdate } = await BuchoCheio.updateValue(Pedido, id, pedidoAtualizado);
        return response.status(httpStatus).send({ messageFromUpdate });
    }    
}