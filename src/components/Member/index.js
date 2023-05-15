import './Member.css';
import { useState, useRef, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseAdult,
  decreaseAdult,
  increaseRoom,
  decreaseRoom,
  increaseChilren,
  decreaseChildren,
  selectAdult,
  selectRoom,
  selectChilren,
} from '../../app/features/search/searchSlice';
import useClickout from '../../hooks/useClickout';

const Member = () => {
  const dispatch = useDispatch();
  const adult = useSelector(selectAdult);
  const room = useSelector(selectRoom);
  const children = useSelector(selectChilren);

  const [openOptions, setOpenOptions] = useState(false);
  let memberRef = useRef();
  useClickout(memberRef, setOpenOptions);

  return (
    <div>
      <div className='MemberItem'>
        <div onClick={() => setOpenOptions(!openOptions)}>
          <FontAwesomeIcon icon={faPerson} className='icon' />
        </div>
        <div
          onClick={() => setOpenOptions(!openOptions)}
          className='MemberText'>{`${room} phòng · ${room} người lớn · ${children} trẻ em`}</div>
      </div>
      {openOptions && (
        <div className='options' ref={memberRef}>
          <div className='optionItem'>
            <span className='optionText'>Số phòng</span>
            <div className='optionCounter'>
              <button disabled={room <= 1} className='btn' onClick={() => dispatch(decreaseRoom())}>
                -
              </button>
              <span className='optionCounterNumber'>{room}</span>
              <button className='btn' onClick={() => dispatch(increaseRoom())}>
                +
              </button>
            </div>
          </div>
          <div className='optionItem'>
            <span className='optionText'>Nguời lớn</span>
            <div className='optionCounter'>
              <button
                disabled={adult <= 1 || adult - 1 < room}
                className='btn'
                onClick={() => dispatch(decreaseAdult())}>
                -
              </button>
              <span className='optionCounterNumber'>{adult}</span>
              <button className='btn' onClick={() => dispatch(increaseAdult())}>
                +
              </button>
            </div>
          </div>
          <div className='optionItem'>
            <span className='optionText'>Trẻ em</span>
            <div className='optionCounter'>
              <button
                disabled={children <= 0}
                className='btn'
                onClick={() => dispatch(decreaseChildren())}>
                -
              </button>
              <span className='optionCounterNumber'>{children}</span>
              <button className='btn' onClick={() => dispatch(increaseChilren())}>
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Member);
