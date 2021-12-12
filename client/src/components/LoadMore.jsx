import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import "../styles/LoadMore.scss";

const LoadMore = () => {
  const state = useContext(GlobalState);
  const [page, setPage] = state.productsApi.page;
  const [result] = state.productsApi.result;
  console.log(page);
  // console.log(result);
  return (
    <div className="load__more">
      {result < page * 8 ? (
        ""
      ) : (
        <button className="load__more__btn" onClick={() => setPage(page + 1)}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMore;
