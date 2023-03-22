import { Category } from "src/modules/category/entities/category.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: string;

    @CreateDateColumn({type: 'date'})
    purchase_date: Date;

    @Column()
    status: string;

    @Column()
    sr_number: number;

    @ManyToOne(() => Category, (category) => category.item)
    @JoinColumn()
    category: Category;

    @ManyToOne(() => User, (us) => us.item)
    @JoinColumn()
    user: User

}
