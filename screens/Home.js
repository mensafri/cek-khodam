import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";

export default function Home() {
	const [nama, setNama] = useState("");
	const navigation = useNavigation();

	function cekOnClick() {
		console.log(nama);
		if (nama === "") {
			Alert.alert("Warning", "Nama Tidak Boleh Kosong");
		} else {
			navigation.navigate("Hasil", { namaOrang: nama });
		}
	}

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/pp.jpg")}
				resizeMode="cover"
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View style={{ alignItems: "center", marginTop: 120 }}>
					<View style={{ flexDirection: "row", gap: 10 }}>
						<Text style={{ color: "white", fontSize: 50 }}>Cek</Text>
						<Text style={{ color: "red", fontSize: 50 }}>Khodam</Text>
					</View>
					<View>
						<Text
							style={{
								color: "white",
								fontSize: 20,
								fontFamily: "Poppins_200ExtraLight",
							}}>
							Sudah Cek Khodam Hari Ini?
						</Text>
					</View>
				</View>
				<View style={{ alignItems: "center", marginTop: 190 }}>
					<View
						style={{
							borderWidth: 1,
							borderColor: "gray",
							borderRadius: 20,
							gap: 15,
						}}>
						<TextInput
							value={nama}
							onChangeText={(e) => setNama(e)}
							style={{
								borderWidth: 2,
								borderColor: "white",
								marginHorizontal: 200,
								marginTop: 20,
								borderRadius: 20,
								color: "white",
							}}
							placeholderTextColor="gray"
							placeholder="Masukkan Nama Kamu"
						/>
						<TouchableOpacity
							onPress={cekOnClick}
							style={{
								backgroundColor: "red",
								alignItems: "center",
								marginHorizontal: 200,
								marginBottom: 20,
								borderRadius: 20,
							}}>
							<Text style={{ color: "white", fontSize: 20 }}>Cek</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ marginTop: 290 }}>
					<Text style={{ color: "white", fontSize: 20 }}>By @mensafri</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
