import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  };
  return (
    <div className="bg-white w-screen h-screen">
      <div className="text-center text-gray-600">
        <div className="flex flex-col justify-evenly">
          <div className="flex-1 pt-40 pb-5">
            <h1 className="text-7xl">Dynamic Resumes</h1>
            <h4 className="text-xl">Create resumes from scratch!</h4>
          </div>
          <div className="flex-1">
            <button
              className="bg-orange-400 hover:bg-orange-500 rounded py-2 px-4"
              type="button"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
