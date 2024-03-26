import { useContext } from 'react'
import { UserContext } from './auth'

export default function AuthContextHook() {
    return useContext(UserContext)
}
