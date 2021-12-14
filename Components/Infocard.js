import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object,
};

const imageInfo = [
  'https://static1.abc.es/Media/201412/24/harry-potter-rowling--644x662.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg',
  'https://static.wikia.nocookie.net/warner-bros-entertainment/images/6/6e/VoldemortHeadshot_DHP1.png/revision/latest?cb=20180126164438',
  'https://static.wikia.nocookie.net/esharrypotter/images/8/84/Varita_de_Harry_Potter.jpg/revision/latest/scale-to-width-down/350?cb=20190623045649',
  'https://static.wikia.nocookie.net/esharrypotter/images/5/5a/LordVoldemortWandNN8403.jpg/revision/latest/scale-to-width-down/350?cb=20190707002045',
  'https://static.wikia.nocookie.net/harrypotterfanon/images/7/71/Tom_Marvolo_Riddle_III.jpg/revision/latest?cb=20160331030933',
  'https://magiayhechiceria.com/wp-content/uploads/2020/10/escudo-de-hogwarts-461x500.jpg',
  'https://i1.wp.com/bloghogwarts.com/wp-content/uploads/2008/05/varitas.jpg'
];
class Infocard extends React.PureComponent {
  render() {
    const {navigation, item, screen} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate(screen, {Id: item.id})}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: imageInfo[item.id - 1]}}
        />
        <View>
          <Text style={styles.bookName}>{item.tipo}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Infocard.propTypes = propTypes;
export default Infocard;

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
