import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object,
};

const varitas = [
  'https://static.wikia.nocookie.net/esharrypotter/images/5/5a/LordVoldemortWandNN8403.jpg/revision/latest/scale-to-width-down/350?cb=20190707002045',
  'https://static.wikia.nocookie.net/esharrypotter/images/8/84/Varita_de_Harry_Potter.jpg/revision/latest/scale-to-width-down/350?cb=20190623045649',
  'https://static.wikia.nocookie.net/esharrypotter/images/b/b5/Varita_de_Albus_Dumbledore_original.jpg/revision/latest/scale-to-width-down/350?cb=20210927045435',
  'https://static.wikia.nocookie.net/esharrypotter/images/3/39/DracoMalfoyWandNN8409.jpg/revision/latest/scale-to-width-down/350?cb=20190620185347',
  'https://static.wikia.nocookie.net/esharrypotter/images/c/c6/HermioneGrangerWandNN8411.jpg/revision/latest/scale-to-width-down/350?cb=20190624010127',
  'https://static.wikia.nocookie.net/esharrypotter/images/5/59/Lucius_Malfoy_first_wand.jpg/revision/latest/scale-to-width-down/350?cb=20190627135446',
  'https://static.wikia.nocookie.net/esharrypotter/images/8/82/Varita_de_Alastor_Moody.jpg/revision/latest/scale-to-width-down/350?cb=20211008184902',
  'https://static.wikia.nocookie.net/esharrypotter/images/1/12/FleurDelacourWandNN8246.jpg/revision/latest/scale-to-width-down/350?cb=20190624011737',
  'https://static.wikia.nocookie.net/esharrypotter/images/f/fb/ProfHoraceSlughornWandNN8294.jpg/revision/latest/scale-to-width-down/350?cb=20150415195832',
  'https://static.wikia.nocookie.net/esharrypotter/images/8/8c/NymphadoraTonksWandNN8250.jpg/revision/latest/scale-to-width-down/350?cb=20150419101838',
];

class Spell extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: varitas[Math.floor(Math.random() * varitas.length)],
          }}
        />
        <View>
          <Text style={styles.titles}>{'Spell:'}</Text>
          <Text style={styles.hechizoName}>{item.hechizo}</Text>
          <Text style={styles.titles}>{'Efecto:'}</Text>
          <Text style={styles.hechizoName}>{item.uso}</Text>
        </View>
      </View>
    );
  }
}
Spell.propTypes = propTypes;
export default Spell;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
    margin: 10,
  },
  hechizoName: {
    width: 200,
    textAlign: 'center',

    marginBottom: 5,
    marginLeft: 20,
    color: '#fff',
    fontSize: 16,
  },
  titles: {
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
    marginLeft: 20,
  },
  image: {
    height: 120,
    width: 100,
  },
});
