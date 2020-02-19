import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import ThemedText from '../UI/ThemedText';

interface Props {
    userName: string;
    onChatPress?: (event: GestureResponderEvent) => void
};

const ChatItem: React.FunctionComponent<Props> = ({
    onChatPress,
    userName,
}: Props) => {
    return (
        <TouchableOpacity onPress={onChatPress}>
            <View style={style.container}>
                <ThemedText styleKey="textColor" style={style.userNameStyle}>{userName}</ThemedText>
            </View>
        </TouchableOpacity>
    );
};

export default ChatItem;

interface Style {
    container: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "center",
    },
    userNameStyle: {
        fontWeight: "bold",
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
    }
})
