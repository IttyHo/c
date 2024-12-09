export interface Task {
  id: number;
  text: string;
  completed?: boolean;
}

export class TodoState {
  tasks: Task[];

}

// export const initialState: TodoState = {
//   tasks: []=[],

// }; 