import {
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	useFonts
} from "@expo-google-fonts/inter";
import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";
import { Header } from "../src/components/Header/Header";
import { Loading } from "../src/components/Loading";

export const unstable_settings = {
	initialRouteName: "index",
};

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<>
			<View className="flex-1 bg-background">
				<Header />
				<Slot />
			</View>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
		</>
	);
}
