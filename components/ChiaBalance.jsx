import useSWR from "swr";

function ChiaBalance() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://api.flexpool.io/v2/miner/balance?coin=xch&address=xch1ntqna0fwgeke7g6kgz0xje33kmjj5m4hn70dujgmjlyp73cwrp7sfc5v00",
    fetcher,
    { refreshInterval: 30000 }
  );

  return (
    <div className="chia-balance border rounded-lg p-5 text-left dark:border-green-200 border-green-400 shadow-lg">
      <header className="flex">
        <h2 className="text-xl text-green-400 font-extrabold mb-2">
          <a
            href="https://www.flexpool.io/miner/xch/xch1ntqna0fwgeke7g6kgz0xje33kmjj5m4hn70dujgmjlyp73cwrp7sfc5v00"
            target="_blank"
          >
            Chia Pool
          </a>
        </h2>
        <div className="text-lg font-mono dark:text-green-200 ml-auto">
          ${data ? data.result.price : 0.0}
        </div>
      </header>
      <div>
        <div className="text-lg font-mono text-green-400">
          <span className="font-bold">XCH </span>
          <span className="dark:text-green-200">
            {data ? (data.result.balance * 0.000000000001).toFixed(5) : 0}
          </span>{" "}
        </div>
        <span className="text-lg font-mono text-green-400">
          <span className="font-bold">USD </span>
          <span className="dark:text-green-200">
            ${data ? data.result.balanceCountervalue.toFixed(2) : 0.0}
          </span>
        </span>
      </div>
    </div>
  );
}

export default ChiaBalance;
