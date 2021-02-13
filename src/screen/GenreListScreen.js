import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";
import {getListGenre, getDirecting,} from "../services/movie";
import {FilmItem} from "../components/FilmItem";

export const GenreListScreen = (props) => {
    const {route, navigation} = props;
    const [isLoading, setIsLoading] = useState(false)
    const [films, setFilms] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
             title: route && route.params && route.params.title 
         })
    })
    
    useEffect(() => {

        setIsLoading(true);
        getListGenre().then(data => {
            setIsLoading(false);
            setFilms(data.results);

        })
       
        getListGenre(route.params.id).then(data => {
            setIsLoading(false);
            setFilms(data.results);

        })


    }, [])

   


    return (
        <SafeAreaView style={styles.main_container}>
            <View>
                <FlatList
                    data={films}
                    renderItem={({item, index}) => <FilmItem
                        index={index}
                        film={item}
                         goToDetail={() => props.navigation.navigate('Detail', {title: item.title, id: item.id})}
                         screenName={props.route.name}
                    />}
                    keyExtractor={item => item.id.toString()}
                />
                { isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' color={'#000'} />
                    </View>
                    : null
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    loading_container: {
        bottom: 300
    }
})
