export interface Note {
  id: string;
  title: string;
  description: string;
}

export interface BackendNote {
  _id: string;
  title: string;
  description: string;
  pinned?: boolean;
}
