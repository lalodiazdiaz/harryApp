import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object,
};

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

class Books extends React.PureComponent {
  render() {
    const {navigation, item, screen} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate(screen, {Id: item.id})}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: portadas[item.id - 1]}}
        />
        <View>
          <Text style={styles.bookName}>{item.libro}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Books.propTypes = propTypes;
export default Books;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
    margin: 10,
  },
  bookName: {
    width: 200,
    textAlign: 'center',

    marginBottom: 5,
    marginLeft: 20,
    color: '#fff',
    fontSize: 18,
  },
  titles: {
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    marginLeft: 20,
  },
  image: {
    height: 120,
    width: 100,
  },
});
