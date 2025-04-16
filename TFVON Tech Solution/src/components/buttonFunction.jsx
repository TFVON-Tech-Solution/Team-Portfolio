import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollButtonFunction = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (section) => {
    if (location.pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${section}`);
    }
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return scrollToSection;
};

export default useScrollButtonFunction;
