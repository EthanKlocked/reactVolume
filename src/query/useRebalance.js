//---------------------- IMPORT -----------------------------
import { useQueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';

//---------------------- COMPONENT --------------------------
export default function useRebalnce(){
    //init
    const queryClient = useQueryClient();
    const defaultKey = 'rebalance';
    const queryKey = [defaultKey];
    const queryUrl = 'dummy/rebalance.json';

    //query
    const rebalanceData = useQuery({
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
    return [rebalanceData.data, rebalanceData.refetch, goStale];
}