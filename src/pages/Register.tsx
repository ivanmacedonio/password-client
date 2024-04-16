import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigate();
  //fetch options

  const data = {
    username: username,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include" as RequestCredentials, 
  };

  async function handleRegister() {
    try {
      const response = await fetch("http://localhost:3000/register", options);
      if (!response.ok) {
        throw new Error("Error interno");
      }
      const data = await response.json();
      console.log(data);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleRegister();
  };

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl mt-12 font-light">Register</h2>
      <form className="flex flex-col gap-4 mt-12" onSubmit={handleSubmit}>
        <input
          onChange={handleUsername}
          type="text"
          placeholder="Username"
          className="text-xl border-solid border-2 rounded shadow-md px-2 py-1 outline-none"
        />
        <input
          onChange={handlePassword}
          type="text"
          placeholder="Password"
          className="text-xl border-solid border-2 rounded shadow-md px-2 py-1 outline-none"
        />

        <button
          type="submit"
          className="bg-black font-bold text-xl text-white py-2 rounded cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
