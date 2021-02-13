
import React, {useState, useEffect} from 'react';
import {View, StyleSheet,SafeAreaView, FlatList, ActivityIndicator,Image, ScrollView} from "react-native";
import {getGenre} from "../services/movie";
import {GenreFilm} from "../components/GenreFilm.js";


export const HomePage = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [films, setFilms] = useState([])
    const {navigation} = props;
    

   

    useEffect(() => {
        setIsLoading(true);
        getGenre().then(data => {
            setIsLoading(false);
            setFilms(data.genres);

        })
    }, [])

    return (
        <SafeAreaView style={styles.main_container}>
            <View style={{ justifyContent:'center', alignContent:'center', flexDirection: 'row', height: 370,}}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            </View>

           <ScrollView style={{}}>
                <FlatList
                    data={films}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-around'}}
                    renderItem={({item, index}) => <GenreFilm index={index} genre={item} goToDetail={() =>navigation.navigate('GenreList', {title: item.name, id: item.id})}
                    screenName={props.route.name}/>}
                    keyExtractor={item => item.id.toString()
                    }
                />
                </ScrollView>
                { isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' color={'#000'} />
                    </View>
                    : null
                }
           
        </SafeAreaView>
    )

    
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
       
    },
   

    list:{
        textAlign: 'center'
    },

    logo:{
        width: 300,
        height: 300,
        marginBottom:50,
        marginTop:50,
        justifyContent:'center', alignContent:'center'
    },
    
 


    
})





