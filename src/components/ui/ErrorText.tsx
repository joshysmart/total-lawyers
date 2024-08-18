interface ErrorTextProps {
  message: string;
}
export default function ErrorText({ message }: ErrorTextProps) {
  return <p className="text-red-500 italic text-sm">{message}</p>;
}
