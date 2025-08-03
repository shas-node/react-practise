import { useRecoilValue,RecoilRoot } from "recoil"
import { NotificationAtom, totalNotificationSelector } from "./atom"


function App() {
    

  return (
    <RecoilRoot>
     <Appbar/>
     </RecoilRoot>
    )
  
}

function Appbar(){
  const networknotificationcount = useRecoilValue(NotificationAtom).network;
    const jobsnotificationcount = useRecoilValue(NotificationAtom).jobs; 
     const notificationcount = useRecoilValue(NotificationAtom).notifications;
  const messagingnotificationcount = useRecoilValue(NotificationAtom).messaging;
const totalNotificationCount = useRecoilValue(totalNotificationSelector);
 return (
    <>
      <button>Home</button>
      
      <button>My network ({networknotificationcount >= 100 ? "99+" : networknotificationcount})</button>
      <button>Jobs ({jobsnotificationcount})</button>
      <button>Messaging ({messagingnotificationcount})</button>
      <button>Notifications ({notificationcount})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
