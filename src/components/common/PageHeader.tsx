import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeActions } from "../../redux/reducers/themeReducer";
import { RootState } from "../../redux/store/store";

const PageHeader: FC<{ pageTitle: string }> = ({ pageTitle }) => {
  const dispatch = useDispatch();

  const theme = useSelector<RootState, string>(
    (state) => state.themeReducer.theme
  );

  const toggleTheme = () => {
    dispatch(ThemeActions.setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl">{pageTitle}</h2>
      <span onClick={toggleTheme}>
        <i
          className={`fa-solid fa-${
            theme === "light" ? "sun" : "moon"
          } text-2xl`}
        ></i>
      </span>
    </div>
  );
};

export default PageHeader;
