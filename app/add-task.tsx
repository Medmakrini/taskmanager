import React, { useState, useContext } from 'react';
import { View, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { TaskContext } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import colors from '../constants/styles/colors';
import * as Animatable from 'react-native-animatable';

type AddTaskScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'add-task'>;

const AddTaskScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const taskContext = useContext(TaskContext);
  const navigation = useNavigation<AddTaskScreenNavigationProp>();

  if (!taskContext) {
    throw new Error('TaskContext must be used within a TaskProvider');
  }

  const { addTask } = taskContext;

  const handleAddTask = () => {
    if (title.trim() === '' || description.trim() === '') {
        Alert.alert('Validation Error', 'Task Title and Description cannot be empty or only spaces.');
        return;
    }
    addTask(title, description);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add new task</Text>
      <View style={styles.container}>
        <Animatable.View animation="fadeInUp" duration={500}>
          <TextInput
            label="Task Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            mode="outlined"
            theme={{ colors: { primary: colors.primary } }}
          />
          <TextInput
            label="Task Description"
            value={description}
            onChangeText={setDescription}
            style={[styles.input]}
            numberOfLines={10}
            mode="outlined"
            theme={{ colors: { primary: colors.primary } }}
            multiline={true}
          />
          <Button
            mode="contained"
            onPress={handleAddTask}
            style={styles.button}
          >
            Add Task
          </Button>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  header: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
    fontWeight: '700',
    color: '#191858',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    width: 300,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default AddTaskScreen;
