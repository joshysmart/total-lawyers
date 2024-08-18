import en from "@/language/en";

export default function Copyright() {
  return (
    <div className="w-full flex justify-center items-center p-4 py-6">
      <p className="text-center w-full lg:max-w-[86%] text-xs">
        {en.copyright}
      </p>
    </div>
  );
}
