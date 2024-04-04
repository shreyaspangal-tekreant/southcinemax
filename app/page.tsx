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

const slides = [
  { id: 1, src: "/images/home/hero-banner-img.webp" },
  { id: 2, src: "/images/home/hero-banner-img.webp" },
  { id: 3, src: "/images/home/hero-banner-img.webp" },
  { id: 4, src: "/images/home/hero-banner-img.webp" },
  { id: 5, src: "/images/home/hero-banner-img.webp" },
  { id: 6, src: "/images/home/hero-banner-img.webp" },
  { id: 7, src: "/images/home/hero-banner-img.webp" },
];

export default function Home() {
  return (
    <>
      <MainNav />
      <main className="wix-madefor">
        <HeroSection />
        <Suggestions title="Exclusive Interviews" slides={slides} />
        <Suggestions title="Movie Promotions" slides={slides} />
        <Suggestions title="Telugu Big Boss" slides={slides} />
        <Suggestions title="Popular Events" slides={slides} />
        <Suggestions title="Magazines" slides={slides} type="vertical" />
        <RegisterCtaBlock />
        <VideoSchowcaseBanner />
        <Lifestyle />
        <AddHolder />
        <LatestNews />
        <Sponsers />
      </main>
      <MainFooter />
    </>
  );
}
