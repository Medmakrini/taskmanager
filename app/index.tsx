import React, { useContext, useState } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView,Linking } from 'react-native';
import { Button, Card, Avatar, IconButton, Title, Paragraph, Text, Divider } from 'react-native-paper';
import { TaskContext } from '../context/Context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import colors from '../constants/styles/colors';
import * as Animatable from 'react-native-animatable';
import { Task } from './types';

type TaskListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TaskList'>;

const TaskListScreen: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const navigation = useNavigation<TaskListScreenNavigationProp>();

  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  if (!taskContext) {
    throw new Error('TaskContext must be used within a TaskProvider');
  }

  const { tasks, removeTask, toggleComplete } = taskContext;

  const incompleteTaskCount = tasks.filter(task => !task.completed).length;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; // 'all'
  });

  const handleDeleteTask = (taskId: string) => {
    // Find the task to be removed
    const taskToRemove = tasks.find(task => task.id === taskId);
    if (taskToRemove) {
      removeTask(taskId);
    }
  };

  const handleToggleComplete = (taskId: string) => {
    if (taskId === 'default-task') {
      Linking.openURL('https://www.linkedin.com/in/medmakrini/');
    }
    toggleComplete(taskId);
  };
  const renderItem = ({ item }: { item: Task }) => (
    <Animatable.View
      animation="fadeInUp"
      duration={500}
      useNativeDriver
    >
      <Card style={styles.card} data-id={item.id}>
        <Card.Content>
          <Title style={[styles.title, item.completed && styles.completed]}>
            {item.title}
          </Title>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => handleToggleComplete(item.id)}
            color={colors.primary}
            mode="contained"
          >
            {item.completed ? 'Unmark' : 'Complete'}
          </Button>
          <IconButton
            icon="delete"
            iconColor={colors.error}
            onPress={() => handleDeleteTask(item.id)}
          />
        </Card.Actions>
      </Card>
    </Animatable.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={styles.innerContainer}
        useNativeDriver
      >
        <Avatar.Image size={54} style={{ margin: 10 }} source={require('../assets/images/pro.webp')} />
        <Text style={{ margin: 10, fontSize: 16, fontWeight: '500', color: 'gray' }}>Hey, Mr Omar!</Text>
        <Text style={{ marginHorizontal: 8, fontSize: 30, fontWeight: '600', color: '#191858' }}>You've got {incompleteTaskCount}</Text>
        <Text style={{ marginHorizontal: 10, marginBottom: 15, fontSize: 30, fontWeight: '700', color: '#191858' }}>task today</Text>
        <Text style={{ marginHorizontal: 10, marginBottom: 10, fontSize: 30, fontWeight: '700', color: '#191858' }}>My Task</Text>
        <View style={styles.filterContainer}>
          <Button
            mode={filter === 'all' ? 'contained' : 'text'}
            onPress={() => setFilter('all')}
            style={styles.filterButton}
          >
            All
          </Button>
          <Button
            mode={filter === 'completed' ? 'contained' : 'text'}
            onPress={() => setFilter('completed')}
            style={styles.filterButton}
          >
            Completed
          </Button>
          <Button
            mode={filter === 'incomplete' ? 'contained' : 'text'}
            onPress={() => setFilter('incomplete')}
            style={styles.filterButton}
          >
            Incomplete
          </Button>
        </View>
        <FlatList
          data={filteredTasks.sort((a, b) => (a.completed ? 1 : -1) - (b.completed ? 1 : -1))}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ListFooterComponent={() => <Divider style={styles.divider} />}
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('add-task')}
          style={styles.addButton}>
        <Text style={{ fontWeight: '800', color: 'white' }}>+ Add Task</Text>
        </Button>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  innerContainer: {
    flex: 1,
    margin:10
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    elevation: 3,
    margin:8
  },
  title: {
    color: colors.text,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: colors.text,
  },
  addButton: {
    marginBottom: 25,
    width:300,
    alignSelf:'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  divider: {
    backgroundColor: colors.border,
    height: 1,
  },
});

export default TaskListScreen;
