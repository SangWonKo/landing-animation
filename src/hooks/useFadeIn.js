import { useCallback, useEffect, useRef} from "react";

const useFadeIn = (direction = 'up', duration = 1, delay = 0) => {
    const domRef = useRef();
 
    const handleDirection = useCallback((dir) => {
        switch (dir) {
            case "up":
                return 'translate3d(0, 10px, 0)';
            case "down":
                return 'translate3d(0, -10px, 0)';
            case "left":
                return 'translate3d(10px, 0, 0)';
            case "right":
                return 'translate3d(-10px, 0, 0)';
            default:
                return;
        };
    }, []);

    const handleScroll = useCallback(([entry]) => {
        const { current } = domRef;
        if (entry.isIntersecting) {
            current.style.transitionProperty = 'all';
            current.style.transitionDuration = `${duration}s`;
            current.style.transitionTimingFunction = 'ease-in';
            current.style.transitionDelay = `${delay}s`;
            current.style.opacity = 1;
            current.style.transform = 'translate3d(0, 0, 0)';

        }
    }, [delay, duration]);

    useEffect(() => {
        let observer;
        const { current } = domRef;

        if (current) {
            observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
            observer.observe(current);

            return () => observer && observer.disconnect();
        }
    }, [handleScroll]);
    return {
        ref: domRef,
        style: {
            opacity: 0,
            transform: handleDirection(direction),
        },
    };
};

export default useFadeIn;