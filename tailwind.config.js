const nativewind = require("nativewind/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	presets: [nativewind],
	theme: {
		extend: {
			colors: {
				background: "#191B22"
			},
			fontFamily: {
				regular: "Inter_400Regular",
				semibold: "Inter_600SemiBold",
				bold: "Inter_700Bold",
				extrabold: "Inter_800ExtraBold",
			},
		},
	},
	plugins: [],
};
