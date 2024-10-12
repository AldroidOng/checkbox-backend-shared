export class GetTaskPayload {
  email: string;
}

export class GetTaskResp {
  taskName: string;
  taskDescription: string;
  dueDate: Date;
  createdAt: Date;
}
