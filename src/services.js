const incSortByCases = (countries) => countries.sort((a, b) => a.today_confirmed - b.today_confirmed);
const reformulateCountryName=(country)=>{
    if (country==='US'){
      return 'USA'
    }else{
      let countArr=country.split('')
      return countArr.map(letter => letter==='_'?' ':letter
      ).join('')}
  }

  const reformulateCountryId=(id)=>{
    if (id==='us'){
      return 'usa'
    }else{
      let idArr=id.split('')
      return idArr.map(char => char==='_' || char===' '?'-':char
      ).join('')}
  }

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const updateCountryNames=(countries)=>{
   return countries.map(country => {
             return {...country,name:reformulateCountryName(country.name),
                    id:reformulateCountryId(country.id),
                    today_confirmed: numberWithSpaces(country.today_confirmed)
            }
            })
}  
export {incSortByCases, updateCountryNames} ;
