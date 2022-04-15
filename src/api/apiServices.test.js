import apiStoreService from './apiServices';

const expected = {
  dates: {
    '2022-04-12':
                {
                  countries: {
                    Afghanistan:
                    {
                      date: '2022-04-12',
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
    const result = await apiStoreService.apiGetAll();
    expect(result.data).toEqual(expected);
  });
});
