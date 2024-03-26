import { useContext } from "react";
import { SocketContext } from "./socket";

export default function SocketContextHook() {
 
  return useContext(SocketContext)
}
