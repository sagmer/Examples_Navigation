import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const HeaderButtonCustom = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={20}
      color="red"
    />
  );
};

export default HeaderButtonCustom;