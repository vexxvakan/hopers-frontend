export enum ChainTypes {
	JUNO = "juno-1",
	COSMOS = "cosmoshub-4",
	AXELAR = "axelar",
	CHIHUAHUA = "chihuahua-1",
	OSMOSIS = "osmosis-1",
	KUJIRA = "kaiyo-1",
	STARGAZE = "stargaze-1",
	MARS = "mars-1",
	// PLANQ = "planq_7070-2",
	EVMOS = "evmos_9001-2",
}

export type ConfigType = {
	chainName: string;
	chainId: string;
	rpcEndpoint: string;
	restEndpoint: string;
	faucetEndpoint: string;
	addressPrefix: string;
	microDenom: string;
	coinDecimals: string;
	gasPrice: string;
	isEVM?: boolean;
	evmChainId?: number;
};

export const IBCConfig: {
	[key in ChainTypes]: {
		channel: string;
		juno_channel: string;
	};
} = {
	[ChainTypes.JUNO]: { channel: "", juno_channel: "" },
	[ChainTypes.COSMOS]: { channel: "channel-207", juno_channel: "channel-1" },
	[ChainTypes.AXELAR]: { channel: "channel-4", juno_channel: "channel-71" },
	[ChainTypes.CHIHUAHUA]: {
		channel: "channel-11",
		juno_channel: "channel-28",
	},
	[ChainTypes.OSMOSIS]: { channel: "channel-42", juno_channel: "channel-0" },
	[ChainTypes.KUJIRA]: { channel: "channel-1", juno_channel: "channel-87" },
	[ChainTypes.STARGAZE]: { channel: "channel-5", juno_channel: "channel-20" },
	[ChainTypes.MARS]: { channel: "channel-3", juno_channel: "channel-209" },
	// [ChainTypes.PLANQ]: { channel: "channel-43", juno_channel: "channel-204" },
	[ChainTypes.EVMOS]: { channel: "channel-5", juno_channel: "channel-70" },
};

export const ChainConfigs: { [key in ChainTypes]: ConfigType } = {
	[ChainTypes.JUNO]: {
		chainName: "Juno Mainnet",
		chainId: "juno-1",
		//rpcEndpoint: "https://rpc.juno.strange.love/",
		rpcEndpoint: "https://rpc-juno.itastakers.com/",
		// rpcEndpoint: "https://juno-rpc.reece.sh/",
		// rpcEndpoint: "https://juno-rpc-cache.reece.sh/",
		// rpcEndpoint: "https://rpc-juno.mib.tech/",
		restEndpoint: "https://lcd-juno.strange.love/",
		// restEndpoint: "https://juno-api.reece.sh/",
		faucetEndpoint: "",
		addressPrefix: "juno",
		microDenom: "ujuno",
		coinDecimals: "6",
		gasPrice: "0.025",
	},
	[ChainTypes.COSMOS]: {
		chainName: "Cosmos Hub",
		chainId: "cosmoshub-4",
		// rpcEndpoint: "https://rpc-cosmoshub-ia.notional.ventures/",
		// rpcEndpoint: "https://rpc.cosmos.directory/cosmoshub",
		rpcEndpoint: "https://rpc-cosmoshub.blockapsis.com/",
		// rpcEndpoint: "https://cosmoshub.validator.network:443",
		restEndpoint: "https://rest.cosmos.directory/cosmoshub",
		faucetEndpoint: "",
		addressPrefix: "cosmos",
		microDenom: "uatom",
		coinDecimals: "6",
		gasPrice: "0.025",
	},
	[ChainTypes.AXELAR]: {
		chainName: "Axelar",
		chainId: "axelar-dojo-1",
		rpcEndpoint: "https://rpc.cosmos.directory/axelar/",
		restEndpoint: "",
		faucetEndpoint: "",
		addressPrefix: "axelar",
		microDenom: "uaxl",
		coinDecimals: "6",
		gasPrice: "0.025",
	},
	[ChainTypes.CHIHUAHUA]: {
		chainName: "Chihuahua",
		chainId: "chihuahua-1",
		rpcEndpoint: "https://rpc.cosmos.directory/chihuahua",
		restEndpoint: "",
		faucetEndpoint: "",
		addressPrefix: "chihuahua",
		microDenom: "uhuahua",
		coinDecimals: "6",
		gasPrice: "0.025",
	},
	[ChainTypes.OSMOSIS]: {
		chainName: "Osmosis",
		chainId: "osmosis-1",
		rpcEndpoint: "https://rpc.cosmos.directory/osmosis",
		restEndpoint: "",
		faucetEndpoint: "",
		addressPrefix: "osmo",
		microDenom: "uosmo",
		coinDecimals: "6",
		gasPrice: "0.025",
	},
	[ChainTypes.KUJIRA]: {
		chainName: "Kujura",
		chainId: "kaiyo-1",
		// rpcEndpoint: "https://rpc-kujira.whispernode.com",
		rpcEndpoint: "https://rpc-kujira.ecostake.com/",
		restEndpoint: "https://rest.cosmos.directory/kujira",
		faucetEndpoint: "",
		addressPrefix: "kujira",
		microDenom: "ukuji",
		coinDecimals: "6",
		gasPrice: "0.025",
	},
	[ChainTypes.STARGAZE]: {
		chainName: "Stargaze",
		chainId: "stargaze-1",
		rpcEndpoint: "https://rpc.cosmos.directory/stargaze",
		restEndpoint: "https://rest.cosmos.directory/stargaze",
		faucetEndpoint: "",
		addressPrefix: "stars",
		microDenom: "ustars",
		coinDecimals: "6",
		gasPrice: "0.025",
	},
	[ChainTypes.MARS]: {
		chainName: "Mars",
		chainId: "mars-1",
		// rpcEndpoint: "https://rpc.cosmos.directory/mars",
		rpcEndpoint: "https://rpc-mars.keplr.app",
		restEndpoint: "https://rest.cosmos.directory/mars",
		faucetEndpoint: "",
		addressPrefix: "mars",
		microDenom: "umars",
		coinDecimals: "6",
		gasPrice: "0.025",
	},
	// [ChainTypes.PLANQ]: {
	// 	chainName: "Planq",
	// 	chainId: "planq_7070-2",
	// 	rpcEndpoint: "https://rpc.cosmos.directory/planq",
	// 	restEndpoint: "https://rest.cosmos.directory/planq",
	// 	faucetEndpoint: "",
	// 	addressPrefix: "plq",
	// 	microDenom: "aplanq",
	// 	coinDecimals: "18",
	// 	gasPrice: "0.025",
	// 	isEVM: true,
	// 	evmChainId: 7070,
	// },
	[ChainTypes.EVMOS]: {
		chainName: "Evmos",
		chainId: "evmos_9001-2",
		rpcEndpoint: "https://rpc.cosmos.directory/evmos",
		restEndpoint: "https://rest.cosmos.directory/evmos",
		faucetEndpoint: "",
		addressPrefix: "evmos",
		microDenom: "aevmos",
		coinDecimals: "18",
		gasPrice: "0.025",
		isEVM: true,
		evmChainId: 9001,
	},
};
