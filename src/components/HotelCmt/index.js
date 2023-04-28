import Comment from '../Comment';
import style from './HotelCmt.module.css';
import { PagingNav } from '../../components';
import { useGetCmtsByHotelIdQuery } from '../../app/features/api/cmtsSlice';
import Error from '../Error';
import Loading from '../Loading';
import { useState } from 'react';

const HotelComment = ({ hotelId }) => {
  const {
    data: cmts,
    isLoading: isCmtLoad,
    isFetching: isCmtFetch,
    isSuccess: isCmtOk,
    isError: isCmtErr,
  } = useGetCmtsByHotelIdQuery({ hotelId });
  const [page, setPage] = useState(1);

  return (
    <div className={style.cmtContainer} id="hotelCmt">
      {isCmtLoad && <Loading />}
      {!isCmtLoad && isCmtErr && <Error />}
      {!isCmtLoad && isCmtOk ? (
        <>
          <PagingNav
            isFetching={isCmtFetch}
            page={page}
            setPage={setPage}
            totalPages={cmts.totalPages}
          />
          <div className={style.cmtList}>
            {cmts.ids ? (
              cmts.ids.map(id => {
                const cmt = cmts.entities[id];
                return <Comment cmt={cmt} key={id} />;
              })
            ) : (
              <p>Không có bình luận nào để hiện thị</p>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HotelComment;
