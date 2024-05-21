// import { api } from "~/trpc/server";

import BasicsTab from "./_components/PokemonTabs"

export default async function Home() {

  return (
    <main className="flex justify-center">
      <BasicsTab />
    </main>
  );
}
