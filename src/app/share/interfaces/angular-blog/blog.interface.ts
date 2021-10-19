export interface IBlogRequest {
    postedBy: string;
    title: string;
    date: number;
    content: string;
}

export interface IBlogResponse {
    id: number;
    postedBy: string;
    editedBy?: string;
    title: string;
    date: number;
    content: string;
}