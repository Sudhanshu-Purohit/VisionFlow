import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const EmptyOrg = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/element.png"
                alt="Empty"
                width={300}
                height={300}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Welcome to VisionFlow
            </h2>
            <p className="text-sm mt-2 text-muted-foreground">
                Create an organization to get started
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg" variant="black">
                            Create Organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization routing="hash" />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default EmptyOrg;
