import create from 'zustand'

const useSettingsStore = create(set => ({
  chiaWalletAddress: '',
  ethereumWalletAddress: '',
  setChiaWalletAddress: (address) => set(state => ({ chiaWalletAddress: address })),
  setEthereumWalletAddress: (address) => set(state => ({ ethereumWalletAddress: address })),
}))

export default useSettingsStore;
