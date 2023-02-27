import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export function Search() {
	const router = useRouter();

	return (
		<TouchableOpacity
			onPress={() => router.push("/search")}
			activeOpacity={0.7}
			className="flex border-[#3a3f42] rounded border px-3.5 py-3 outline-0"
		>
			<Feather name="search" size={18} color="white" />
		</TouchableOpacity>
	);
}
