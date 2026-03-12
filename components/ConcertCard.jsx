// components/ConcertCard.jsx

import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ConcertCard = ({ image, dateRange, artistName, location }) => {
  return (
    <View style={{ marginTop: 10, gap: 4 }}>
      <Image
        source={image}
        style={{ width: 165, height: 190, borderRadius: 20, resizeMode: "cover" }}
      />
      <View style={{ flexDirection: "row", gap: 4 }}>
        <AntDesign name="calendar" size={15} color="#f00e0e" />
        <Text style={{ fontSize: 12, fontWeight: "bold", fontFamily: "Poppins-SemiBold", color: "#3c3c3e" }}>
          {dateRange}
        </Text>
      </View>
      <Text style={{ fontSize: 13, fontFamily: "Poppins-SemiBold", color: "#0b0b0b", marginTop: -3 }}>
        {artistName}
      </Text>
      <Text style={{ fontSize: 11, fontFamily: "Poppins-Regular", color: "#9b9393", marginTop: -3 }}>
        {location}
      </Text>
    </View>
  );
};

export default ConcertCard;