export interface GetTaskPayload {
  email: string;
}

export interface GetTaskResp {
  taskName: string;
  taskDescription: string;
  dueDate: string;
  createdAt: string;
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
}
