import { useLayoutEffect, useRef } from 'react';

export default function usePortalElement(id: string) {
  const rootElemRef = useRef(document.createElement('div'));

  useLayoutEffect(() => {
    const el = rootElemRef.current;
    const parentElem = document.querySelector(`#${id}`);
    parentElem?.appendChild(rootElemRef.current);

    return () => {
      el.remove();
    };
  }, [id]);

  return rootElemRef.current;
}
