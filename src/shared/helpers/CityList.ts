import cities from '../api/cities.json'

const CityList = JSON.parse(JSON.stringify(cities));
export const sortedCityList = citiesSorter(CityList, 50000);

function citiesSorter([...arr], populationRange: number) {
    const deleteLessPopulation = arr.filter((item) => item.population > populationRange);
    const max = deleteLessPopulation.reduce((acc, curr) => (+acc.population > +curr.population ? acc : curr));
    return deleteLessPopulation.sort((a, b) => (a === max ? -1 : b === max ? 1 : a.city.localeCompare(b.city)));
}