import React, { useEffect } from "react";
import deleteicon from "../assets/delete.svg";
import { GetData } from "../fetch/GetData";
import { GetStatus } from "../fetch/GetStatus";
import { Login } from "./Login";
type Props = {};
const passwords = [
  {
    id: 1,
    title: "mamageor29",
  },
  {
    id: 2,
    title: "alexios1212",
  },
  {
    id: 3,
    title: "camellos1212",
  },
  {
    id: 4,
    title: "alamedaXD",
  },
];

export const List = (props: Props) => {
  const { data } = GetData("http://localhost:3000/passwords");
  const { status } = GetStatus();
  useEffect(() => {
    console.log(data);
    console.log(status);
  }, [data, status]);
  return (
    <React.Fragment>
      {status === true ? (
        <div className="flex justify-center ">
          <ul className="mt-20 w-40">
            {passwords.map((item) => (
              <li className="grid grid-cols-3 mb-6 bg-gray-200 text-xl rounded py-2 items-center">
                <p className="font-semibold justify-self-start pl-12">
                  {item.id}
                </p>
                <p>{item.title}</p>
                <img
                  src={deleteicon}
                  alt="delete-icon"
                  className="max-w-14 cursor-pointer justify-self-end pr-5"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Login></Login>
      )}
    </React.Fragment>
  );
};
