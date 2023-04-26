import { Category } from "src/modules/category/entities/category.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    representative: string;

    @Column({nullable: true})
    contact: number;

    @Column({nullable: true})
    address: string;

    @Column({nullable: true})
    zip: number;

    @Column({nullable: true})
    city: string;

    @Column({nullable: true})
    country: string;

    @Column({nullable: true})
    bio: string;

    @OneToMany(() => User, (user) => user.organization)
    @JoinColumn()
    user: User;

    @OneToMany(() => Category, (category) => category.organization)
    category: Category;

}


