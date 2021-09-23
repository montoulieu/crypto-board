import React from "react";
import useSWR from "swr";

function CMCTrendingLosers() {
  const fetcher = (...args) =>
    fetch(...args, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
      },
    }).then((res) => res.json());

  const { data: data } = useSWR(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/gainers-losers",
    fetcher
  );

  return (
    <div>
      <button onClick={() => console.log(data)}>Test</button>
    </div>
  );
}

export default CMCTrendingLosers;
