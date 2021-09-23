import useSWR from "swr";

function EthereumPriceUSD() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return (
    <div className="text-lg font-mono dark:text-purple-200 ml-auto">
      ${data ? data.data.price.usd.toFixed(2) : 0.0}
    </div>
  );
}

export default EthereumPriceUSD;
