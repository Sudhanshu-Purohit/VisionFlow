import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
}

export const Footer = ({ title, authorLabel, createdAtLabel, isFavorite, onClick, disabled }: FooterProps) => {
    return (
        <div className="bg-white p-3 relative">
            <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
                {title}
            </p>
            <p className="text-[11px] text-muted-foreground truncate opacity-0 group-hover:opacity-100 transition-opacity">
                {authorLabel}, {createdAtLabel}
            </p>
            <button
                className={cn(
                    "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-red-600",
                    disabled && "cursor-not-allowed opacity-75"
                )}
                onClick={onClick}
                disabled={disabled}
            >
                <Star
                    className={cn(
                        "h-4 w-4",
                        isFavorite && "fill-red-600 text-red-600"
                    )}
                />
            </button>
        </div>
    );
}