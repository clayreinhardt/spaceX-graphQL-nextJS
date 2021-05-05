import { SearchIcon } from '@heroicons/react/solid'

// search & drop down 

// const DropDown =() =>{

// }


const Search = ({query, onQueryChange, orderBy, onOrderBy}) =>{



    return (
        <div className=" hidden md:relative slashed-zero flex-1 px-2 md:flex items-center justify-center w-max sm:inset-0">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input 
            type="text"
            value={query}
            onChange={(event) => (onQueryChange(event.target.value))}
              id="query"
              name="query"
              className="block w-full bg-white-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    )
}

export default Search