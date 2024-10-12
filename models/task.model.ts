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

@Table({ tableName: 'tasks' })
export class Task extends Model<Task> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @Column
  name: string;

  @Column({ allowNull: true })
  description: string;

  @Column({ type: 'date', allowNull: true })
  dueDate: Date;
}
