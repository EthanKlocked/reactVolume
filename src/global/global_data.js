import { atom, atomFamily, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const nameAtom = atom({
    key: 'nameAtom',
    default: '',
    effects_UNSTABLE: [persistAtom]
});

export const settingAtom = atom({
    key: 'settingAtom',
    default: {
        algorithm: '전략배분 (정적자산배분)',
        invest: '',
        term: '',
        band: '',
        exchange: false,
    },
    effects_UNSTABLE: [persistAtom]
});

export const timingAtom = atom({
    key: 'timingAtom',
    default: false,
    effects_UNSTABLE: [persistAtom]
});

export const timingSetAtom = atom({
    key: 'timingSetAtom',
    default : {
        way : 'SMA',
        term: '20',
        buy: '100',
        sell: '100'
    },
    effects_UNSTABLE: [persistAtom]
});

export const durationAtom = atom({
    key: 'durationAtom',
    default : {
        start : "2003.01.01",
        end: ''
    },
    effects_UNSTABLE: [persistAtom]
});

export const testVolumeAtom = atom({
    key: 'testVolumeAtom',
    default : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
    effects_UNSTABLE: [persistAtom]
});

export const orderAtom = atom({
    key: 'orderAtom',
    default: [],
    effects_UNSTABLE: [persistAtom]
});

export const listFamilyAtom = atomFamily({
    key: 'listFamilyAtom',
    default: (id) => {
        return {
            sort : "전략",
            name : "",
            per : "0",
        };
    },
    effects_UNSTABLE: [persistAtom]
});

export const listSelector = selector({
    key: "listSelector",   
    get: ({ get }) => {
        const orderList = get(orderAtom);
        const obj = {};
        if(orderList.length){
            orderList.forEach((v) => {
                obj[v] = get(listFamilyAtom(v));
            });
        };
        return obj;
    },
    set: ({ get, set }) => {
        const orderList = get(orderAtom);
        if(orderList.length){
            orderList.forEach(v => {
                set(listFamilyAtom(v), {
                    sort : "전략",
                    name : "",
                    per : "0",
                });
            });
        };
    }
})