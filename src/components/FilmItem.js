import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const FilmItem = (props) => {
    const {film, goToDetail, screenName} = props;
   
    return(
        <TouchableOpacity style={styles.main_container} onPress={goToDetail}>
            <View style={[styles.main_information_container, styles.shadows]}>
                <View style={styles.container_row}>
                <Image source={{uri: `https://image.tmdb.org/t/p/original${film.poster_path}`}} style={styles.image} />
                </View>
                <View style={styles.content_container}>
                    <View style={styles.container_column}>
                        <Text style={[styles.title_text,styles.text_color]}>{film.title}</Text>
                        <Text style={styles.text_color}>{film.release_date}</Text>
                        <Text numberOfLines={3} style={styles.text_color}>{film.overview}</Text>
                    </View>
                </View>
                
                <View style={{ flex:1, flexDirection:'row', justifyContent:'center', alignItems: 'center', marginLeft:30}}>
                {screenName !== 'TopRated' && film.vote_average > 7 && <View style={{justifyContent: 'center', marginRight: 10}}>
                    <Image source={require('../../assets/images/star.png')} style={{width: 30, height: 30}} />
                </View>}
                {screenName === 'TopRated' && <View style={{justifyContent: 'center', marginRight: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{film.vote_average}</Text>
                </View>}
                        <Text style={styles.vote}>{film.vote_average}</Text>
                </View>
                

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    content_container: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
    },
    main_information_container: {
        flexDirection: 'row',
        width: '97%',
        alignItems: 'center',
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
        paddingRight: 5,
    },
    picto: {
        width: 30,
        height: 30,
    },
    text_color: {
        color: "#B5A90F",
        width: 170,
    },
    vote: {
        color: "#B00020",
        fontWeight: 'bold',
    },
    shadows: {
    // shadowColor: '#B00020',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#B00020',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    },
    container_row: {
        flexDirection: "row",
    },
    container_column: {
        flexDirection: "column",
    }
})
