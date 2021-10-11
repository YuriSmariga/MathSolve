import {User} from '../user/user-interfaces';

export interface Task {
  id: number,
  title: string,
  user: User,
  date: Date,
  content: string,
  type?: string,
  tags?: string[]
}
