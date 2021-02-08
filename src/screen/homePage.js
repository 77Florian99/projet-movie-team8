import React from 'react';
import {View, StyleSheet, Button} from "react-native";
import {getGenre} from "../services/movie";
import {genreFilm} from "../components/GenreFilm.js";


export const HomePage = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [films, setFilms] = useState([])

    useEffect(() => {
        setIsLoading(true);
        getGenre().then(data => {
            setIsLoading(false);
            setFilms(data.results);

        })
    }, [])

    return (
        <SafeAreaView style={styles.main_container}>
            <Fade>
                <FlatList
                    data={films}
                    renderItem={({item, index}) => <genreFilm
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
            </Fade>
        </SafeAreaView>
    )
}





