import { useRouter } from "expo-router";
import { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";

export function UserProfileIcon({ children }: PropsWithChildren) {
	const router = useRouter();

	return (
		<TouchableOpacity
			onPress={() => router.push("/profile")}
			activeOpacity={0.7}
		>
			{children}
		</TouchableOpacity>
	);
}
