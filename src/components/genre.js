import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const genreFilm = (props) => {
    const {genre} = props;
    return(
        <View style={styles.main_container}>
            <View style={styles.main_information_container}>
                <View style={styles.content_container}>
                    <View>
                        <Text style={styles.title_text}>{film.title}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content_container: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
    },
    main_information_container: {
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 120,
        margin: 5,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    picto: {
        width: 30,
        height: 30,
    }
})
