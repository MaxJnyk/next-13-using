import { FC } from "react";
import AddFriendButton from "@/components/AddFriendButton";

interface PageProps {}

const Page: FC<PageProps> = ({}: PageProps) => {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5-xl mb-8">Add Friends</h1>
      <AddFriendButton />
    </main>
  );
};

export default Page;
