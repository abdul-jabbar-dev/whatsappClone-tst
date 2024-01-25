
import LastDate from '../../inbox/util/LastDate'
import NewInboxSug from '../../inbox/util/NewInboxSug'
import SelfChat from '../../inbox/util/chat/SelfChat'
import UserChat from '../../inbox/util/chat/UserChat'
import bg from '/bg.jpg'
export default function MassageBox() { 
    return (
        <div className="flex-1 overflow-y w-full  bg-center" style={{ backgroundSize:"40%",backgroundBlendMode:"soft-light", backgroundImage:`url(${bg})`}}>
            <div className="py-2 px-16 max-w-full">
<UserChat/>
              <SelfChat/> 
              <SelfChat/>
                <NewInboxSug/>
              <LastDate/>
              <SelfChat/>
            </div>
        </div>
    )
}
