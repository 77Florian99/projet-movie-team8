import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking, TouchableOpacity} from "react-native";
import {getMovie} from "../services/movie";

export const DetailScreen = (props) => {
    const {route, navigation} = props;
    const [movie, setMovie] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title
        })
    })
    useEffect(() => {
        getMovie(route.params.id)
            .then(setMovie)
    }, [route.params.id])

    function handlePress() {                                                                   
        if (movie) {
            Linking.canOpenURL(movie.homepage).then((supported) => {
                if (supported) {
                    Linking.openURL(movie.homepage);
                } else {
                    console.log("Don't know how to open URI: " + movie.homepage);
                }
                console.log(movie.overview)
            });
        }
    }

    if (!movie) {
        return null;
    }

    return (
        <View style={styles.page}>
            <ScrollView>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
                    style={styles.imageBg}
                />
                <View style={styles.movie}>
                    <View style={styles.header}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                            style={styles.image}
                        />
                        <View style={styles.headerInfo}>
                            <Image source={require('../../assets/images/button_play.png')} style={styles.imagePlay} />
                            <View style={styles.headerInfoItems}>
                                {movie.title && <Text style={styles.title}>{movie.title}</Text>}
                                {movie.production_companies.length > 0 && <Text style={styles.director}>{movie.production_companies[0].name}</Text>}
                                {movie.runtime > 0 ? <Text style={styles.runtime}>{movie.runtime} minutes</Text> :[]}
                            </View>
                        </View>
                    </View>
                    <Text style={styles.overviewTitle}>Synopsis</Text>
                    {movie.overview && <Text style={styles.overview}>{movie.overview}</Text>}
                </View>
            </ScrollView>
            
            {movie.homepage && (
                <View style={styles.footer}>                      
                    <TouchableOpacity style={styles.btnTrailer} onPress={handlePress}> 

                    <Text style={styles.txtBtn}>Trailer</Text>

                    </TouchableOpacity>
  
                </View>
            )}
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    imageBg: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        height: 350,
        resizeMode: 'cover',
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 36,
        marginTop: -36,
    },
    headerInfo: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    headerInfoItems:{
        backgroundColor: "#ffffff",
        padding: 10,
        marginTop: -60,
        width: "46%",
        borderRadius: 8,
    },
    title : {
        fontSize: 18,
        fontWeight: "bold",
    },
    image: {
        borderColor: "#ffffff",
        borderRadius: 8,
        borderWidth: 10,
        height: 134,
        marginRight: 15,
        width: 84,
    },
    imagePlay: {
        alignSelf: "flex-end",
        marginTop: 48,
        height: 40,
        width: 40,
    },
    director: {
        fontSize: 13,
        marginBottom: 10,
    },
    movie: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 120,
        paddingLeft: 18,
        paddingRight: 18,
        top: -35,
        zIndex: 1,
    },
    

    overview: {
        lineHeight: 22,
    },
    overviewTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 25,
    },
    txtBtn: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
    },
    btnTrailer : {
        backgroundColor:"#B00020",
        height: 60,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent: "center",
        alignItems: "center"

        

    },
    
})
