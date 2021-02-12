import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet, Image} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '')
        props.handleSearch(text);
    }

    return (
        <View style={styles.page}>
            <View>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.main_container}>
                <View style={styles.input_container}>
                    <FontAwesome
                        name="search"
                        size={24}
                        color="#B00020" />
                    <TextInput
                        style={styles.textinput}
                        placeholder='Titre du film'
                        onChangeText={onChangeText}
                    />
                </View>
                <View style={styles.searchbutton}>
                    <Button
                        disabled={isDisabled}
                        title='RECHERCHE'
                        onPress={() => props.handleClickButton()} 
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        height: 390,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_container: {
        flex: 2,
        padding: 30,
        backgroundColor: '#B00020',
        borderRadius: 30,
        margin: 0,
        width: '100%',
        height: 510,
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    textinput: {
        fontWeight: 'bold',
        color:'#B00020',
        height: 50,
        paddingLeft: 10,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchbutton: {
        marginTop: 10,
        marginBottom: -10,
        marginLeft: 200,
        backgroundColor: '#B5A90F',
        borderRadius: 5,
    },
})
