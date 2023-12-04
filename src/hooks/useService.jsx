import { useEffect, useState } from "react";

const useService = () => {

    // Setting on State 
    const [services, setServices] = useState([]);
const [loading,setLoading] =useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])
    return [services,loading]
}

export default useService;