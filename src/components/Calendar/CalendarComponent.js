import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Modal from 'react-native-modal';

const API_URL = 'http://localhost:5000';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  today: "Hoy'",
};

LocaleConfig.defaultLocale = 'fr';

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState('');

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/events`);
      const eventsObj = {};
      response.data.forEach((event) => {
        if (!eventsObj[event.date]) {
          eventsObj[event.date] = { marked: true, events: [] };
        }
        eventsObj[event.date].events.push(event.event);
      });
      setEvents(eventsObj);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const saveEvent = async () => {
    if (!newEvent.trim()) return;

    try {
      await axios.post(`${API_URL}/events`, { date: selectedDate, event: newEvent });
      fetchEvents();
      setNewEvent('');
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Calendar
        // markedDates={events}
        onDayPress={handleDayPress}
        markedDates={{
          '2025-01-01': { selected: true, marked: true, selectedColor: 'blue' },
          '2025-01-02': { marked: true },
          '2025-01-03': { selected: true, marked: true, selectedColor: 'blue' }
        }}

      />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Add Event for {selectedDate}</Text>
          <TextInput
            style={styles.input}
            placeholder="Event details"
            value={newEvent}
            onChangeText={setNewEvent}
          />
          <View style={styles.buttons}>
            <Button title="Save" onPress={saveEvent} />
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  modal: { backgroundColor: 'white', padding: 20, borderRadius: 10 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between' },
});
