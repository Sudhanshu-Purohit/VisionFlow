"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image"
import { api } from "../../../convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutaion } from "@/hooks/use-api-mutation";
import { toast } from "sonner"


const EmptyBoard = () => {
  // custom hook created for adding a new board to db.
  const { mutate, pending } = useApiMutaion(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled"
    }).then((id) => {
      toast.success("Board has been created")
    }).catch((error) => {
      toast.error("Something went wrong")
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-board.png"
        alt="Empty board"
        width={240}
        height={240}
      />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" variant="black" onClick={onClick} disabled={pending}>
          Create board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoard;