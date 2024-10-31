import { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Linking} from "react-native"

export default function MyNewsCard({query}){
    const [currentnewsdata, setnewsdata] = useState();
    
    const today = new Date()
    console.log(today.getDate())
    
    var year = today.getFullYear()
    var month = String(today.getMonth() + 1).padStart(2,'0')
    var day = String(today.getDate() - 10).padStart(2,'0')

    var formatted_date = `${year}-${month}-${day}`
    console.log(formatted_date)

    const mynewsdata = async()=>{
        try{
            const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${formatted_date}&sortBy=publishedAt&apiKey=96ae9245f5604702b14e33f34b15936c`);
            const MyNewsData = await response.json();
            setnewsdata(MyNewsData.articles)
        }
        catch(error)
        {
            console.error(error);
        }
    }

    useEffect(() =>{
        mynewsdata();
    }, [query]);


    return(
        <FlatList
        data = {currentnewsdata}
        keyExtractor = {(Item, index) => index}
        renderItem={({item, index})=>{
            return (
                <View style={styles.mynewsCard}>
                <Text style={styles.newstitle}>{item.title}</Text>
                <View style={{flex:0, width: '100%', alignItems: 'center'}}>
                <Image source={{uri:item.urlToImage}}
                style={{width:"98%", height:200}}/>
                </View>
                <Text style= {styles.description}>{item.description}</Text>
  
                <TouchableOpacity style={styles.readmoreContainer}
                onPress={()=>{
                    Linking.openURL(item.url)
                }}>
                    
                  <Text style={styles.readmorebtn}>Source {">>"}</Text>
                </TouchableOpacity>
              </View>
            );
        }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#bbd0ff',
        flexGrow: 1
       
      },
      allnewsContainer:{
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
         flexGrow: 1
      },
    HeaderContainer:{
       backgroundColor: '#293241',
       width: '100%',
       padding: '10px',
       height: '14%',
       alignItems: 'center',
    },
    Header: {
       color: "#fff",
       fontSize: 25,
       fontWeight: "bold",
       marginTop: 50,
      
    },
    mynewsCard: {
     borderColor: '#fff',
     borderwidth: '2px',
     backgroundColor: '#fff',
     width: '98.9%',
     borderRadius: 10,
     marginTop: '02%',
     flexGrow: 1
    },
    newstitle: {
      padding: '10px',
      fontSize: 25,
      fontWeight: 'bold',
      margin: 10
    },
    description: {
      fontSize:13,
      margin:10,
    },
    readmoreContainer:{
      flex:0,flexDirection: 'row',
      justifyContent: 'center',
  
    },
    readmorebtn: {
      backgroundColor: "#000",
      color: "#fff",
      fontSize: 20,
      fontWeight: '500',
      borderRadius: 10,
      margin:10, padding: 10
    }
  });
  