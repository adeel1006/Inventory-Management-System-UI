import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @CreateDateColumn({type: 'date'})
  date: Date;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
