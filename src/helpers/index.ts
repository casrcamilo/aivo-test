import { Movie } from "../reducers"

export const ORDER_KEYS = {
  Title: 'title',
  Year: 'releaseYear'
}

export const getFilteredMovies = ({
  movies,
  yearRange,
  programType: programTypeFilter,
  nameFilter,
  order,
}: {
  movies: Array<Movie>,
  yearRange: Array<number>,
  programType: Array<string>,
  nameFilter: string,
  order: string,
}) => {
  const finalMovies = movies.filter(({ releaseYear, title, programType }) => {
    // filter by yearRange
    const [minYear, maxYear] = yearRange

    // exclude movies by release year
    // must be greater than min year and lower than max year
    if (releaseYear < minYear || releaseYear > maxYear) {
      return false
    }
    
    // filter by name, exclude if the movie doesn't include the text
    const nameFilterRegExp = new RegExp(nameFilter, 'i')
    if (nameFilter !== '' && title.search(nameFilterRegExp) < 0) {
      return false
    }

    // filter by program Type
    if (!programTypeFilter.includes(programType)) {
      return false
    }

    return true
  })
  
  // Sort the final array
  const sortedMovies = finalMovies.sort((a, b) => {
    const [orderKey, orderDirection] = order.split(' ')

    const formattedKey = ORDER_KEYS[orderKey as keyof typeof ORDER_KEYS]

    if (orderDirection == 'DESC') {
      return a[formattedKey as keyof typeof a] < b[formattedKey as keyof typeof b] ? 1 : -1
    }

    if (orderDirection === 'ASC') {
      return b[formattedKey as keyof typeof b] > a[formattedKey as keyof typeof a] ? -1 : 1
    }

    return 1
  })

  return sortedMovies
}