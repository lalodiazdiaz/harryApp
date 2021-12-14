import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Books from '../Components/Books';
import Card from '../Components/Card';
import Infocard from '../Components/Infocard';
import Spell from '../Components/Spell';

const Lista = ({navigation, route}) => {
  const data = route.params.data;
  const screen = route.params.screen;
  const lista = route.params.lista;

  return (
    <React.Fragment>
      <View style={styles.list}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#e6d7bd',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={{
              uri: 'https://static.wikia.nocookie.net/harrypotter/images/4/46/Ministry_of_magic_logo.png/revision/latest/scale-to-width-down/1000?cb=20161123235622',
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              textAlign: 'center',
            }}>
            Ministerio de magia
          </Text>
        </View>
        {lista == 'personajes' && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Card navigation={navigation} item={item} screen={screen} />
            )}></FlatList>
        )}
        {lista == 'speall' && (
          <FlatList
            data={data}
            renderItem={({item}) => <Spell item={item} />}></FlatList>
        )}

        {lista == 'libros' && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Books navigation={navigation} item={item} screen={screen} />
            )}></FlatList>
        )}
        {lista == 'info' && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Infocard navigation={navigation} item={item} screen={screen} />
            )}></FlatList>
        )}
      </View>
    </React.Fragment>
  );
};

export default Lista;

const styles = StyleSheet.create({
  list: {backgroundColor: '#e6d7bd', marginBottom: 100},
  logo: {
    height: 100,
    width: 100,
    marginTop: 5,
  },
});
