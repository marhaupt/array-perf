import type { Count } from '../types/Count';
import type { User } from '../types/User';
import { data_ten } from './data-10';
import { data_hundred } from './data-100';
import { data_thousand } from './data-1000';

export const getDataByCount = (count: Count): User[] => {
    switch (count) {
        case 'ten':
            return data_ten;
        case 'hundred':
            return data_hundred;
        case 'thousand':
            return data_thousand;
        default:
            return [];
    }
};
