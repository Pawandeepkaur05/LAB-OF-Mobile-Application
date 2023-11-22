import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ToDoList = () => {
  // Dummy data for demonstration
  const todoData = [
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <FlatList
        data={todoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ToDoList;
