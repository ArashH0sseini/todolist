//import components
import Header from "./components/Header";
import FormAddTodo from "./components/FormAddTodo";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
          <div class="mb-4">
              <Header />
              <FormAddTodo />
          </div>
          <div>
              <TodosList />
          </div>
      </div>
  </div>
  );
}

export default App;
