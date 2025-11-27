import { Loader } from "lucide-react";

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <Loader className="h-12 w-12 text-primary animate-spin" />
    </div>
  );
}
