import { useState, useEffect } from 'react';
import useTitle from './useTitle';

/**
 *
 * @param {string} onViewTitle Document title when document.visibilityState === 'visible'
 * @param {string} onHiddenTitle Document title when document.visibilityState === 'hidden'
 * @param {string} onFallTitle Document title for fall back
 *
 */
const useDynamicTitle = (onViewTitle, onHiddenTitle, onFallTitle = 'Website') => {
  // Dynamic title
  const [title, setTitle] = useState(onFallTitle);
  useTitle(title);
  useEffect(() => {
    const onVisionChange = () => {
      if (document.visibilityState === 'visible') {
        setTitle(onViewTitle);
      } else {
        setTitle(onHiddenTitle);
      }
    };
    document.addEventListener('visibilitychange', onVisionChange);

    return () => {
      document.addEventListener('visibilitychange', onVisionChange);
    };
  }, [onViewTitle, onHiddenTitle]);
};

export default useDynamicTitle;
