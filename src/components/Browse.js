import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

 return (
    <div>
      {/* Importing the components */}
      <Header/>
      {
        showGptSearch?(
        <GptSearch/>
      ):(
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
      )}
      
      {/* 
      */}
    </div>
  )
}

export default Browse;