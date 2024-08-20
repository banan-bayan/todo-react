export enum EStatusType {
  completed = "completed",
  active = "active"
}

export interface TaskType {
  id: number;
  text: string;
  status: EStatusType;
}

 type ButtonsSectionNamesType =
  | "All"
  | "Active"
  | "Completed"
  | "Clear Completed";

export interface ButtonSectionDataType {
 id: number
 name: ButtonsSectionNamesType
 action?: (id: number) => void
}

