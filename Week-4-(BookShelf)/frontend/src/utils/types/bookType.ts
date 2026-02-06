export type Book = {
  id: number;
  title: string;
  isbn: string;
  pageCount: number;
  authors: string[];
};
export type CardProps = {
  book: Book;
  onViewDetails: (book: Book) => void;
  onAddFavraite: (id:number) => void; 
  actionLabel?: string;
};
export type BookFilterpropes = {
  authorValue: string;
  pageValue: string;
  authorOptions: { label: string; value: string }[];
  pageOptions: { label: string; value: string }[];
  onAuthorChange: (value: string) => void;
  onPageChange: (value: string) => void;
};
export type SearchProps = {
  value: string;
  handleSearchOperation: (value: string) => void;
};

export type SelectFilterProps = {
  value: string;
  options: Option[];
  placeholder: string;
  onChange: (value: string) => void;
};

export type Option = {
  label: string;
  value: string;
};
export type ApiResponse = {
  success: boolean;
  data: Book[];
};
export type BookdetailProps = {
  book: Book;
  onClose: () => void;
};