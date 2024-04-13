import FiltersSelect from "../FiltersSelect/FiltersSelect";
import { selectYearSlice } from "../../../Redux/UI/Year/selectors";
import { yearChanged } from "../../../Redux/UI/Year/yearSlice";
import { yearsList } from "../../../utils/filterLists";
import { useAppDispatch, useAppSelector } from "../../../Redux/typedApi";
import { SelectChangeEvent } from "@mui/material";
import { pagesReset } from "../../../Redux/Entities/Movies/moviesSlice";

function YearSelect() {
  const year = useAppSelector(selectYearSlice);
  const dispatch = useAppDispatch();
  

  function changeYear(event: SelectChangeEvent) {
    dispatch(yearChanged(event.target.value));
    dispatch(pagesReset());
  }

  return (
    <FiltersSelect
      label={"Год"}
      onChange={changeYear}
      value={year}
      optionsList={yearsList}
    ></FiltersSelect>
  );
}

export default YearSelect;
