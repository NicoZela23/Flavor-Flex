import { FormEvent, RefObject } from "react";
import { NavLink } from "react-router-dom";
import FlavorFLexLogo from '../../assets/FLAVORFLEX.svg'

interface NavbarProps {
  searchHandler: (event: FormEvent<HTMLFormElement>) => void;
  inputField: RefObject<HTMLInputElement>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  savedRecipes: any[];
}

const Navbar = ({
    searchHandler,
    inputField,
    searchQuery,
    setSearchQuery,
    savedRecipes,
  }: NavbarProps) => {
    const navActive = ({ isActive }: { isActive: boolean }) => {
      return {
        color: isActive ? "#f43f5e" : undefined,
      };
    };
  
    return (
    <div className="navbar flex justify-between items-center container mx-auto py-4 flex-col lg:flex-row gap-5 lg:gap-0">
    <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/4">
    <div className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 flex items-center">
      <img 
        src={FlavorFLexLogo} 
        alt="FlavorFlex logo" 
        className="h-12 w-auto mb-4"
      />
    </div>
  </div>
  
  <form className="search-bar w-full lg:w-2/4" onSubmit={searchHandler}>
    <input
      ref={inputField}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      type="search"
      placeholder="Search recipe...."
      required
      className="bg-white/75 p-3 px-8 w-full max-w-lg rounded-full outline-none shadow-lg shadow-red-100 focus:shadow-red-200 duration-300"
    />
  </form>
  
  <ul className="menu flex gap-5 w-full lg:w-1/4 justify-center lg:justify-end">
    <li>
      <NavLink
        style={navActive}
        end
        to="/"
        className="text-gray-400 hover:text-gray-600 duration-300"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        style={navActive}
        to="/Favourites"
        className="text-gray-400 hover:text-gray-600 duration-300"
      >
        Favourites
        <span className="favourites-count font-bold text-sky-400">
          ({savedRecipes.length})
        </span>
      </NavLink>
    </li>
  </ul>
</div>
    );
  };
  
  export default Navbar;