 
import UserChat from '../../inbox/util/chat/UserChat'
import bg from '/bg.jpg'
import PropTypes from 'prop-types';

export default function MassageBox({ inbox }) { 
  return (
    <div className="flex-1 overflow-y w-full  bg-center" style={{ backgroundSize: "40%", backgroundBlendMode: "soft-light", backgroundImage: `url(${bg})` }}>
      <div className="py-2 px-16 max-w-full">
        {inbox.map((chat, i) => <UserChat key={i} chat={chat} />)}
      </div>
    </div>
  )
}
MassageBox.propTypes = {
  inbox: PropTypes.arrayOf(PropTypes.object)
}
