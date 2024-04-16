import React, { useRef } from "react";
import deleteicon from "../assets/delete.svg";
import { GetData } from "../fetch/GetData";
type Props = {};

export const List = (props: Props) => {
  const { data } = GetData("http://localhost:3000/passwords");
  const passwordRef = useRef<HTMLInputElement>(null);

  const createOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include" as RequestCredentials,
  };

  const handleCreatePassword = async (e: any) => {
    e.preventDefault();
    if (passwordRef.current) {
      const value = passwordRef.current.value;
      try {
        const res = await fetch("http://localhost:3000/passwords", {
          ...createOptions,
          body: JSON.stringify({ password: value }),
        });
        console.log(res);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include" as RequestCredentials,
  };

  const handleDelete = async (id: string | number) => {
    try {
      alert(id);
      const res = await fetch(`http://localhost:3000/passwords/${id}`, options);
      if (!res.ok) {
        throw new Error("Internal Server Error");
      }
      const data = await res.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-center ">
        <ul className="mt-20 w-40">
          {Array.isArray(data) &&
            data.map((item: any) => (
              <li
                key={item.id}
                className="grid grid-cols-3 mb-6 bg-gray-200 text-xl rounded py-2 items-center"
              >
                <p className="font-semibold justify-self-start pl-12">
                  {item.id}
                </p>
                <p>{item.password}</p>
                <img
                  src={deleteicon}
                  alt="delete-icon"
                  className="max-w-14 cursor-pointer justify-self-end pr-5"
                  onClick={() => handleDelete(item.id)}
                />
              </li>
            ))}
        </ul>
      </div>
      <div>
        <form
          onSubmit={handleCreatePassword}
          className="flex flex-col justify-center items-center"
        >
          <input
            className="my-6 flex items-center justify-center"
            ref={passwordRef}
            type="text"
            placeholder="Type a secure password!"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded text-lg font-bold cursor-pointer"
          >
            Create!
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
