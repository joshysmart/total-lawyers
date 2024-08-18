import Info from "./Info";
import Support from "./Supports";

export default function InfoSection() {
  return (
    <div className="bg-[#F8F8F8] w-[44%] py-10 px-6 hidden lg:block">
      <Info />
      <Support />
    </div>
  );
}
