import FeaturedProfile from "./FeaturedProfile";
import HelpCenter from "./HelpCenter";
import HomeBlog from "./HomeBlog";
import HomePageBanner from "./HomePageBanner";

const Homepage = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <FeaturedProfile></FeaturedProfile>
      <HelpCenter />
      <HomeBlog></HomeBlog>
    </div>
  );
};

export default Homepage;
