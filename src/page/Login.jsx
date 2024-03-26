/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import CV from "../config"


export default function Login() {
    const [loginUser, setLoginUser] = useState({ phoneNumber: "", userName: "" })

    const submit = (e) => {
        e.preventDefault()
        if (loginUser.phoneNumber && loginUser.userName) {
            fetch(CV.SERVER_URL + "/user/login", {
                method: "POST", headers: {
                    "content-type": "Application/json"
                },
                body: JSON.stringify(loginUser)
            }).then(res => res.json()).then(res => { 
                localStorage.setItem('user',JSON.stringify(res))
                window.location.reload()
            })
        } else {
            alert('required both filed')
        }
    }
    return (
        <div className="container mx-auto p-4 bg-white">
            <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
                <h1 className="text-lg font-bold">Login</h1>
                <form onSubmit={submit} className="flex flex-col mt-4">
                    <input
                        type="text"
                        name="User Name"
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        placeholder="User Name"
                        onChange={(e) => setLoginUser((d) => ({ ...d, userName: e.target.value }))}
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        placeholder="Phone Number"
                        onChange={(e) => setLoginUser((d) => ({ ...d, phoneNumber: e.target.value }))}
                    />
                    <input
                        type="submit"
                        className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
                        value={"Login"}
                    />
                    <div className="flex flex-col items-center mt-5">
                        <p className="mt-1 text-xs font-light text-gray-500">
                            New to Here?<a className="ml-1 font-medium text-blue-400">Sign up now</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
