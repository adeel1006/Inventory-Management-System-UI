import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Request {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    item_name: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column()
    status: string;


}
