import { useCallback, useState } from "react";

export const useCount = (initialState = 0) => {
    const [count, setCount] = useState(initialState);

    const decrement = useCallback(
        () => setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : 0)),
        []
    );
    const increment = useCallback(
        () => setCount((currentCount) => currentCount + 1),
        []
    );

    return { count, decrement, increment };
};