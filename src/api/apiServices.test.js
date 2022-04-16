import apiStoreService from './apiServices';

const todayDate = (new Date()).toISOString().split('T')[0];
const expected = {
  dates: {
    [todayDate]:
                {
                  countries: {
                    Afghanistan:
                    {
                      date: [todayDate],
                      id: 'afghanistan',
                      links: [{}],
                      name: 'Afghanistan',
                      regions: [],
                      source: 'John Hopkins University',
                      today_confirmed: 178257,
                    },
                  },
                },
  },
};

describe('fetch api', () => {
  it('expects ', async () => {
    const result = await apiStoreService.apiGetAll(todayDate);
    expect(result.data).toEqual(expected);
  });
});
