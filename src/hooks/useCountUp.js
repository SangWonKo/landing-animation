import { useCallback, useEffect, useRef } from "react";

const useCountUp = (end, start = 0, duration = 3000) => {
    const domRef = useRef();
    const observer = useRef(null);
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const handleScroll = useCallback(([entry]) => {
        const { current } = domRef;

        if (entry.isIntersecting) {
            let currentNum = start;
            const counter = setInterval(() => {
                currentNum += 1;
                current.innerHTML = currentNum;
                if(currentNum === end) { 
                    clearInterval(counter);
                    observer.current.disconnect(current);
                }
            }, stepTime)

        }
    }, [end, start, stepTime]);

    useEffect(() => {
        const { current } = domRef;

        if (current) {
            observer.current = new IntersectionObserver(handleScroll, { threshold: 0.7 });
            observer.current.observe(current);

            return () => observer && observer.current.disconnect();
        }
    }, [handleScroll]);
    return {
        ref: domRef,
       
    };
};

export default useCountUp;