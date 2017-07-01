var todoList = {
  // Initial loading of Todo Items so I don't have to type them in manually
  todos: [
    {completed: false, todoText: "Write out my goals"},
    {completed: true, todoText: "start programming"}
  ],

  displayTodos: function() {
    var loopTodos = function() {
      for (var i = 0; i < todoList.todos.length; i++){
        if (todoList.todos[i].completed === true) {
          var checkMark = "(x) ";
        } else {
          var checkMark = "( ) ";
        }
        console.log(checkMark + todoList.todos[i].todoText );
        }
    }

    // Check to see if Todos List is empty. Print a message if it is.
    if (todoList.todos.length === 0) {
      console.log("Your Todos List is empty. Add some todos!")
    } else {
      console.log("My Todos: ");
      loopTodos();
    }

  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos(); // Display aftr adding a todo
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var toggle = this.todos[position];
    toggle.completed = !toggle.completed;
    this.displayTodos();
  }
}



/*  Commented out the intro exercise

var testArray = ["item 1", "item 2", "item 3"];

for (var i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}
*/
