import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { listKhodam } from "../list";

export default function Hasil() {
	const route = useRoute();
	const { namaOrang } = route.params;

	function generateRandomNumber(listKhodam) {
		if (!Array.isArray(listKhodam) || listKhodam.length === 0) {
			throw new Error("listKhodam tidak boleh kosong");
		}

		return Math.floor(Math.random() * listKhodam.length) + 1;
	}

	return (
		<View style={styles.container}>
			<Text>Hasil</Text>
			<Text>{namaOrang}</Text>
			<Text>{listKhodam[generateRandomNumber(listKhodam)]}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
