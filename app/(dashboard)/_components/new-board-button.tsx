"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutaion } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

 
interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {

    const { mutate, pending } = useApiMutaion(api.board.create);

    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled"
        }).then(() => {
            toast.success("Board created");
        }).catch(() => {
            toast.error("Something went wrong");
        })
    };

    return (
        <button
            disabled={pending || disabled}
            onClick={onClick}
            className={cn(
                "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
                (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
            )}
        >
            <Plus className="h-8 w-8 text-white stroke-1" />
            <p className="text-xs text-white font-light">
                New Board
            </p>
        </button>
    );
};