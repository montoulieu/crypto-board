import useSWR from "swr";
import EthereumPriceUSD from "./EthereumPriceUSD";

function ChiaBalance() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://api.ethermine.org/miner/40B7d669BF8a897443716A4e25ab2D0403736360/dashboard",
    fetcher,
    { refreshInterval: 30000 }
  );

  return (
    <div className="ethereum-balance border rounded-lg p-5 text-left border-purple-300 shadow-lg">
      <header className="flex">
        <h2 className="text-xl dark:text-purple-300 text-purple-500 font-extrabold mb-2">
          <a
            href="https://ethermine.org/miners/40B7d669BF8a897443716A4e25ab2D0403736360/dashboard"
            target="_blank"
          >
            Ethereum Pool
          </a>
        </h2>
        <EthereumPriceUSD />
      </header>
      <div>
        <div className="text-lg font-mono text-purple-400">
          <span className="font-bold">ETH </span>
          <span className="dark:text-purple-200">
            {data
              ? (
                  data.data.currentStatistics.unpaid * 0.000000000000000001
                ).toFixed(5)
              : 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChiaBalance;
