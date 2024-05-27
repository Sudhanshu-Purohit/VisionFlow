import { useMutation } from "convex/react";
import { useState } from "react"

export const useApiMutaion = (mutationFunction: any) => {
    const [pending, setPending] = useState<boolean>(false);
    const apiMutation = useMutation(mutationFunction);

    const mutate = (payload: any) => {
        setPending(true);
        return apiMutation(payload)
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            })
            .finally(() => setPending(false))
    }

    return { mutate, pending };
}