import React from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DrInfoCard from './DrInfoCard';

export default function Speciality() {
  const {colors} = useSelector(state => state);

  /// Screen Dimensions
  const {width, height} = Dimensions.get('screen');
  const ITEM_LENGTH1 = width * 0.3; // Item is a square. Therefore, its height and width are of the same length.
  const HEIGHT1 = height * 0.04;

  const DATA = [
    {id: 0, text: 'Availabilty'},
    {id: 1, text: 'In Hospital'},
    {id: 2, text: 'Online Booking'},
    {id: 3, text: 'Consultation'},
  ];

  const FlatListData = [{id : 0},{id : 1},{id : 2}]

  return (
    <View style={[styles?.container,{backgroundColor : colors?.accent?.shadowColor}]}>
      <View
        style={[
          styles?.backDropSection,
          {backgroundColor: colors?.primary?.blue},
        ]}>
        <View style={styles?.leftSection}>
          <AntDesignIcon
            name="arrowleft"
            size={25}
            color={colors?.accent?.white}
          />
          <Text style={[styles?.headingText, {color: colors?.accent?.white}]}>
            Ophthalmologist
          </Text>
        </View>
        <Text
          style={{
            color: colors?.accent?.white,
            fontSize: 15,
            marginRight: -40,
          }}>
          Country
        </Text>
        <FontAwesomeIcon
          name="chevron-down"
          size={10}
          color={colors?.accent?.white}
          style={{marginRight: 6}}
        />
      </View>
      <View style={{top : -15,}}>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <View style={[styles?.textPills,{backgroundColor : colors?.accent?.white,width : ITEM_LENGTH1,height : HEIGHT1}]}>
                <Text style={[styles?.text,{color : colors?.accent?.dark}]}>
                    {item.text}
                </Text>
            </View>
          }}
        />
      </View>
          <View style={{backgroundColor : colors?.accent?.shadowColor,flex : 1}}>
            {/* <DrInfoCard /> */}

            <FlatList 
            data={FlatListData}
            keyExtractor={item=>item.id}
            renderItem={({item})=>{
              return <DrInfoCard />
              
            }}
            />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backDropSection: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '7%',
    paddingBottom: '15%',
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPills : {
    borderRadius : 20,
    marginLeft : 15,
    justifyContent : 'center',
    alignItems : 'center',
  },
  text : {
    // fontSize : 15,
    // fontWeight : 'bold'
  },
});