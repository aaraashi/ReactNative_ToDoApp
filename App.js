// import stuff
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

// create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    // splice(position, num of items to delete) method
    arr.splice(pos, 1);
    this.setState({todo: arr});
  }
  renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
        <Text 
          style={styles.todo}
          onPress={() => {this.deleteTodo(t)}}
        >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.header}>To Do App</Text>
        <TextInput style={styles.inputSytle}
          // change original state to new text 
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <View style={{marginTop: 50}} />
        <Button 
        shadowOpacity="0"
        color="#4CAF50"
        title="Add Todo"
        onPress={this.addTodo}
        />
        <View style={{marginTop: 100}} />
        {this.renderTodos()}
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#0097A7",
    flex: 1
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  inputSytle:{
    marginTop: 20,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    width: "95%"
  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  todo:{
    fontSize: 24,
    color: 'white'
  }
});

export default App;

