import InfiniteScroll from "../components/InfiniteScroll";
import Button from "../components/Button";

const SectionRunningLogo = () => {
  return (
    <div className="py-[82px]">
      <p className="font-bold text-biru-muda text-center pb-12 px-8 md:px-0">
        Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor Serta
        Menjadi Narasumber di Detikfinance
      </p>
      <InfiniteScroll />
      <div className="flex space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 pt-12  justify-center">
        <Button href="#" text="Dapatkan Startup Kamu" />
      </div>
    </div>
  );
};

export default SectionRunningLogo;
