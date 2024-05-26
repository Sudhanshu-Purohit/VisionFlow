import { Button } from "@/components/ui/button";
import Image from "next/image"

const EmptyBoard = () => {
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
        <Button size="lg" variant="black">
            Create board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoard;