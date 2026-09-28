import { HELLO } from "@aleph/shared";
import {Server} from "socket.io"

const io = new Server(3000, {cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("a phone connected:", socket.id);
});


console.log("Server is listening on port 3000");