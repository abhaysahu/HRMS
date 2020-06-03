import { ListEmployeePipe } from './list-employee.pipe';

describe('ListEmployeePipe', () => {
  it('create an instance', () => {
    const pipe = new ListEmployeePipe();
    expect(pipe).toBeTruthy();
  });
});
