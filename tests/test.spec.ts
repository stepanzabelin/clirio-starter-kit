import { Clirio } from 'clirio';

describe('Args Clirio.parser', () => {
  it('Clirio.parse command', () => {
    expect(Clirio.parse('--foo -ba -dce 15')).toEqual([
      { type: 'option', key: 'foo', value: null },
      { type: 'option', key: 'b', value: null },
      { type: 'option', key: 'a', value: null },
      { type: 'option', key: 'd', value: null },
      { type: 'option', key: 'c', value: null },
      { type: 'option', key: 'e', value: '15' },
    ]);
  });
});
