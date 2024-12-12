export interface Task {
  id: number;
  text: string;
  completed?: boolean;
}

export interface TodoState {
  tasks: Task[];

}

export const initialState: TodoState = {
  tasks:[]=[],

}; 