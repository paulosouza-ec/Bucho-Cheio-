import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    ingredientes: string | null

    @Column({ type: "varchar", nullable: true })
    imagem: string | null

    @Column("simple-array", { nullable: true })
    adicionais: string[] | null

    @Column({ type: "decimal", precision: 10, scale: 2 })
    preco: number
}