export interface Book {
  textNumber: string;
  type: string;
  issued: string;
  title: string;
  language: string;
  authors: string;
  subjects: string;
  loCC: string;
  bookshelves: string;
  coverUrl: string;
}

export interface PageableResponse {
  content: Book[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
}
