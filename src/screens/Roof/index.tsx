import { Text, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import Icon from "../../assets/home.svg";

export function Roof() {
  const navigation = useNavigation();
  const countries = ["Possui so telhado", "Apenas laje", "Apartamento", "1º Piso(Sobrado)"]

  function handleNext(){
    navigation.navigate('measure');
  }

 return (
  <View style={styles.container}>
  <View style={styles.header}>
    <Header/>
  </View>
  <View style={styles.content}>
    <Icon />
      <View style={styles.infoArea}>
        <Text style={styles.infoAreaTitle}>
          Tipo de Cobertura
        </Text>
        <Text style={styles.infoAreaSubTitle}>
          Como é a cobertura do local?
        </Text>
      </View>
  </View>
  <View style={styles.selectArea}>
  <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
  />
  </View>
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleNext}
       style={styles.button}
       >
          <Text style={styles.buttonText}>
            próximo
          </Text>
      </TouchableOpacity>
 </View>
  );
}