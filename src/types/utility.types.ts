export interface Paginated<T> {
  count: number;
  data: T[];
}

export interface ListFilters {
  page?: number;
  search?: string;
  limit?: number;
}
