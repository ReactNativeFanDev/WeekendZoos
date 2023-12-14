import { StyleSheet } from "react-native";
import { Ratio } from "../../constants/Global";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080e1c',
        paddingTop: 12
    },
    zooImageContainer: {
        width: '90%',
        height: 200,
        alignSelf: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    animalBorder: {
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderWidth: 2,
        borderTopColor: '#deb01a',
        borderBottomColor: '#51a31e',
        borderRightColor: '#211ade',
        borderLeftColor: '#1adeb7',
    },
    mapContainer: {
        width: Ratio.deviceWidth * 0.28,
        height: Ratio.deviceWidth * 0.28,
    
    },
    zooNameContainer: {
        width: Ratio.deviceWidth * 0.59,
        height: Ratio.deviceWidth * 0.28,
        alignItems: 'center',
        justifyContent: 'center'
    },
    zooName: {
        fontSize: Ratio.deviceWidth * 0.07,
        color: '#FFF',
        alignSelf: 'center',
        letterSpacing: 2,
        shadowColor: '#FFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: Ratio.deviceWidth * 0.03
    },
    description: {
        width: '90%',
        backgroundColor: '#FFF',
        alignSelf: 'center',
        marginTop: Ratio.deviceWidth * 0.03,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 33,
    },
    descriptionText: {
        fontSize: Ratio.deviceWidth * 0.045,
        padding: 10,
    },
    onPress: {
        opacity: 0.75
    }
})