import Todo from "@/components/Todo";
import Counter from "@/components/Counter";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Counter />
      </div>
      <div className="w-full align-center">
        <Todo />
      </div>
    </main>
  );
}
