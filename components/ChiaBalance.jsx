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

  const chiaPrice = data ? data.result.price.toFixed(2) : 0.0;
  const unpaidChia = data
    ? (data.result.balance * 0.000000000001).toFixed(5)
    : 0;

  return (
    <div className="flex flex-col chia-balance relative border-2 rounded-lg text-left border-green-500 shadow-lg overflow-hidden">
      <header className="flex text-green-500 items-center pr-5">
        <div className="bg-green-500 text-white flex items-center justify-center h-11 w-11 mr-5 py-3 rounded-br-xl">
          <LogoChia />
        </div>
        <h2 className="text-xl dark:text-green-400 font-extrabold pt-2">
          <a
            href="https://www.flexpool.io/miner/xch/xch1ntqna0fwgeke7g6kgz0xje33kmjj5m4hn70dujgmjlyp73cwrp7sfc5v00"
            target="_blank"
          >
            Chia
          </a>
        </h2>
        <div className="text-lg font-mono dark:text-green-200 ml-auto pt-2">
          ${chiaPrice}
        </div>
      </header>

      <div className="py-3 px-5">
        <div className="text-lg font-mono text-green-400">
          <span className="font-bold">XCH </span>
          <span className="dark:text-green-200">{unpaidChia}</span>
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
        unpaidAmount={unpaidChia}
        color={"green"}
      />
    </div>
  );
}

export default ChiaBalance;
