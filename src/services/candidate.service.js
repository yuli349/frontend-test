import list1 from '@/list/list1';
import list2 from '@/list/list2';
import list3 from '@/list/list3';

const people = [list1, list2, list3];

export function getCandidates() {
  return people.length > 0 ? people.shift() : [];
}

export default people;
