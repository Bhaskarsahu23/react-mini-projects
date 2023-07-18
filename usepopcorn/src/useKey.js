import { useEffect } from 'react';

export const useKey = (key, action) => {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) action();
      }

      document.addEventListener('keydown', callBack);

      return function () {
        document.removeEventListener('keydown', callBack);
      };
    },
    [action, key]
  );
};
