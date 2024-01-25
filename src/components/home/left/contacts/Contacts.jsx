import contactList from "../../../../data/contacts";

export default function Contacts() {
    return (
        <>
            {contactList.map((d, i) =>
                <div key={i}  className="bg-white hover:bg-gray-100 px-3 flex items-center cursor-pointer">
                    <div>
                        <img className="h-12 w-12 rounded-full"
                            src={d.img} />
                    </div>
                    <div className="ml-4 flex-1 border-b py-[13px]">
                        <div className="flex items-bottom justify-between">
                            <p className="text-gray-700">
                                {d.name}
                            </p>
                            <p className="text-xs  text-gray-500">
                                {d.time}
                            </p>
                        </div>
                        <p className="text-gray-500 mt-1 text-sm  h-5 overflow-hidden">
                            {d.lastMessage}
                        </p>
                    </div>
                </div>)}
        </>
    )
}
