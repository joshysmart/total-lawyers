import { cn } from "@/lib/utils";
import { Button } from "./button";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MyButton({
  className,
  children,
  ...props
}: MyButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "bg-yellow hover:bg-yellow/80 font-bold text-xl",
        className
      )}
    >
      {children}
    </Button>
  );
}
