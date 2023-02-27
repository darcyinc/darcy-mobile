import { Image, View } from "react-native";
import { Search } from "./Search";
import { UserProfileIcon } from "./UserProfileIcon";

export function Header() {
	return (
		<View className="px-8 pt-16">
			<View className="flex flex-row place-items-center place-content-between">
				<UserProfileIcon>
					<Image
						className="rounded-full w-10 h-10 mt-2"
						source={require("../../assets/user_profile_icon.png")}
					/>
				</UserProfileIcon>

				<Search />
			</View>

			<View className="flex mt-4">
				<View className="border flex border-[#3a3f42]" />
			</View>
		</View>
	);
}
