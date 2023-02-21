import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleDismiss(event) {
      if (event.code === "Escape") callback(false);
    }
    window.addEventListener("keydown", handleDismiss);
    return () => {
      window.removeEventListener("keydown", handleDismiss);
    };
  }, [callback]);
}

export default useEscapeKey;
