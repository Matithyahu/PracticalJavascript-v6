var todoList = {
  // Initial loading of Todo Items so I don't have to type them in manually
  todos: [
    {completed: false, todoText: "Write out my goals"},
    {completed: true, todoText: "start programming"}
  ],

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function(position) {
    var toggle = this.todos[position];
    toggle.completed = !toggle.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    this.todos.forEach( function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    })

    this.todos.forEach( function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    })

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
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
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

    // create a li element for each todo
    todoList.todos.forEach(function(item, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletionStatus = '';

      if (item.completed === true) {
        todoTextWithCompletionStatus = '(x) ' + item.todoText;
      } else {
        todoTextWithCompletionStatus = '( ) ' + item.todoText;
      }

      todoLi.id = position; // sets the id of the element to position in array
      todoLi.textContent = todoTextWithCompletionStatus;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this)
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        handler.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    })
  }

};

// Write out the stored todo list items
view.displayTodos();
view.setUpEventListeners();
