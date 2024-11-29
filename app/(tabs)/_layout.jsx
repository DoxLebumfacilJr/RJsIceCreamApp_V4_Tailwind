import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Text, View, Dimensions } from "react-native";
import { icons } from '../../constants';

// For the Width
const width = Dimensions.get('screen').width;

const TabIcon = ({ icon, color, name, focused }) => {
  // Animation value for sliding effect
  const translateYAnim = useRef(new Animated.Value(10)).current; // Start off-screen

  useEffect(() => {
    // Start animation when focused
    if (focused) {
      Animated.timing(translateYAnim, {
        toValue: -32, // Slide to final position
        duration: 300, // Animation duration
        useNativeDriver: true,
      }).start();
    } else {
      // Reset position when not focused
      translateYAnim.setValue(10);
    }
  }, [focused]);

  return (
    <View style={{ alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
    }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color, width: 24, height: 24 }}
      />
      {focused && (
        <Animated.View
          style={{
            transform: [{ translateY: translateYAnim }], // Animate translateY instead of bottom
            position: 'absolute',
            bottom: 15, // Starting position from the bottom
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: '#E55133',
          }}
        />
      )}
      <Text style={{ color, fontSize: 10, marginTop: 4 }}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {

            backgroundColor: "rgba(37,40,48,0.8)",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 80,
            width: width - 20,
            borderRadius: 40,

            alignItems: 'center',
            justifyContent: 'center',
            alignContent: "center",
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 18,
            paddingTop: 7,
            position: 'relative'
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.orders}
              color={color}
              name="Orders"
              focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: "Map",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.map}
              color={color}
              name="Map"
              focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;