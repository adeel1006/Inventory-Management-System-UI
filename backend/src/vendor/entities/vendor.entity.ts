import { Category } from "src/category/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vendor {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @ManyToMany(()=> Category, (category) => category.vendor)
    @JoinColumn()
    category: Category[];
}
