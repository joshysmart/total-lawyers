import en from "@/language/en";

export default function Info() {
  return (
    <>
      <h1 className="font-bold text-[28px] leading-[30px]">{en.title}</h1>
      <div className="w-[68px] h-1 rounded-[3px] bg-blue mt-3 hidden lg:block" />
      <p className="text-lg leading-5 mt-4">{en.description}</p>
    </>
  );
}
