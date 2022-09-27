import { Header } from "~/components/Header";
import { HomeSearchBox } from "~/components/HomeSearchBox";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeSearchBox />
      </main>
    </>
  );
}
