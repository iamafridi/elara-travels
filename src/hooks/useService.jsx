import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useService = () => {

    const axiosPublic = useAxiosPublic();
    //     // Setting on State 
    //     const [services, setServices] = useState([]);
    // const [loading,setLoading] =useState(true);

    //     useEffect(() => {
    //         fetch('https://elara-travels-server.vercel.app/services')
    //             .then(res => res.json())
    //             .then(data => {
    //                 setServices(data);
    //                 setLoading(false);
    //             })
    //     }, [])

    const { data: services = [], isPending: loading, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            return res.data;
        }
    })

    return [services, loading, refetch]
}

export default useService;