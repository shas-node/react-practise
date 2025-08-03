import { atom, selector } from "recoil";


export const NotificationAtom = atom({
    key: "networkatom",
    default: {
        network: 4, 
        jobs: 6, 
        messaging: 3, 
        notifications: 3
    }
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(NotificationAtom.network);
        const jobsAtomCount = get(NotificationAtom.jobs);
        const notificationsAtomCount = get(NotificationAtom.notifications);
        const messagingAtomCount = get(NotificationAtom.messaging);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount
    }
})