import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-5">
        <div className="bg-white text-2xl font-bold p-3 flex justify-center items-center rounded-md">
          <p>There is no Task pending</p>
        </div>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
      </div>
    </div>
  );
};

export default TodoContainer;