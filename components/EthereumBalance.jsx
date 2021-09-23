import useSWR from "swr";
import PayoutProgressBar from "./PayoutProgressBar";
import LogoEthereum from "./logos/LogoEthereum";

function ChiaBalance() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://api.ethermine.org/miner/40B7d669BF8a897443716A4e25ab2D0403736360/dashboard",
    fetcher,
    { refreshInterval: 30000 }
  );

  const { data: poolData, error: poolError } = useSWR(
    "https://api.ethermine.org/poolStats",
    fetcher,
    { refreshInterval: 30000 }
  );

  const ethereumPrice = poolData ? poolData.data.price.usd.toFixed(2) : 0.0;
  const unpaidEthereum = data
    ? (data.data.currentStatistics.unpaid * 0.000000000000000001).toFixed(5)
    : 0;

  return (
    <div className="flex flex-col ethereum-balance relative border-2 rounded-lg text-left border-purple-500 shadow-lg overflow-hidden">
      <header className="flex text-purple-500 items-center pr-5">
        <div className="bg-purple-500 text-white flex items-center justify-center h-11 w-11 mr-5 py-3 rounded-br-xl">
          <LogoEthereum />
        </div>
        <h2 className="text-xl dark:text-purple-400 font-extrabold pt-2">
          <a
            href="https://ethermine.org/miners/40B7d669BF8a897443716A4e25ab2D0403736360/dashboard"
            target="_blank"
          >
            Ethereum
          </a>
        </h2>

        <div className="text-lg font-mono dark:text-purple-200 ml-auto pt-2">
          ${ethereumPrice}
        </div>
      </header>

      <div className="py-3 px-5">
        <div className="text-lg font-mono text-purple-400">
          <span className="font-bold">ETH </span>
          <span className="dark:text-purple-200">{unpaidEthereum}</span>
        </div>
        <div className="text-lg font-mono text-purple-400">
          <span className="font-bold">USD </span>
          <span className="dark:text-purple-200">
            ${(unpaidEthereum * ethereumPrice).toFixed(2)}
          </span>
        </div>
      </div>

      <PayoutProgressBar
        payoutLimit={0.1}
        unpaidAmount={
          data
            ? (
                data.data.currentStatistics.unpaid * 0.000000000000000001
              ).toFixed(5)
            : 0
        }
      />
    </div>
  );
}

export default ChiaBalance;
