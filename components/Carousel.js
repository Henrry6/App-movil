import React, { useState, useEffect } from 'react';
import { StatusBar, Image, Animated, View, Dimensions, StyleSheet, Button } from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = require('../assets/movies.json')
const data1 = [
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-despertar-de-la-fuerza-1575448990.jpg?crop=1xw:1xh;center,top&resize=480:*',
  'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'];

  const imageW = width * 0.7;
  const imageH = imageW * 1.54;

  function getMovie(data) {
    let img = []
    data.map(x => {
      img.push(x.image)
    })
    return img
  }
  
export default Courosel = ({ navigation }) => {
  const [mov, setMovie] = useState(() => getMovie(data))
  // const [renderRow, setRender] = useState('')

  function renderRow (item) {
    console.log(item)
  }

  const getDetail = (detalles) => {

    console.log(detalles)
    // const result = data.find((movie) => movie.image === detalles)
    // console.log(result)
    // navigation.navigate('Buscar peliculas', result)

  }
  const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar hidden />
            <View
            style={
              StyleSheet.absoluteFillObject
            }
            >
              {mov.map((image, index) => {
                const inputRange = [
                  (index -1) * width,
                  index * width,
                  (index + 1) * width
                ]
                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [0,1,0]
                })
                return(
                  <Animated.Image 
                    key={`image-${index}`}
                    source={{uri: image}}
                    style={[
                      StyleSheet.absoluteFillObject,
                      {
                        opacity
                      }
                    ]}
                    blurRadius={50}
                  />
                )
              })}
            </View>
            <Animated.FlatList data={mov}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true}
            )}
              keyExtractor={(index) => index.toString()}
              // initialScrollIndex={3}
              // getItemLayout={getItemLayout}
              horizontal
              pagingEnabled
              renderItem={({item}) => {
                return (<><View style={{width,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOpacity: .5,
                shadowOffset: {
                  width: 0,
                  height: 0
                },
                shadowRadius:20
                }}
                >
                  <Image source={{uri: item}} style={{
                    width: imageW,
                    height: imageH,
                    resizeMode: 'cover',
                    borderRadius: 16
                  }}
                  />
                  <Button title="Ver detalles" onPress={() => 
                  navigation.navigate('Buscar peliculas', {img: item, data, show: true })}/>
                </View>
                </>)
              }}
              />
        </View>
    );
};