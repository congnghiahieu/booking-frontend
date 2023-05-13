import { useEffect } from 'react';

const useClickout = (modalRef, setOpen) => {
  useEffect(() => {
    const onClickOutside = e => {
      const element = e.target;
      if (modalRef.current && !modalRef.current.contains(element)) {
        // e.preventDefault();
        // e.stopPropagation();
        setOpen(false);
      }
    };

    document.body.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [modalRef, setOpen]);
};

export default useClickout;
