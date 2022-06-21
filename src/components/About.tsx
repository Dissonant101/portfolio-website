import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black">
      <div className="p-5 text-white">
        <h1>Input your information!</h1>
      </div>
      <div className="p-5 text-white">
        <h1>Watch as the PDF automagically generates before your eyes!</h1>
      </div>
      <div className="p-5 text-white">
        <h1>Download your PDF to be used anywhere!</h1>
      </div>
    </div>
  );
};

export default About;
