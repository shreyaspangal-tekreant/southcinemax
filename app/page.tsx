import MainNav from "@/components/main-nav";
import HeroSection from "@/components/home-page/hero";
import Suggestions from "@/components/home-page/suggestions";
import RegisterCtaBlock from "@/components/home-page/register-cta";
import VideoSchowcaseBanner from "@/components/home-page/video-showcase-banner";
import Lifestyle from "@/components/home-page/lifestyle";
import AddHolder from "@/components/home-page/add-holder";
import LatestNews from "@/components/home-page/latest-news";
import Sponsers from "@/components/home-page/sponsers";
import MainFooter from "@/components/main-footer";
import DATA from "@/data/home.json";

const EXCLUSIVE_INTERVIEWS = DATA.exclusiveInterviews;
const MOVIE_PROMOTIONS = DATA.moviePromotions;
const BIG_BOSS = DATA.bigBoss;
const POPULAR_EVENTS = DATA.popularEvents;
const MAGAZINES = DATA.magazines;
const LATEST_NEWS = DATA.latestNews;
const LIFESTYLE = DATA.lifestyle;

export default function Home() {
  return (
    <>
      <MainNav />
      <main className="wix-madefor">
        <HeroSection />
        <Suggestions title="Exclusive Interviews" slides={EXCLUSIVE_INTERVIEWS} />
        <Suggestions title="Movie Promotions" slides={MOVIE_PROMOTIONS} />
        <Suggestions title="Telugu Big Boss" slides={BIG_BOSS} />
        <Suggestions title="Popular Events" slides={POPULAR_EVENTS} />
        <Suggestions title="Magazines" slides={MAGAZINES} type="vertical" />
        <RegisterCtaBlock />
        <VideoSchowcaseBanner />
        <Lifestyle list={LIFESTYLE} />
        <AddHolder />
        <LatestNews list={LATEST_NEWS} />
        <Sponsers />
      </main>
      <MainFooter />
    </>
  );
}
