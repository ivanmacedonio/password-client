import { List } from "../components/List";

type Props = {};

export const MainPage = (props: Props) => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-light">
        Password manager by{" "}
        <strong className="font-semibold text-green-700">Ivandev</strong>
        <div>
          <List></List>
        </div>
      </h1>
    </div>
  );
};
