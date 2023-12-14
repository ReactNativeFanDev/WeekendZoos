import { Dimensions } from "react-native";

export const Ratio = {
    deviceWidth: Dimensions.get("window").width,
    deviceHight: Dimensions.get("window").height,
    size: Dimensions.get("window").height/Dimensions.get("window").width,
}