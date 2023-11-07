import { Trainer } from "@/components/trainer";
import { generateSentence } from "@/lib/generator";

export default function Home() {
  const initialWord = generateSentence();

  return (
    <main>
      <Trainer initialWord={initialWord} />
    </main>
  );
}
