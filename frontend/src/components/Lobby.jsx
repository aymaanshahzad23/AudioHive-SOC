import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import "../styles/lobby.css";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !room) {
        alert("Please fill in both Display Name and Room Number");
        return;
      }

      // Store values in localStorage
      localStorage.setItem("displayName", email);
      localStorage.setItem("room", room);

      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  useEffect(() => {
    // Load stored values from localStorage
    const storedEmail = localStorage.getItem("displayName");
    const storedRoom = localStorage.getItem("room");
    // if (storedEmail) {
    //   setEmail(storedEmail);
    // }
    // if (storedRoom) {
    //   setRoom(storedRoom);
    // }
  }, []);

  return (
    <>
      {/* <h1>Lobby</h1> */}
      <form onSubmit={handleSubmitForm}>
        <div className="formContainer">
          <div className="formName">
            {/* <label className="name" htmlFor="email">
              Display Name
            </label> */}
            <input placeholder="ChatRoom Name" autoComplete="off" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <br />
          <div className="formRoom">
            {/* <label className="room" htmlFor="room">
              Room Number
            </label> */}
            <input placeholder="Room ID" autoComplete="off" type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)}/>
          </div>
          <br />
        </div>
        <button className="formSubmit" type="submit">
          Join Room
        </button>
      </form>
    </>
  );
};

export default LobbyScreen;
