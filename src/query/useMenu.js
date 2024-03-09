//---------------------- IMPORT -----------------------------
import { useQueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';

//---------------------- COMPONENT --------------------------
export default function useMenu(){
    //init
    const queryClient = useQueryClient();
    const defaultKey = 'menu';
    const queryKey = [defaultKey];
    const queryUrl = 'dummy/menu.json';

    //query
    const menuData = useQuery({
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
    return [menuData.data, menuData.refetch, goStale];
}