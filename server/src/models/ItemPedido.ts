import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

    
@Entity()
export class ItemPedido {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    valor: string

    @Column()
    quantidade: string

}
