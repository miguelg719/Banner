import React, {useRef, useEffect} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const images = [
    { id: 1, source: require('./assets/Sol-Ark.png') },
    { id: 2, source: require('./assets/Minew.png') },
    { id: 3, source: require('./assets/GoogleNest.png') },
    { id: 4, source: require('./assets/PhillipsHue.png') },
    { id: 5, source: require('./assets/Leviton.png') },
    { id: 6, source: require('./assets/Ring.png') },
    { id: 7, source: require('./assets/Lutron.png') },
];

const CarouselScreen = () => {
    const carouselRef = useRef(null);
    useEffect(() => {
        const carouselInterval = setInterval(() => {
            carouselRef.current.snapToNext();
        }, 3000); // Set the interval duration (in milliseconds) for auto-rotation

        return () => {
            clearInterval(carouselInterval); // Clear the interval on component unmount
        };
    }, []);

    const renderCarouselItem = ({ item }) => {
        return (
            <View style={styles.carouselItem}>
                <Image source={item.source} style={styles.image} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Supports</Text>
            <Carousel
                data={images}
                renderItem={renderCarouselItem}
                sliderWidth={2000}
                itemWidth={650}
                loop={true}
                ref={carouselRef}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 550,
        height: 550,
        resizeMode: 'contain',
    },
    text: {
        position: 'absolute',
        top: 150,
        fontSize: 50,
        fontFamily: 'Montserrat'
    }
});

export default CarouselScreen;