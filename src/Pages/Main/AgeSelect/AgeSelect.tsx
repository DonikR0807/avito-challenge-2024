import { selectAgeSlice } from "../../../Redux/UI/Age/selectors";
import { ageList } from "../../../utils/filterLists";
import { ageChanged } from "../../../Redux/UI/Age/ageSlice";
import FiltersSelect from "../FiltersSelect/FiltersSelect";
import { useAppDispatch, useAppSelector } from "../../../Redux/typedApi";
import { SelectChangeEvent } from "@mui/material";
import { pagesReset } from "../../../Redux/Entities/Movies/moviesSlice";

function AgeSelect() {
  const age = useAppSelector(selectAgeSlice);
  const dispatch = useAppDispatch();
  
  function changeAge(event: SelectChangeEvent) {
    dispatch(ageChanged(event.target.value));
    dispatch(pagesReset());
  }

  return (
    <FiltersSelect
      label={"Возраст"}
      value={age}
      onChange={changeAge}
      optionsList={Object.keys(ageList)}
    ></FiltersSelect>
  );
}

export default AgeSelect;
