const incSortByCases = (countries) => countries.sort((a, b) => b.today_confirmed - a.today_confirmed);
const reformulateCountryName = (country) => {
  if (country === 'US') {
    return 'USA';
  }
  const countArr = country.split('');
  return countArr.map((letter) => (letter === '_' ? ' ' : letter)).join('');
};

const reformulateCountryId = (id) => {
  if (id === 'us') {
    return 'usa';
  }
  const idArr = id.split('');
  return idArr.map((char) => (char === '_' || char === ' ' ? '-' : char)).join('');
};

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
const updateCountryNames = (countries) => countries.map((country) => ({
  regions: country.regions.map((region) => ({
    name: region.name,
    id: region.id,
    today_confirmed: region.today_confirmed,
  })),
  name: reformulateCountryName(country.name),
  id: reformulateCountryId(country.id),
  today_confirmed: numberWithSpaces(country.today_confirmed),
}));
export { incSortByCases, updateCountryNames };
