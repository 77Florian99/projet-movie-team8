import React from 'react';
import {Text, StyleSheet,TouchableOpacity} from 'react-native';

export const GenreFilm = (props) => {
    
    const {genre, navigation, goToDetail} = props;

   
    return(
       
                <TouchableOpacity onPress={() => goToDetail()} style={styles.btn_container}>

                    <Text style={styles.film}>{genre.name}</Text>

                </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn_container: {
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 30, 
        width: '45%',
        
        paddingVertical: 20,
        paddingHorizontal: 30,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor:'#B00020',
        elevation: 8,
        
        shadowOffset: {
            width: 0,
            height: 4,
        },
  
    },
   
   
    film: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        color: 'red',
    },

    logo:{
    width: 50,
    height: 50,

    },
    
})
