import { Task } from '../math/task';

export interface User {
  id?: number,
  name: string,
  role: string,
  password: string,
  tasks: Task[]
}
