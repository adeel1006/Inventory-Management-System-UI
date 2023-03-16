import { User } from "src/user/entities/user.entity";
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
    bio: string;

    @OneToMany(() => User, (user) => user.organization)
    @JoinColumn({ name: 'organization_id', referencedColumnName: 'id' })
    user: User;

}
