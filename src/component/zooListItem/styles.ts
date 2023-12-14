import { StyleSheet } from "react-native";
import { Ratio } from "../../constants/Global";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 30,
    },
    photo: {
        width: '100%',
        height: Ratio.deviceWidth * 0.8,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14,
        backgroundColor: '#080e1c',
        alignSelf: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: -1
    },
    zooName: {
        textAlign: 'center',
        fontSize: Ratio.deviceWidth * 0.06,
        fontWeight: '500',
        color: '#FFF',
        paddingHorizontal: 20,
        paddingTop: 3,
    },
    onPress: {
        opacity: 0.9,
        width: Ratio.deviceWidth * 0.95,
        alignSelf: 'center'
    }
})