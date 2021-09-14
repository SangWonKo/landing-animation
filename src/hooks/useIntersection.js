import { useCallback, useEffect, useState } from "react";


const useIntersection = (ref) => {
    const [isIntersected, setIsIntersected] = useState(false);

    const handleScroll = useCallback(([entry]) => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
            setIsIntersected(true);
        } else {
            setIsIntersected(false);
        }
    }, []);
    
    useEffect(() => {
        let observer;
        const { current } = ref;

        if (current) {
            observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
            observer.observe(current);

            return () => observer && observer.disconnect();
        }
    }, [handleScroll, ref]);
    return {
        isIntersected
    };
};

export default useIntersection;