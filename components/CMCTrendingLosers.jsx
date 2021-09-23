import React from "react";
import useSWR from "swr";

function CMCTrendingLosers() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: data } = useSWR(
    [
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/gainers-losers",
      process.env.COINMARKETCAP_API_KEY,
    ],
    fetchWithToken
  );

  return <div>{data[0].name}</div>;
}

export default CMCTrendingLosers;
