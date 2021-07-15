import React from "react";

const Card = () => {
  const [text, onChangeText] = React.useState();

  return (
    <View style={{marginTop: 40, justifyContent: 'center' }}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Buscar"
          value={text}
        />
      </SafeAreaView>
    </View>
  );
};

export default Card
