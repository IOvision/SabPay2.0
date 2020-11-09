import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors';
import {BodyText, HeaderText} from './../../atoms/Text';

const ListItem = ({
  materialIconName,
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.userContainer}>
          <HeaderText numberOfLines={1} style={styles.title}>
            {title}
          </HeaderText>
          {subtitle && (
            <BodyText numberOfLines={2} style={styles.listing}>
              {subtitle}
            </BodyText>
          )}
        </View>
        {materialIconName && (
          <Icon style={styles.materialIcon} name={materialIconName} size={24} />
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.silverGrey,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    alignSelf: 'center',
  },
  userContainer: {
    padding: 5,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    marginBottom: 7,
    fontWeight: '600',
  },
  listing: {
    color: colors.medium,
    fontWeight: '100',
  },
  materialIcon: {
    alignSelf: 'center',
    color: colors.medium,
  },
});

export default ListItem;

//Testing the List on Page 4
