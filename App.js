// Author: Avin Madhu
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import MyNewsCard from './components/mynewscard';
import { Feather } from '@expo/vector-icons';


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('in');
  const handleSearch = (text)=>{
    setSearchQuery(text);
  }

  const searchText = () => {
    if (searchQuery.trim() === '') {
      // Show an alert if the input is empty
      Alert.alert('Error', 'Please enter a value');
    } else {
      
      setQuery(searchQuery);
    }
  };

  return (

    <View style= {styles.container}>

      {/* The App Title */}
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>The Avi Times</Text>
      </View>
     
     <View style={styles.allnewsContainer}>
          <View style={styles.searchContainer}>
            <Feather name="search" size={24} color="#555" style={{alignSelf: 'center', marginLeft: '1%'}} />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              placeholderTextColor="#888"
              onChangeText={(text) => handleSearch(text)}
            />
            <TouchableOpacity onPress={searchText} style={styles.searchBtn}><Text style={{fontSize:15, fontWeight: 500}}>Search</Text></TouchableOpacity>
          </View>

          <MyNewsCard query = {query}/>
     </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#bbd0ff',
   
  },
  allnewsContainer:{
     width: '100%',
     alignItems: 'center',
     justifyContent: 'center',
     
  },
  HeaderContainer:{
     backgroundColor: '#293241',
     width: '100%',
     padding: '10px',
     height: '19%',
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
   width: '90%',
   borderRadius: 10,
   marginTop: '02%',
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
  },



  // search stylings
  searchContainer:{
     width: '100%',
     flexDirection: 'row',
     backgroundColor: '#fff',
     height: '7%',
     alignContent: 'center',
     

  },
 input:{
  width: '70%',
  marginLeft: 10,
  justifyContent: 'center',
 },
 searchBtn:{
  width: '80%',
  backgroundColor: '#758bfd',
  borderRadius: 5,
  color: '#fff',
  padding: 10,
  marginRight: '5%',
  justifyContent: 'center',

 }

 
});
