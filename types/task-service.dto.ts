export interface ErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
}

export interface GetTaskPayload {
  email: string;
}

export interface GetTaskResp {
  taskName: string;
  taskDescription: string;
  dueDate: string;
  createdAt: string;
}

export interface CreateTaskPayload{
  email: string;
  taskName: string;
  taskDesc: string;
  dueDate: string;
}

export interface CreateTaskResp{
 taskId: string;
}