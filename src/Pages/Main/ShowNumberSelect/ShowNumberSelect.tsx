import {  selectShowNumberSlice } from "../../../Redux/UI/ShowNumber/selectors";
import { showNumberChanged } from "../../../Redux/UI/ShowNumber/showNumberSlice";
import FiltersSelect from "../FiltersSelect/FiltersSelect";
import { showNumberList } from "../../../utils/filterLists";
import { useAppDispatch, useAppSelector } from "../../../Redux/typedApi";
import { SelectChangeEvent } from "@mui/material";
import { pagesReset } from "../../../Redux/Entities/Movies/moviesSlice";

function ShowNumberSelect() {
  const showNumber = useAppSelector(selectShowNumberSlice);
  const dispatch = useAppDispatch();
  

  function changeShowNumber(event: SelectChangeEvent) {
    dispatch(showNumberChanged(event.target.value));
    dispatch(pagesReset());
  }
  
  return (
    <FiltersSelect
      label={"Показывать"}
      value={showNumber}
      onChange={changeShowNumber}
      optionsList={showNumberList}
    ></FiltersSelect>
  );
}

export default ShowNumberSelect;
