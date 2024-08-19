export type StatusesType = "completed" | "active";

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
 action?: (id: number) => void
}

