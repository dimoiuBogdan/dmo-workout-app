import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingActions } from "../../redux/reducers/loadingReducer";
import { RootState } from "../../redux/store/store";
import HomepageUserDashboard from "./UserDashboard";
import Loading from "../common/Loading";
import MotivationalMusicCarousel from "./MotivationalMusicCarousel";
import MotivationalVideosCarousel from "./MotivationalVideosCarousel";
import PageHeader from "../common/PageHeader";
import WorkoutHistoryChart from "./WorkoutHistoryChart";

const Homepage: FC<any> = () => {
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
      <PageHeader pageTitle="Homepage" />
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
