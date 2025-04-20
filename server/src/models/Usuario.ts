import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    cpf: string

    @Column()
    telefone: string

    @Column()
    email: string

    @Column()
    senha: string

    @Column()
    endereco: string

    @Column()
    complemento: string

    @Column()
    pontoRef: string

}
