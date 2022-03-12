import { useDispatch, useSelector } from "react-redux";
import { LoadingActions } from "../../redux/reducers/loadingReducer";
import { RootState } from "../../redux/store/store";
import Loading from "../Loading/Loading";

const Homepage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector<RootState, boolean>(
    (state) => state.loadingReducer.loading
  );

  //   dispatch(LoadingActions.setLoading(false));

  return !isLoading ? <div>Homepage</div> : <Loading />;
};

export default Homepage;
