import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-primary-gradient ">Add todo</Button>
        <button>Filter</button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-2 space-y-5">
        {/* <div className="bg-white text-2xl font-bold p-3 flex justify-center items-center rounded-md">
          <p>There is no Task pending</p>
        </div> */}
        <div className="bg-white p-2 w-full h-full rounded-xl space-y-3 ">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
