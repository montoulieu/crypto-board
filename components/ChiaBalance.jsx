import useSWR from "swr";
import LogoChia from "./logos/LogoChia";
import NFTPlotProfit from "./NFTPlotProfit";
import PayoutProgressBar from "./PayoutProgressBar";

function ChiaBalance() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://api.flexpool.io/v2/miner/balance?coin=xch&address=xch1ntqna0fwgeke7g6kgz0xje33kmjj5m4hn70dujgmjlyp73cwrp7sfc5v00",
    fetcher,
    { refreshInterval: 30000 }
  );

  return (
    <div className="flex flex-col chia-balance relative border-2 rounded-lg p-5 text-left dark:border-green-200 border-green-400 shadow-lg">
      <header className="flex text-green-500">
        <h2 className="text-xl dark:text-green-400 font-extrabold mb-2">
          <LogoChia />
          <a
            href="https://www.flexpool.io/miner/xch/xch1ntqna0fwgeke7g6kgz0xje33kmjj5m4hn70dujgmjlyp73cwrp7sfc5v00"
            target="_blank"
          >
            Chia Pool
          </a>
        </h2>
        <div className="text-lg font-mono dark:text-green-200 ml-auto">
          ${data ? data.result.price.toFixed(2) : 0.0}
        </div>
      </header>

      <div className="mb-2">
        <div className="text-lg font-mono text-green-400">
          <span className="font-bold">XCH </span>
          <span className="dark:text-green-200">
            {data ? (data.result.balance * 0.000000000001).toFixed(5) : 0}
          </span>{" "}
        </div>
        <div className="text-lg font-mono text-green-400">
          <span className="font-bold">USD </span>
          <span className="dark:text-green-200">
            ${data ? data.result.balanceCountervalue.toFixed(2) : 0.0}
          </span>
        </div>
        {/* <NFTPlotProfit /> */}
      </div>

      <PayoutProgressBar
        payoutLimit={0.1}
        unpaidAmount={
          data ? (data.result.balance * 0.000000000001).toFixed(5) : 0
        }
        color={"green"}
      />
    </div>
  );
}

export default ChiaBalance;
