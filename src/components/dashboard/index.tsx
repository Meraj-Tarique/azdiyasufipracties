import MainSection from "./components/MainSection";
// import MissionAndVissionPage from "./components/MissionAndVisson";
import Services from "./components/ServiceSection";

export default function DashBoard() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <MainSection />
      {/* <MissionAndVissionPage /> */}
      <Services />
      {/* <Events /> */}
    </div>
  );
}
