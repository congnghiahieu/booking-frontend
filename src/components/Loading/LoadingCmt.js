import './Loading.css';
import Loading from './Loading';
const LoadingImg = () => {
  return (
    <div className='post_cmt'>
      <div className='cmt_point'>
        <Loading classes='title width-50' />
        <Loading classes='text width-100' />
        <Loading classes='text width-100' />
        <Loading classes='text width-100' />
      </div>
      <div className='cmt_text'>
        <Loading classes='title width-50' />
        <Loading classes='text width-100' />
        <Loading classes='text width-100' />
        <Loading classes='text width-100' />
      </div>
    </div>
  );
};
export default LoadingImg;
