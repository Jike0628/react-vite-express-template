import React, {useEffect, useState} from 'react';

function App(props) {

    const [api, setApi] = useState("React");

    useEffect(() => {
        const getApi = async () => {
            const res = await fetch('/api');
            const data = await res.json();

            setApi(data.message);
        }
        getApi();
    })

    return (
        <h1>Hello {api}</h1>
    );
}

export default App;