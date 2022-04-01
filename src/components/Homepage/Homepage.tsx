import HomepageHeader from "./UserWelcome";
import HomepageSummary from "./WorkoutsHistory";
import HomepageWorkoutDetails from "./WorkoutDetailsList";

const Homepage = () => {
  return (
    <div>
      <HomepageHeader
        image="https://media-exp1.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_400_400/0/1626347346908?e=2147483647&v=beta&t=JFZqHF9SiyNcFVrZsnv94-uRDUAYah-R_r1PHN-cNM0"
        name="Bobita"
      />
      <HomepageSummary />
      <HomepageWorkoutDetails />
    </div>
  );
};

export default Homepage;
