/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import LeftBar from "../components/home/left/LeftBar";
import RigthBar from "../components/home/right/RigthBar";

export default function Home() { 
    const [currentUser, setCurrentUser] = useState({})

    return (
        <div>
            <div>
                <div className="w-full" style={{ backgroundColor: "#449388" }}></div>

                <div className="container mx-auto">
                    <div className="py-6 h-screen  ">
                        <div className="flex h-full" style={{ backgroundColor: "#f0f2f5" }}>

                            <LeftBar setCurrentUser={setCurrentUser} />
                            {/* <!-- Right --> */}
                            <RigthBar currentUser={currentUser} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
