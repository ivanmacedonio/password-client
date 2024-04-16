import { useNavigate } from "react-router-dom";
import { List } from "../components/List";
type Props = {};

export const MainPage = (props: Props) => {
  const nav = useNavigate();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include" as RequestCredentials,
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/logout", options);
      if (!res.ok) {
        throw new Error("Internal Server Error!");
      }
      console.log(res);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-light">
        Password manager by{" "}
        <strong className="font-semibold text-green-700">Ivandev</strong>
        <div>
          <List></List>
        </div>
        <button
         className="bg-red-500 mt-4 text-white px-4 py-2 rounded text-lg font-bold cursor-pointer"
        onClick={handleLogout}>Logout</button>
      </h1>
    </div>
  );
};
