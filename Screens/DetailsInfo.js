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
import {getInfoDetail} from '../services/Servicios';

const imageInfo = [
  'https://static1.abc.es/Media/201412/24/harry-potter-rowling--644x662.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg',
  'https://static.wikia.nocookie.net/warner-bros-entertainment/images/6/6e/VoldemortHeadshot_DHP1.png/revision/latest?cb=20180126164438',
  'https://static.wikia.nocookie.net/esharrypotter/images/8/84/Varita_de_Harry_Potter.jpg/revision/latest/scale-to-width-down/350?cb=20190623045649',
  'https://static.wikia.nocookie.net/esharrypotter/images/5/5a/LordVoldemortWandNN8403.jpg/revision/latest/scale-to-width-down/350?cb=20190707002045',
  'https://static.wikia.nocookie.net/harrypotterfanon/images/7/71/Tom_Marvolo_Riddle_III.jpg/revision/latest?cb=20160331030933',
  'https://magiayhechiceria.com/wp-content/uploads/2020/10/escudo-de-hogwarts-461x500.jpg',
  'https://i1.wp.com/bloghogwarts.com/wp-content/uploads/2008/05/varitas.jpg',
];

const DetailsInfo = ({navigation, route}) => {
  const id = route.params.Id;
  const [infoDetail, setInfoDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getInfoDetail(id).then(infoD => {
      setInfoDetail(infoD);
      setLoaded(true);
      console.log(infoD);
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
            <View style={styles.cont}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{uri: imageInfo[infoDetail.id - 1]}}
              />
              <Text style={styles.titulo}>{infoDetail.tipo}</Text>
              <Text style={styles.contenido}>{infoDetail.contenido}</Text>
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

export default DetailsInfo;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 250,
    backgroundColor: '#000',
    marginBottom: 20,
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
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  contenido: {
    color: '#000',
    fontSize: 20,
  },
});
