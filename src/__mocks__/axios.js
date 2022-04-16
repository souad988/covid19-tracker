const todayDate = (new Date()).toISOString().split('T')[0];
export default {
  get: () => Promise.resolve({
    data: {
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
    },

  }),
};
