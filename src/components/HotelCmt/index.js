import Comment from '../Comment';
import style from './HotelCmt.module.css';
import { PagingNav } from '../../components';
import { useGetCmtsByHotelIdQuery } from '../../app/features/api/cmtsSlice';
import Error from '../Error';
import Loading from '../Loading/Loading';
import { useState, memo } from 'react';
import LoadingImg from '../Loading/LoadingImg';
import LoadingCmt from '../Loading/LoadingCmt';

const HotelComment = ({ hotelId }) => {
  const {
    data: cmts,
    isLoading: isCmtLoad,
    isFetching: isCmtFetch,
    isSuccess: isCmtOk,
    isError: isCmtErr,
  } = useGetCmtsByHotelIdQuery({ hotelId });
  const [page, setPage] = useState(1);

  // console.log(cmts);

  return (
    <div className={style.cmtContainer} id='hotelCmt'>
      {/* {<LoadingCmt/>} */}
      {isCmtLoad && <LoadingCmt />}
      {!isCmtLoad && isCmtErr && <Error />}
      {!isCmtLoad && isCmtOk ? (
        cmts.ids.length ? (
          <>
            <PagingNav
              isFetching={isCmtFetch}
              page={page}
              setPage={setPage}
              totalPages={cmts.totalPages}
            />
            <div className={style.cmtList}>
              {cmts.ids.map(id => {
                const cmt = cmts.entities[id];
                return <Comment key={id} cmt={cmt} />;
              })}
            </div>
          </>
        ) : (
          <p>Không có bình luận nào để hiện thị</p>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(HotelComment);
