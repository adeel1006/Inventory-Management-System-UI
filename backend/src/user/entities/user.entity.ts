import { Organization } from 'src/organization/entities/organization.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  otp: number;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @ManyToOne(()=> Organization, (organization) => organization.user)
  organization: Organization;
}
