import React from "react";
import { useState } from "react";
import "./style.css";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>
                Count: {count}
            </button>
        </div>
    );
};

export default App;
