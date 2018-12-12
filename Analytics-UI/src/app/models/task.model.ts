export interface Task {
    Id: number;
    WorkItemNo: string;
    Title: string;
    TaskType: string;
    Status: string;
    ActualStartDate: any;
    ActualEndDate: any;
    Effort: number;
    AssignedTo: string;
}
