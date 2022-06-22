import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * About page component.
 */
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/resume');
  };

  return (
    <div className="p-5 bg-lime-100 text-center">
      <div className="py-5 text-black">
        <h1>1. Input your information.</h1>
      </div>
      <div className="py-5 text-black">
        <h1>2. Watch as the PDF automagically generates before your eyes.</h1>
      </div>
      <div className="py-5 text-black">
        <h1>3. Download your PDF to be used anywhere!</h1>
      </div>
      <button
        className="bg-orange-400 hover:bg-orange-500 rounded py-2 px-4"
        type="button"
        onClick={handleClick}
      >
        Create Your First Resume
      </button>
    </div>
  );
};

export default About;
