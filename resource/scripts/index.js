new Vue({
  el: "#app",

  data() {
    return {
      todoList: [
        { id: 1, title: 'Drink milk', completed: false },
        { id: 2, title: 'Clean the room', completed: false },
        { id: 3, title: 'Take a shower', completed: false },
      ],
    };
  },
});
