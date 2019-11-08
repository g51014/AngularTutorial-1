export interface Todo {
  id: number;
  title: string;
  content: string;
  status: 'done' | 'todo' | 'inprogress';
}
