import { selectCurrentPage } from "../selectors";
import { selectYearSlice } from "../../../UI/Year/selectors";
import { selectCountrySlice } from "../../../UI/Country/selectors";
import { selectAgeSlice } from "../../../UI/Age/selectors";
import { ageList } from "../../../../utils/filterLists";
import {
  SuccessfullResponse,
  isSuccessfullResponse,
} from "../../../../utils/typePredicates/isSuccessfulResponse";
import { createAppAsyncThunk } from "../../../typedApi";
import { movieAxios } from "../../../../utils/axiosConfig";
import { selectShowNumberSlice } from "../../../UI/ShowNumber/selectors";
import { CanceledError } from "axios";
import { isMovieArray } from "../../../../utils/typePredicates/isMovieArray";
import { Movie } from "../moviesSlice";

export const loadCurrentPage = createAppAsyncThunk<
  SuccessfullResponse<Movie> | undefined,
  AbortSignal
>("loadCurrentPage", async (signal, { getState }) => {
  try {
    const currentPage = selectCurrentPage(getState());
    const year = selectYearSlice(getState());
    const showNumber = selectShowNumberSlice(getState());
    const country = selectCountrySlice(getState());
    const age = selectAgeSlice(getState());

    const params = new URLSearchParams();

    const selectFields = ["name", "poster", "id", "description", "ageRating", "year"];
    selectFields.forEach((field) => {
      params.append("selectFields", field);
    })

    const notNullFields = ["name", "poster.url", "id", "description", "ageRating", "year"];
    notNullFields.forEach((field) => {
      params.append("notNullFields", field);
    })

    params.append("limit", showNumber);
    params.append("year", year === "Все года" ? "2000-2027" : year);
    params.append("ageRating", ageList[age]);
    params.append("page", String(currentPage));
    if (country !== "Все страны") {
      params.append("countries.name", country);
    }

    const response = await movieAxios.get("/v1.4/movie", {
      params,
      signal,
    });

    const data: unknown = response.data;

    if (isSuccessfullResponse(data) && isMovieArray(data)) {
      return data;
    } else {
      throw new Error("Вернулись неккоректные данные");
    }
  } catch (err) {
    if (err instanceof CanceledError) {
      return;
    }
    throw err;
  }
});
