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
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    var toggleMessage = "";

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      // make all todos completed: false
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
        toggleMessage = "Unchecked all todos. Start over!"
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
      toggleMessage = "Checked everything. DONE!"
    }
    this.displayTodos();
    console.log(toggleMessage);
  }
}

var handler = {
  displayTodos: function() {
    todoList.displayTodos();
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoNumberInput = document.getElementById('changeTodoNumberInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoNumberInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoNumberInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(item) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletionStatus = '';

      if (item.completed === true) {
        todoTextWithCompletionStatus = '(x) ' + item.todoText;
      } else {
        todoTextWithCompletionStatus = '( ) ' + item.todoText;
      }

      todoLi.textContent = todoTextWithCompletionStatus;
      todosUl.appendChild(todoLi);
    })

  }
};

// Write out the stored todo list items
view.displayTodos();

// tools
