import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        const fetchApi = async () => {
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setTimeout(() => {
                console.log(isMounted.current)
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log('setState no se llamo');
                }
            }, 4000);
        }
        fetchApi();
        // return () => {
        //     isMounted.current = false;
        // }
    }, [url])

    return state;
}
