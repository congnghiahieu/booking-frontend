const PagingButton = ({ isFetching, page, setPage }) => {
  return (
    <button onClick={() => setPage(page)} disabled={isFetching} className='paging-btn'>
      {page}
    </button>
  );
};

export default PagingButton;
