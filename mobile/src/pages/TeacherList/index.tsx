import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponivéis" />
    </View>
  );
}
export default TeacherList;