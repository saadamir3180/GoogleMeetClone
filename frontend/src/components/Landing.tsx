import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/room/?room=${room}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}
          placeholder="..."
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Landing;
