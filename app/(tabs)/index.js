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
import { FAB } from 'react-native-paper';
import { styles } from "../../styles/main";
import { Modal as PaperModal, Portal, PaperProvider, TextInput as RNTextInput } from 'react-native-paper';
import { TouchableOpacity } from "react-native";


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
      console.log("Opening BottomSheet");  // Verificación
      bottomSheetModalRef.current.present();
    } else {
      console.log("bottomSheetModalRef is null");
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
      //Filtrar por fecha actual
      const actividadesFiltradas = JSON.parse(value).filter((actividad) => {
        return dayjs(actividad.date).format('YYYY-MM-DD') === dayjs(new Date()).format('YYYY-MM-DD');
      });
      if (value !== null) {
        setActividades(actividadesFiltradas);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={() => {
          setItem(item);
          showModal();
        }}
      >
        <Text style={styles.itemText}>{dayjs(item.date).format("LT")} - {item.title}</Text>
      </Pressable>
    </View>
  );

  const placeholder = {
    label: 'Selecciona una actividad',
    value: null,
    color: '#9EA0A4',
  };

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <PaperProvider>
          <Portal>
            <View style={styles.container}>
              <StatusBar style="light" />
              <CustomModal
                item={item}
                visible={visible}
                hideModal={hideModal}
                showModal={showModal}
              />
              <Text style={{
                color: '#fff',
                fontSize: 50,
                fontWeight: 'bold',
                marginVertical: 20,
              }}>
                {dateNowFormatted}
              </Text>
              <Text style={styles.tittleText}>Cosas que hice en el día:</Text>
              <FlatList
                data={actividades}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#ebd14f',
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 10,
                  marginBottom: 10,
                  width: 'auto',
                  alignSelf: 'center',
                }}
                onPress={() => {
                  handleOpenBottomSheet();
                }}
              >
                <Text style={{ color: "#000" }}>
                  Agregar actividad
                </Text>
              </TouchableOpacity>
              <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}  // Cambiar el índice inicial a 0
                snapPoints={["80%", "50%"]}  // Puntos de ajuste
              >
                <BottomSheetView
                  style={{
                    backgroundColor: "#fff",
                    padding: 16,
                    height: '100%',
                    display: 'flex',
                  }}
                >
                  <Text style={styles.title}>Actividad</Text>
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
                      bottomSheetModalRef.current.dismiss();  // Cierra el BottomSheet
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
                        <RNTextInput
                          style={styles.input}
                          onChangeText={handleChange('obs')}
                          onBlur={handleBlur('obs')}
                          value={values.obs}
                          placeholder="Observaciones"
                          inputMode="text"
                          blurOnSubmit={false}
                        />
                        <Pressable style={styles.button} onPress={handleSubmit}>
                          <Text>Guardar</Text>
                        </Pressable>
                      </View>
                    )}
                  </Formik>
                </BottomSheetView>
              </BottomSheetModal>
            </View>
          </Portal>
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

