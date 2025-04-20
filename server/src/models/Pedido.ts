import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { ItemPedido } from "./ItemPedido"

@Entity()
export class Pedido {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    valorTotal: string

    @Column({
        type: 'json',
        transformer: {
            from: value => JSON.parse(value),
            to: value => JSON.stringify(value)
        }
    })
    itens: ItemPedido[]
}
