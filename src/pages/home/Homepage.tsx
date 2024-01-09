import HelpCenter from "./HelpCenter";
import HomeBlog from "./HomeBlog";
import HomePageBanner from "./HomePageBanner";

const Homepage = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <HomeBlog></HomeBlog>
      <HelpCenter />
    </div>
  );
};

export default Homepage;
