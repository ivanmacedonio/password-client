import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin() {
    ///login logic
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(username, password);
  };

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Login</h2>
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
