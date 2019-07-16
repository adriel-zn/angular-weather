import { SortPipe } from './sort.pipe';
import { cityOne, cityTwo } from '../mock/sample.data';

describe('SortPipe', () => {
  it('should sort the array descending by Temp ', () => {
    const pipe = new SortPipe();

    expect(pipe.transform([cityOne, cityTwo], 'temp'))
      .toEqual([cityTwo, cityOne]);
  });

  it('should sort the array descending by Name ', () => {
    const pipe = new SortPipe();

    expect(pipe.transform([cityOne, cityTwo], 'name'))
      .toEqual([cityOne, cityTwo]);
  });
});
