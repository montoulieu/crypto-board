import useSWR from "swr";

function NFTPlotProfit() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://public-api.chiaexplorer.com/0.1/balance/xch1ntqna0fwgeke7g6kgz0xje33kmjj5m4hn70dujgmjlyp73cwrp7sfc5v00",
    fetcher,
    { refreshInterval: 3600000 }
  );
  return (
    <div className="text-lg font-mono text-green-400">
      <span className="font-bold">NFT </span>
      <span className="dark:text-green-200">
        ${data ? data.result.balanceCountervalue.toFixed(2) : 0.0}
      </span>
    </div>
  );
}

export default NFTPlotProfit;
