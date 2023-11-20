// @ts-nocheck
import { Helmet } from "react-helmet";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Rating from "../Components/Rating/Rating";
import TopFood from "../Components/TopFood/TopFood";

// @ts-nocheck
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | TasteHarmony Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <TopFood></TopFood>
      </div>
      <Rating></Rating>
      <About></About>
    </div>
  );
};

export default Home;
