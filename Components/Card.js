import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {navigation, item, screen} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate(screen, {Id: item.id})}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: item.imagen}}
        />
        <View>
          <Text style={styles.titles}>{'Name:'}</Text>
          <Text style={styles.PersonajeName}>{item.personaje}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = propTypes;

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
    margin: 10,
  },
  image: {
    height: 120,
    width: 100,
  },
  PersonajeName: {
    width: 200,
    textAlign: 'center',

    marginBottom: 5,
    marginLeft: 20,
    color: '#fff',
    fontSize: 20,
  },
  titles: {
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    marginLeft: 20,
  },
});
