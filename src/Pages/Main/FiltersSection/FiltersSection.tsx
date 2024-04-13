import { Box } from "@mui/material";
import ShowNumberSelect from "../ShowNumberSelect/ShowNumberSelect";
import CountrySelect from "../CountrySelect/CountrySelect";
import YearSelect from "../YearSelect/YearSelect";
import AgeSelect from "../AgeSelect/AgeSelect";
import { useAppDispatch, useAppSelector } from "../../../Redux/typedApi";
import { useSearchParams } from "react-router-dom";
import React from "react";
import { ageChanged } from "../../../Redux/UI/Age/ageSlice";
import { countryChanged } from "../../../Redux/UI/Country/countrySlice";
import { showNumberChanged } from "../../../Redux/UI/ShowNumber/showNumberSlice";
import { pageChanged } from "../../../Redux/Entities/Movies/moviesSlice";
import { yearChanged } from "../../../Redux/UI/Year/yearSlice";
import { selectAgeSlice } from "../../../Redux/UI/Age/selectors";
import { selectCountrySlice } from "../../../Redux/UI/Country/selectors";
import { selectCurrentPage } from "../../../Redux/Entities/Movies/selectors";
import { selectShowNumberSlice } from "../../../Redux/UI/ShowNumber/selectors";
import { selectYearSlice } from "../../../Redux/UI/Year/selectors";


function FiltersSection() {
  const dispatch = useAppDispatch();
  const [queryParams, setQueryParams] = useSearchParams();
  const age = useAppSelector(selectAgeSlice);
  const country = useAppSelector(selectCountrySlice);
  const page = useAppSelector(selectCurrentPage);
  const showNumber = useAppSelector(selectShowNumberSlice);
  const year = useAppSelector(selectYearSlice);

  React.useEffect(() => {
    const ageParam = queryParams.get("age");
    if (ageParam) {
      dispatch(ageChanged(ageParam));
    }

    const countryParam = queryParams.get("country");
    if (countryParam) {
      dispatch(countryChanged(countryParam));
    }
    const showNumberParam = queryParams.get("showNumber");
    if (showNumberParam) {
      dispatch(showNumberChanged(showNumberParam));
    }
    const pageParam = queryParams.get("page");
    if (pageParam) {
      dispatch(pageChanged(+pageParam));
    }
    const yearParam = queryParams.get("year");
    if (yearParam) {
      dispatch(yearChanged(yearParam));
    }
  }, [queryParams, dispatch]);

  React.useEffect(() => {
    queryParams.set("age", age);
    queryParams.set("country", country);
    queryParams.set("showNumber", showNumber);
    queryParams.set("page", String(page));
    queryParams.set("year", year);
    setQueryParams(queryParams);

    return () => {
      queryParams.delete("age");
      queryParams.delete("country");
      queryParams.delete("showNumber");
      queryParams.delete("page");
      queryParams.delete("year");
      setQueryParams(queryParams);
    };
  }, [year, age, country, showNumber, page, queryParams, setQueryParams]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        padding: "16px",
      }}
    >
      <ShowNumberSelect></ShowNumberSelect>
      <YearSelect></YearSelect>
      <AgeSelect></AgeSelect>
      <CountrySelect></CountrySelect>
    </Box>
  );
}

export default FiltersSection;
