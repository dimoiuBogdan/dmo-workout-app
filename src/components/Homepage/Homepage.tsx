import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingActions } from "../../redux/reducers/loadingReducer";
import { RootState } from "../../redux/store/store";
import HomepageUserDashboard from "../HomepageUserDashboard/HomepageUserDashboard";
import Loading from "../Loading/Loading";
import MotivationalMusicCarousel from "../MotivationalMusicCarousel/MotivationalMusicCarousel";
import MotivationalVideosCarousel from "../MotivationalVideosCarousel/MotivationalVideosCarousel";
import WorkoutHistoryChart from "../WorkoutHistoryChart/WorkoutHistoryChart";

const Homepage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector<RootState, boolean>(
    (state) => state.loadingReducer.loading
  );

  useEffect(() => {
    dispatch(LoadingActions.setLoading(false));

    return () => {
      dispatch(LoadingActions.setLoading(true));
    };
  }, []);

  return !isLoading ? (
    <div>
      <h2 className="text-3xl mb-6">Homepage</h2>
      <HomepageUserDashboard />
      <WorkoutHistoryChart />
      <MotivationalMusicCarousel />
      <MotivationalVideosCarousel />
    </div>
  ) : (
    <Loading />
  );
};

export default Homepage;
