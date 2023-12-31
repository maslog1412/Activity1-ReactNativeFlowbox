import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bigBox}>
        <View style={styles.leftContent}>
          <View style={styles.circleIcon}>
            <Icon name="picture-o" size={40} color="#fff" style={styles.icon} />
          </View>
          <Text style={styles.nameText}>Cloyd Maslog</Text>
          <Text style={styles.infoText}>Information Technology 3</Text>
        </View>
      </View>
      <Text style={styles.subjectsText}>My Subjects</Text>
      <View style={styles.sub1}>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>ELEC 2</Text>
          <View style={[styles.subInfoContainer, { paddingTop: 15 }]}>
            <Text style={styles.subInfo}>Web Development/Web Enterprise</Text>
            <Text style={styles.unitsText}>Units: 3</Text>
          </View>
        </View>
      </View>
      <View style={styles.sub2}>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>ELEC 3</Text>
          <View style={[styles.subInfoContainer, { paddingTop: 15 }]}>
            <Text style={styles.subInfo}>Mobile Application</Text>
            <Text style={styles.unitsText}>Units: 3</Text>
          </View>
        </View>
      </View>
      <View style={styles.sub3}>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>IT 311</Text>
          <View style={[styles.subInfoContainer, { paddingTop: 15 }]}>
            <Text style={styles.subInfo}>Software Engineering</Text>
            <Text style={styles.unitsText}>Units: 3</Text>
          </View>
        </View>
      </View>
      <View style={styles.sub4}>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>IT 312</Text>
          <View style={[styles.subInfoContainer, { paddingTop: 15 }]}>
            <Text style={styles.subInfo}>Information Assurance and Security 2</Text>
            <Text style={styles.unitsText}>Units: 3</Text>
          </View>
        </View>
      </View>
      <View style={styles.sub5}>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>IT 313</Text>
          <View style={[styles.subInfoContainer, { paddingTop: 15 }]}>
            <Text style={styles.subInfo}>Quantitative Methods</Text>
            <Text style={styles.unitsText}>Units: 3</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 45,
    paddingLeft: 15,
    paddingRight: 15,
  },
  bigBox: {
    width: '100%',
    height: 200,
    backgroundColor: '#003080',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 15,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  circleIcon: {
    width: 90,
    height: 90,
    borderRadius: 150,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  nameText: {
    color: '#fff',
    fontSize: 24,
  },
  infoText: {
    color: '#fff',
    fontSize: 20,
  },
  subjectsText: {
    color: 'black',
    fontSize: 20,
    paddingRight: 245,
    paddingBottom: 10,
  },
  sub1: {
    width: '100%',
    height: 66.67,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  sub2: {
    width: '100%',
    height: 66.67,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  sub3: {
    width: '100%',
    height: 66.67,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  sub4: {
    width: '100%',
    height: 66.67,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  sub5: {
    width: '100%',
    height: 66.67,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  subTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 18,
  },
  subInfoContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  subInfo: {
    color: 'black',
    fontSize: 15,
  },
  unitsText: {
    color: 'black',
    fontSize: 15,
  },
});
