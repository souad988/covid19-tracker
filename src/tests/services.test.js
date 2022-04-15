import {
  updateCountryNames,

} from '../services';

describe('covid19 tracker services', () => {
  it('should reformulate names and regions', async () => {
    const entry = [
      {
        date: '2022-04-12',
        id: 'us',
        links: [],
        name: 'US',
        name_es: 'EE.UU.',
        name_it: 'Stati Uniti',
        regions: [{
          date: '2022-04-12', id: 'iowa', links: [], name: 'Iowa', name_es: 'Iowa', today_confirmed: 760025,
        },
        {
          date: '2022-04-12', id: 'minnesota', links: [], name: 'Minnesota', name_es: 'Minnesota', today_confirmed: 1435232,
        },
        ],
        source: 'John Hopkins University',
        today_confirmed: 80477797,
        today_deaths: 986387,
      }];
    const expected = [{
      id: 'usa',
      name: 'USA',
      regions: [
        { name: 'Iowa', id: 'iowa', today_confirmed: 760025 },
        { name: 'Minnesota', id: 'minnesota', today_confirmed: 1435232 }],
      today_confirmed: '80 477 797',
    }];

    const result = updateCountryNames(entry);

    await expect(result).toEqual(expected);
  });
});
