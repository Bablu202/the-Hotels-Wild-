import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  useEffect(
    function () {
      const handleClick = (event) => {
        if (event.key === "Escape") {
          console.log("esc");

          handler();
        }
      };

      document.addEventListener("keydown", handleClick, true);
      return () => document.removeEventListener("keydown", handleClick, true);
    },
    [handler]
  );

  return ref;
}
