import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Task extends Model<Task> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Column
  name: string;

  @Column({ allowNull: true })
  description: string;

  @Column({ type: 'date', allowNull: true })
  dueDate: Date;

  @Column({ type: 'timestamp', defaultValue: new Date() })
  createDate: Date;
}
