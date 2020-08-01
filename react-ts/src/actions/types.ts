import { FetchTodosAction, DeleteTodoAction } from './todos'

export enum ActionTypes {
  fetchTodos, // 沒有給值會自動帶數字 => 0, 若有其他參數會自動累加
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction
