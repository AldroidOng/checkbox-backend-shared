import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import { Task } from './task.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column
  password: string;

  @Column
  name: string;

  @HasMany(() => Task)
  tasks: Task[];
}
