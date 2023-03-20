import { Category } from "src/category/entities/category.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vendor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    contact: number;

    @ManyToMany(()=> Category, (category) => category.vendor)
    @JoinTable()
    category: Category[];
}
