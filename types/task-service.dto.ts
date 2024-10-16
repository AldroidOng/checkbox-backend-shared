export interface ErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
}

export interface GetTaskPayload {
  email: string;
}

export interface GetTaskRespSuccess {
  taskId: string;
  taskName: string;
  taskDescription: string;
  dueDate: string;
  createdAt: string;
  status: TaskStatus;
}

export type GetTaskResp = GetTaskRespSuccess[] | ErrorResponse;

export interface CreateTaskPayload {
  email: string;
  taskName: string;
  taskDesc: string;
  dueDate: string;
}

export interface CreateTaskRespSuccess {
  taskId: string;
}

export type CreateTaskResp = CreateTaskRespSuccess | ErrorResponse;

export enum TaskStatus {
  NOT_URGENT = 'Not urgent',
  DUE_SOON = 'Due soon',
  OVERDUE = 'Overdue',
}

export interface UpdateTaskPayload {
  email: string;
  taskId: string;
  taskName: string;
  taskDesc: string;
  dueDate: string;
}

export interface UpdateTaskRespSuccess {
  taskId: string;
}

export type UpdateTaskResp = UpdateTaskRespSuccess | ErrorResponse;
