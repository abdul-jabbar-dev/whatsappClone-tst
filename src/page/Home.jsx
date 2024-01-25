import LeftBar from "../components/home/left/LeftBar";
import RigthBar from "../components/home/right/RigthBar";

export default function Home() {
    return (
        <div>
            <div>
                <div className="w-full" style={{ backgroundColor: "#449388" }}></div>

                <div className="container mx-auto" style={{ marginTop: "-128px;" }}>
                    <div className="py-6 h-screen  ">
                        <div className="flex h-full" style={{ backgroundColor:"#f0f2f5"}}>

                            <LeftBar />
                            {/* <!-- Right --> */}
                           <RigthBar/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
