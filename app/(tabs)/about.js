import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, FlatList, Platform } from "react-native";
import { useState, useMemo, useRef, useEffect } from "react";
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { dayjs } from "../../libs/dayjs";
import { Formik } from "formik";
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actividadesCategories } from "../../utils/actividades";
import CustomModal from "../../components/Modal";
import { FAB, List } from 'react-native-paper';
import { styles } from "../../styles/main";
import { Modal as PaperModal, Portal, PaperProvider } from 'react-native-paper';


const initialValues = {
  obs: '',
  id: null,
  tittle: '',
  description: '',
  date: '',
};

export default function Page() {
  const bottomSheetModalRef = useRef(null);
  const [actividades, setActividades] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {
    getAsyncStorage();
  }, []);

  const dateNowFormatted = useMemo(() => {
    const dateNow = new Date();
    return dayjs(dateNow).format("dddd D");
  }, []);

  const handleOpenBottomSheet = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  };

  const saveAsyncStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('actividades', jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddActivity = (values) => {
    const newActividad = values;
    setActividades([...actividades, newActividad]);
    saveAsyncStorage([...actividades, newActividad]);
  };

  const getAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('actividades');
      //Agrupar actividades por dia

      const actividadesData = value ? JSON.parse(value) : [];

      console.log('Actividades', actividadesData);

      const actividadesGrouped = actividadesData.reduce((acc, actividad) => {
        const date = dayjs(actividad.date).format('YYYY-MM-DD');
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(actividad);
        return acc;
      }, {});

      console.log(actividadesGrouped);

      if (value !== null) {
        setActividades(actividadesGrouped);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <List.Section title="Actividades">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="calendar" />}>
          <List.Item title={dayjs(item.date).format("DD/MM/YYYY")} />
        </List.Accordion>
      </List.Section>
    </View>
  );


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Text style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
            Histórico
          </Text>
          <Text style={styles.tittleText}>Actividades de la semana</Text>
          <FlatList
            data={actividades}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={["40%", "80%"]}
          >
            <BottomSheetView
              style={{
                backgroundColor: "#fff",
                padding: 16,
                height: '100%',
                display: 'flex',
              }}
            >
              <Text
                style={styles.title}>
                Actividad
              </Text>
              <Formik
                initialValues={initialValues}
                onSubmit={values => {
                  const actividadCategoria = actividadesCategories.find((actividad) => actividad.id === parseInt(values.id));
                  const data = {
                    id: actividades.length + 1,
                    title: actividadCategoria.title,
                    description: actividadCategoria.description,
                    obs: values.obs,
                    date: dayjs().format(),
                  }
                  handleAddActivity(data);
                  bottomSheetModalRef.current.dismiss();
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
                  <View>
                    <RNPickerSelect
                      placeholder={placeholder}
                      onValueChange={(value) => setFieldValue('id', value)}
                      items={actividadesCategories?.map((actividad) => ({
                        label: actividad.title,
                        value: actividad.id,
                      }))}

                      style={Platform.OS === 'ios' ? styles.inputIOS : styles.inputAndroid}
                      textInputProps={{
                        style: {
                          height: 40,
                          marginVertical: 12,
                          borderWidth: 1,
                          padding: 10,
                        }
                      }}
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('obs')}
                      onBlur={handleBlur('obs')}
                      value={values.email}
                      placeholder="Observaciones"
                      inputMode="text"
                      blurOnSubmit={false}
                    />
                    <Pressable
                      style={styles.button}
                      onPress={handleSubmit}>
                      <Text>Guardar</Text>
                    </Pressable>
                  </View>
                )}
              </Formik>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView> // Cierre de GestureHandlerRootView
  );
}

