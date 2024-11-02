import { Button } from "@/components/ui/button";
import Test from "@/features/components/Test";


export default function Home() {
  return (
    <div>
      <Button>Button</Button>
      <input type="checkbox" className="peer" />
      <p className="text-4xl font-bold peer-checked:text-red-500">Hello</p>
      <Test />
    </div>
  );
}
