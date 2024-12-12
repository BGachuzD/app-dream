import dayjs from 'dayjs';
import * as React from 'react';
import { View } from 'react-native-animatable';
import { Modal as PaperModal, Text, Button, Portal } from 'react-native-paper';

const CustomModal = (props) => {
  const { item, visible, hideModal } = props;

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 30,  // Eliminar margen lateral
  };

  return (
    <Portal>
      <PaperModal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={{
          //Agregar fondo gris con opacidad
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          flex: 1,
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <View>
          {item && (
            <>
              <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ fontSize: 16, marginBottom: 10 }}>{item.description}</Text>
              <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}>Observaciones:</Text>
              <Text style={{ fontSize: 16, marginBottom: 20 }}>{item.obs}</Text>
              <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}>Fecha:</Text>
              <Text style={{ fontSize: 16, marginBottom: 20 }}>{dayjs(item.date).format('DD [de] MMMM [de] YYYY [a las] HH:mm')}</Text>
            </>
          )}
          <Button mode="contained" onPress={hideModal}>
            Cerrar
          </Button>
        </View>
      </PaperModal>
    </Portal>
  );
};

export default CustomModal;
