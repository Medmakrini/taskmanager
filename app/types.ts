export type RootStackParamList = {
    'TaskList': undefined;
    'add-task': undefined;
  };
  
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}
