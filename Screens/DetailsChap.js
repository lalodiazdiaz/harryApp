import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import {getPersonaje} from '../services/Servicios';

const DetailsChap = ({navigation, route}) => {
  const id = route.params.Id;
  const [personajeDetalle, setPersonajeDetalle] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getPersonaje(id).then(persData => {
      setPersonajeDetalle(persData);
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
                source={{uri: personajeDetalle.imagen}}
              />
              <View
                style={{
                  marginLeft: 10,
                  width: Dimensions.get('screen').width / 2.5,
                }}>
                <Text style={styles.titulo}>{'Nombre: '}</Text>
                <Text style={styles.contenido}>
                  {personajeDetalle.personaje}
                </Text>
                <Text style={styles.titulo}>{'Apodo: '}</Text>
                <Text style={styles.contenido}>{personajeDetalle.apodo}</Text>
                <Text style={styles.titulo}>{'Interpretado por: '}</Text>
                <Text style={styles.contenido}>
                  {personajeDetalle.interpretado_por}
                </Text>
              </View>
            </View>

            {personajeDetalle.hijo}

            {personajeDetalle.hijos.length >= 1 ? (
              <View style={{padding: 10}}>
                <Text style={styles.titulo}> Hijos: </Text>
                {personajeDetalle.hijos.map((hijos, index) => (
                  <Text style={styles.contenido} key={index}>
                    {hijos}
                  </Text>
                ))}
              </View>
            ) : (
              <View style={{padding: 5}}>
                <Text style={styles.titulo}> Hijos: </Text>
                <Text style={styles.contenido}> Sin hijos </Text>
              </View>
            )}
            <View style={{padding: 5}}>
              <Text style={styles.titulo}> Casa de Hogwarts: </Text>

              <Text style={styles.contenido}>
                {personajeDetalle.casaDeHogwarts}
              </Text>
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

export default DetailsChap;

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 180,
    backgroundColor: '#000',
  },
  cont: {
    flex: 1,
    paddingTop: 10,
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
