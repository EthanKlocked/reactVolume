//---------------------- IMPORT -----------------------------
import { useQueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';

//---------------------- COMPONENT --------------------------
export default function useSort(){
    //init
    const queryClient = useQueryClient();
    const defaultKey = 'sort';
    const queryKey = [defaultKey];
    const queryUrl = 'dummy/sort.json';

    //query
    const sortData = useQuery({
        queryKey: queryKey, 
        queryFn: () => axios.get(queryUrl).then(( res ) => {
            if(res?.status == 200){
                return res.data;
            }else return null;            
        }),
    });

    //function
    const goStale = () => queryClient.invalidateQueries({queryKey : queryKey, refetchType: 'none'});

    //return
    return [sortData.data, sortData.refetch, goStale];
}