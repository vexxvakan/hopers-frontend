import { ChainTypes } from "../constants/ChainTypes";

export enum TokenType {
	HOPERS = "hopers",
	JUNO = "ujuno",
	ATOM = "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
	USDC = "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
	OSMO = "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
	EVMOS = "ibc/9B990F95D85E7CA8C46544975776CAA20A3DEE3507EEA829A4000D8D65617F6D",
	MARS = "ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384",
	KUJIRA = "ibc/7F7D3698E2E3484D576001608BB84D13F5C8B02B97359716ECC60A29A7523BF3",
	STARS = "ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885",
	HUAHUA = "ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241",
	HOPE = "hope",
	NETA = "neta",
	PUNK = "punk",
	RACOON = "racoon",
	WYND = "wynd",
	BLUE = "blue",
	RED = "red",
	CANLAB = "canlab",
	SGNL = "sgnl",
	AQUA = "aqua",
	GLTO = "glto",
	RAW = "raw",
	DRGN = "drgn",
	BANANA = "banana",
	CZAR = "czar",
	HOWL = "howl",
	KLEO = "kleo",
	JAPE = "jape",
	// PLANQ = "ibc/9AFC3B24C30BE40250D3F40818CFED98C74EA320F744AA6CF2129F0D109E6FF5",
}

export const getTokenName = (tokenType: TokenType): string =>
	(Object.keys(TokenType) as Array<keyof typeof TokenType>).filter(
		(key) => TokenType[key] === tokenType
	)[0];

export const TokenFullName: { [key in TokenType]: string } = {
	[TokenType.JUNO]: "JUNO",
	[TokenType.HOPE]: "HOPE GALAXY",
	[TokenType.RAW]: "JunoSwap Raw Dao",
	[TokenType.NETA]: "NETA",
	[TokenType.ATOM]: "COSMOS HUB",
	[TokenType.USDC]: "USDC",
	[TokenType.HOPERS]: "HOPERS",
	[TokenType.PUNK]: "PUNK",
	[TokenType.HUAHUA]: "HUAHUA",
	[TokenType.CANLAB]: "CANLAB",
	[TokenType.RED]: "RED",
	[TokenType.BLUE]: "BLUE",
	[TokenType.WYND]: "WYND",
	[TokenType.SGNL]: "SGNL",
	[TokenType.RACOON]: "RACOON",
	[TokenType.GLTO]: "GLTO",
	[TokenType.AQUA]: "AQUA",
	[TokenType.OSMO]: "OSMO",
	[TokenType.DRGN]: "DRGN",
	[TokenType.BANANA]: "BANANA",
	[TokenType.CZAR]: "CZAR",
	[TokenType.KUJIRA]: "KUJI",
	[TokenType.STARS]: "STARS",
	[TokenType.MARS]: "MARS",
	[TokenType.HOWL]: "HOWL",
	[TokenType.KLEO]: "KLEO",
	[TokenType.JAPE]: "JAPE",
	// [TokenType.PLANQ]: "PLANQ",
	[TokenType.EVMOS]: "EVMOS",
};

export type TokenStatusType = {
	isNativeCoin: boolean;
	isIBCCoin: boolean;
	contractAddress?: string;
	originChain?: ChainTypes;
	chain: ChainTypes;
	coinName?: string;
	decimal?: number;
	denom?: string;
};

export const TokenStatus: { [key in TokenType]: TokenStatusType } = {
	[TokenType.JUNO]: {
		isNativeCoin: true,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
	},
	[TokenType.HOPE]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
	},
	[TokenType.RAW]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
		// "juno1sn67lmh4gzx8kcz9cpek4suyglvley2vnksj7tdadfeamfe4089ssvfkgx", // this is only for swap testing
	},
	[TokenType.NETA]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
	},
	[TokenType.ATOM]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.COSMOS,
		originChain: ChainTypes.COSMOS,
	},
	[TokenType.USDC]: {
		isNativeCoin: false,
		isIBCCoin: true,
		chain: ChainTypes.AXELAR,
		originChain: ChainTypes.AXELAR,
		denom: "uusdc",
	},
	[TokenType.HOPERS]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
	},
	[TokenType.PUNK]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno13926947pmrjly5p9hf5juey65c6rget0gqrnx3us3r6pvnpf4hwqm8mchy",
	},
	[TokenType.HUAHUA]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.CHIHUAHUA,
		originChain: ChainTypes.CHIHUAHUA,
	},
	[TokenType.CANLAB]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1vn38rzq0wc7zczp4dhy0h5y5kxh2jjzeahwe30c9cc6dw3lkyk5qn5rmfa",
		decimal: 3,
	},
	[TokenType.RED]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
	},
	[TokenType.BLUE]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
	},
	[TokenType.WYND]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
	},
	[TokenType.SGNL]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k",
	},
	[TokenType.RACOON]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
	},
	[TokenType.GLTO]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
	},
	[TokenType.AQUA]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt",
	},
	[TokenType.OSMO]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.OSMOSIS,
		originChain: ChainTypes.OSMOSIS,
	},
	[TokenType.DRGN]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno147t4fd3tny6hws6rha9xs5gah9qa6g7hrjv9tuvv6ce6m25sy39sq6yv52",
	},
	[TokenType.BANANA]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
	},
	[TokenType.CZAR]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1x02k67asfmjawgc96dj8nxq6se3fmx36gedgs5hvkjegdhfy97rs3jgj2h",
	},
	[TokenType.KUJIRA]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.KUJIRA,
		originChain: ChainTypes.KUJIRA,
	},
	[TokenType.STARS]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.STARGAZE,
		originChain: ChainTypes.STARGAZE,
	},
	[TokenType.MARS]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.MARS,
		originChain: ChainTypes.MARS,
	},
	[TokenType.HOWL]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz",
	},
	[TokenType.KLEO]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy",
	},
	[TokenType.JAPE]: {
		isNativeCoin: false,
		isIBCCoin: false,
		chain: ChainTypes.JUNO,
		contractAddress:
			"juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps",
	},
	// [TokenType.PLANQ]: {
	// 	isNativeCoin: true,
	// 	isIBCCoin: true,
	// 	chain: ChainTypes.PLANQ,
	// 	originChain: ChainTypes.PLANQ,
	// 	decimal: 18,
	// },
	[TokenType.EVMOS]: {
		isNativeCoin: true,
		isIBCCoin: true,
		chain: ChainTypes.EVMOS,
		originChain: ChainTypes.EVMOS,
		decimal: 18,
	},
};

export const OtherTokens: { [key: string]: string } = {
	juno13926947pmrjly5p9hf5juey65c6rget0gqrnx3us3r6pvnpf4hwqm8mchy: "PUNK",
};
