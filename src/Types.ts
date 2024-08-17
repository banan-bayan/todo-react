export type StatusesType = "completed" | "active";
export enum Buttons {
  All,
  Active,
  Completed,
  ClearCompleted
}

export interface TaskType {
  id: number;
  text: string;
  status: StatusesType;
}

 type ButtonsSectionNamesType =
  | "All"
  | "Active"
  | "Completed"
  | "Clear Completed";

export interface ButtonSectionDataType {
 id: number
 name: ButtonsSectionNamesType
}

