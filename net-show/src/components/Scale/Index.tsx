import { ReactNode, useEffect, useState } from "react";
import "./index.scss";

// throttle
let timer: any = 0;
const throttle = (fn: () => void, delay = 500) => {
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }

    timer = setTimeout(() => {
      fn();
      clearTimeout(timer);
      timer = 0;
    }, delay);
  };
};

const Scale: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scale, setScale] = useState<number>(() => {
    const w = window.innerWidth / 1920;
    const h = window.innerHeight / 1080;
    const s = w < h ? w : h;
    return s;
  });

  useEffect(() => {
    const computeScale = () => {
      const w = window.innerWidth / 1920;
      const h = window.innerHeight / 1080;
      const s = w < h ? w : h;
      setScale(s);
    };

    const throttleFn = throttle(computeScale);
    window.addEventListener("resize", throttleFn);

    return () => {
      window.removeEventListener("resize", throttleFn);
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }
    };
  }, []);

  return (
    <div
      className="scale-box"
      style={{
        transform: `scale(${scale}) translateX(-50%)`,
      }}>
      {children}
    </div>
  );
};

export default Scale;
