import CategorySection from "@/components/body/CategorySection";
import FeaturesSection from "@/components/body/FeaturesSection";
import HeroSection from "@/components/body/HeroSection";
import NewCollection from "@/components/body/NewCollection";
import OffersSections from "@/components/body/OffersSections";

export default function Home() {
  return (
    <div className="flex flex-col flex-shrink-0 gap-5">
    <HeroSection/>
    <CategorySection/>
    <NewCollection/>
    <OffersSections/>
    <FeaturesSection/>
    </div>
  )
}
