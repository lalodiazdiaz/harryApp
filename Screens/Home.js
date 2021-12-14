import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  getHechizos,
  getPersonajes,
  getLibros,
  getInfo,
} from '../services/Servicios';

const Home = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [personajes, setPersonajes] = useState();
  const [hechizos, setHechizos] = useState();
  const [libros, setLibros] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    getPersonajes().then(per => {
      setPersonajes(per);
      setLoaded(true);
    });
    getHechizos().then(spell => {
      setHechizos(spell);
      setLoaded(true);
    });

    getLibros().then(libro => {
      setLibros(libro);
      setLoaded(true);
    });
    getInfo().then(info => {
      setInfo(info);
      setLoaded(true);
    });
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <View style={styles.cont}>
          <ScrollView style={{marginBottom: 80}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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

              {/* Api personajes */}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate('Lista', {
                    data: personajes,
                    screen: 'DetailsChap',
                    lista: 'personajes',
                  });
                }}>
                <View style={styles.contBtn}>
                  <Image
                    style={styles.imgbtn}
                    source={{
                      uri: 'https://static.wixstatic.com/media/b0d4df_97398b41b3cf4e8b84d82957a7aea9a2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01/b0d4df_97398b41b3cf4e8b84d82957a7aea9a2.webp',
                    }}
                  />
                  <Text style={styles.txt}>
                    Departamento de registro magico{' '}
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Api hechizos */}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate('Lista', {
                    data: hechizos,
                    lista: 'speall',
                  });
                }}>
                <View style={styles.contBtn}>
                  <Image
                    style={styles.imgbtn}
                    source={{
                      uri: 'https://m.media-amazon.com/images/I/41AxIv4TTnL._AC_.jpg',
                    }}
                  />
                  <Text style={styles.txt}>Departamento de hechizos </Text>
                </View>
              </TouchableOpacity>

              {/* Api Libros */}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate('Lista', {
                    data: libros,
                    screen: 'Books',
                    lista: 'libros',
                  });
                }}>
                <View style={styles.contBtn}>
                  <Image
                    style={styles.imgbtn}
                    source={{
                      uri: 'https://static.wikia.nocookie.net/harrypotter/images/f/f3/Logo_do_Minist%C3%A9rio_da_Magia.png/revision/latest/smart/width/250/height/250?cb=20161012135137&path-prefix=pt-br',
                    }}
                  />
                  <Text style={styles.txt}>Departamento del mundo magico</Text>
                </View>
              </TouchableOpacity>

              {/* Api info */}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate('Lista', {
                    data: info,
                    screen: 'Info',
                    lista: 'info',
                  });
                }}>
                <View style={styles.contBtn}>
                  <Image
                    style={styles.imgbtn}
                    source={{
                      uri: 'https://cdn.pixabay.com/photo/2017/03/17/05/20/info-2150938_960_720.png',
                    }}
                  />
                  <Text style={styles.txt}>Información</Text>
                </View>
              </TouchableOpacity>
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
          <Image
            resizeMode="contain"
            style={styles.logoLoaded}
            source={{
              uri: 'https://static.wikia.nocookie.net/harrypotter/images/4/46/Ministry_of_magic_logo.png/revision/latest/scale-to-width-down/1000?cb=20161123235622',
            }}
          />

          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6d7bd',
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  btn: {
    backgroundColor: '#000',
    width: Dimensions.get('screen').width / 1.1,
    height: Dimensions.get('screen').height / 7,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 3,
  },

  logo: {
    height: 150,
    width: 150,
    marginTop: 5,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: -15,
    color: '#fff',
    width: 200,
  },
  imgbtn: {
    height: 80,
    width: 80,
  },
  contBtn: {
    flexDirection: 'row-reverse',
  },
  logoLoaded: {
    height: 250,
    width: 250,
  },
});
