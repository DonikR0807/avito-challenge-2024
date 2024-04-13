import FiltersSelect from "../FiltersSelect/FiltersSelect";
import { selectCountrySlice } from "../../../Redux/UI/Country/selectors";
import { countryChanged } from "../../../Redux/UI/Country/countrySlice";
import { countriesList } from "../../../utils/filterLists";
import { useAppDispatch, useAppSelector } from "../../../Redux/typedApi";
import { SelectChangeEvent } from "@mui/material";
import { pagesReset } from "../../../Redux/Entities/Movies/moviesSlice";

function CountrySelect() {
  const country = useAppSelector(selectCountrySlice);
  const dispatch = useAppDispatch();
  

  function changeCountry(event: SelectChangeEvent) {
    dispatch(countryChanged(event.target.value));
    dispatch(pagesReset());
  }

  return (
    <FiltersSelect
      label={"Страны"}
      value={country}
      onChange={changeCountry}
      optionsList={countriesList}
    ></FiltersSelect>
  );
}

export default CountrySelect;
