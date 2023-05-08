import './Error.css'
import { Link, useNavigate } from "react-router-dom";


const Error = () => {
  return (
    <div className="Error">
      <div className="error_content">
        <span className='error_text'>Error while fetching data</span>
        <Link to="/" className='backtoHome'>Back To Home</Link>
      </div>
    </div>
  )
};

export default Error;
