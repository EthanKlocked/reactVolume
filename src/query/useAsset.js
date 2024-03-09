//---------------------- IMPORT -----------------------------
import { useQueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';

//---------------------- COMPONENT --------------------------
export default function useAsset(){
    //init
    const queryClient = useQueryClient();
    const defaultKey = 'asset';
    const queryKey = [defaultKey];
    const queryUrl = 'dummy/list.json';

    //query
    const assetData = useQuery({
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
    return [assetData.data, assetData.refetch, goStale];
}