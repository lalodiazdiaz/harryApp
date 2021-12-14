import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {getLibro} from '../services/Servicios';

const portadas = [
  'https://i2.wp.com/www.bloghogwarts.com/wp-content/uploads/2011/02/piedra-filosofal-reino-unido-3.jpg',
  'https://i0.wp.com/www.bloghogwarts.com/wp-content/uploads/2011/02/camara-secreta-reino-unido-3.jpg',
  'https://i2.wp.com/www.bloghogwarts.com/wp-content/uploads/2011/02/prisionero-azkaban-reino-unido-3.jpg',
  'https://i1.wp.com/www.bloghogwarts.com/wp-content/uploads/2011/02/caliz-fuego-reino-unido-3.jpg?fit=637%2C1024&ssl=1',
  'https://i2.wp.com/www.bloghogwarts.com/wp-content/uploads/2011/02/orden-fenix-reino-unido-2.jpg',
  'https://i1.wp.com/www.bloghogwarts.com/wp-content/uploads/2011/02/principe-mestizo-reino-unido-3.jpg',
  'https://i2.wp.com/www.bloghogwarts.com/wp-content/uploads/2011/02/reliquias-muerte-reino-unido-2.jpg?fit=640%2C708&ssl=1',
  'https://www.penguinlibros.com/ar/1137607/harry-potter-y-el-legado-maldito-harry-potter-8.jpg',
];

const DetailsBooks = ({navigation, route}) => {
  const id = route.params.Id;
  const [libro, setLibro] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getLibro(id).then(libro => {
      setLibro(libro);
      setLoaded(true);
    });
  }, []);
  return (
    <React.Fragment>
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
      {loaded && (
        <View style={styles.cont}>
          <ScrollView>
            <View style={{flexDirection: 'row'}}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{uri: portadas[libro.id - 1]}}
              />
              <View
                style={{
                  marginLeft: 10,
                  width: Dimensions.get('screen').width / 2.5,
                }}>
                <Text style={styles.titulo}>{'Nombre: '}</Text>
                <Text style={styles.contenido}>{libro.libro}</Text>
                <Text style={styles.titulo}>{'Titulo original: '}</Text>
                <Text style={styles.contenido}>{libro.titulo_original}</Text>
                <Text style={styles.titulo}>{'Fecha de lanzamiento: '}</Text>
                <Text style={styles.contenido}>
                  {libro.fecha_de_lanzamiento}
                </Text>
                <Text style={styles.titulo}>{'Autor: '}</Text>
                <Text style={styles.contenido}>{libro.autora}</Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text style={styles.titulo}>{'Descripción: '}</Text>
              <Text style={styles.contenido}>{libro.descripcion}</Text>
            </View>
          </ScrollView>
        </View>
      )}
      {!loaded && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e6d7bd',
          }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </React.Fragment>
  );
};

export default DetailsBooks;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 180,
    backgroundColor: '#000',
  },
  cont: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e6d7bd',
    justifyContent: 'flex-start',
  },
  logo: {
    height: 100,
    width: 100,
  },
  titulo: {
    color: '#000',
    fontSize: 20,
    marginTop: 5,
  },
  contenido: {
    color: '#000',
    fontSize: 16,
    borderBottomWidth: 2,
    borderColor: '#000',
  },
});
