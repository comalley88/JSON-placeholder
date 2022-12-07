export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface User {
    [x: string]: any;
    id: number;
    name: string;
    username?: string;
    email?: string;
    company: {
      name: string;
    };
  }
  
  export interface IComment {
    postId: number;
    id?: number;
    name: string;
    email: string;
    body: string;
  }
  
  export interface IMessage {
    name: string;
    companyName: string;
    message: string;
  }

  export interface ISubmitPost {
    id: number,
    userId: number;
    body: string;
    title: string;
    name: string,
    company: {
      name: string;
    } 
  }

  export interface IToggleShowComments {
    id: number;
    show: boolean;
  }