"use client";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { useApiMutaion } from "@/hooks/use-api-mutation";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { ConfirmDeleteModal } from "./confirm-delete-modal";
import { Button } from "./ui/button";

interface ActionsProps {
    children: React.ReactNode,
    id: string;
    title: string;
    side?: DropdownMenuContentProps["side"],
    sideOffset?: DropdownMenuContentProps["sideOffset"]
}

export const Actions = ({ children, id, title, side, sideOffset }: ActionsProps) => {

    const { mutate, pending } = useApiMutaion(api.board.deleteBoard);

    const onCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.href}board/${id}`)
            .then(() => toast.success("Link copied successfully"))
            .catch(() => toast.error("Failed to copy link"))
    }

    const onDelete = () => {
        mutate({ id })
            .then(() => toast.success("Board deleted successfully"))
            .catch(() => toast.error("Failed to delete board"))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side={side}
                sideOffset={sideOffset}
                className="w-60"
                onClick={(e) => e.stopPropagation()}
            >
                <DropdownMenuItem
                    className="p-3 cursor-pointer"
                    onClick={onCopyLink}
                >
                    <Link2 className="h-4 w-4 mr-2" />
                    Copy board link
                </DropdownMenuItem>
                <ConfirmDeleteModal
                    header="Are you sure you want to delete?"
                    description="This action cannot be undone. This will permanently delete your board and remove your data from our servers."
                    onConfirm={onDelete}
                    disabled={pending}
                >
                    <Button
                        className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
                    >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                    </Button>
                    </ConfirmDeleteModal>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}