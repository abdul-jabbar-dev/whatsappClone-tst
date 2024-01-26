import PropTypes from 'prop-types'

export default function UserChat({ chat }) {  
    return (
        <div className="flex overflow-y w-full justify-start mb-[2px]">
            <div className="rounded-md px-3 py-1 max-w-full bg-white shadow-md" >
                <p className="text-sm mt-1  w-fit">
                    {chat.content}
                </p>
                <p className="text-right text-[11px] font-extralight text-gray-500 ">
                    12:45 pm
                </p>
            </div>
        </div>
    )
}
UserChat.propTypes = {
    chat: PropTypes.string
}
