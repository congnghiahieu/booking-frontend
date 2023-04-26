import PagingButton from '../PagingButton';

const PagingNav = ({ isFetching, page, setPage, totalPages }) => {
  const lastPage = () => setPage();
  const firstPage = () => setPage(1);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  return (
    <div className='paging-nav'>
      <button
        onClick={firstPage}
        disabled={isFetching || page === 1 || totalPages < 1}
        className='paging-btn'>
        &lt;&lt;
      </button>

      {pagesArray.map(page => (
        <PagingButton key={page} page={page} setPage={setPage} />
      ))}

      <button
        onClick={lastPage}
        disabled={isFetching || page === totalPages || totalPages < 1}
        className='paging-btn'>
        &gt;&gt;
      </button>
    </div>
  );
};

export default PagingNav;
