import './Loading.css';

const Loading = ({ classes }) => {
  const classNames = `loading ${classes} animate-pulse`;
  return <div className={classNames}></div>;
};

export default Loading;
