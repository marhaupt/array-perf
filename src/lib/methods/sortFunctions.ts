import type { Count } from '$lib/list/Count';
import { getDataByCount } from '$lib/list/getDataByCount';

export const oldSchoolSort = (count: Count) => {
  [...getDataByCount(count)].sort(
    (itemA, itemB) => itemA.age - itemB.age
  );
};

export const toSortedWay = (count: Count) => {
  getDataByCount(count).toSorted(
    (itemA, itemB) => itemA.age - itemB.age
  );
};
