import { ClientInterface } from '@typing/Client';
import { createStore } from '@udecode/zustood';

export const IndexPageStore = createStore('IndexPage')({
    user: null as ClientInterface | null,
});
//.extendSelectors((set, get, api) => ({
//    newGetValue: () => get.value(),
//}))
//.extendActions((set, get, api) => ({
//    newSetValue(newValue) {
//        set.value = newValue;
//    },
//}));
