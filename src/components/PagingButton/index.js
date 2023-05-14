import style from "./PaggingButton.module.css"
const PagingButton = ({ isFetching, page, setPage }) => {
  return (
    <button onClick={() => setPage(page)} disabled={isFetching} className={style.pagingBtn}>
      {page}
    </button>
  );
};

export default PagingButton;
