import { SortOrder } from 'antd/es/table/interface';

export const NO_SEARCH_RESULTS = 'No records meet your criteria. Please change your criteria and search again.';

export const SORT_DIRECTIONS: { [key: string]: SortOrder } = {
  ascend: 'ascend',
  descend: 'descend',
};

export const SERVER_STANDARD_DATE = 'YYYY-MM-DD';
export const CLIENT_STANDARD_DATE = 'MMM DD, YYYY';
