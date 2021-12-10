new Vue({
  el: "#app",

  data() {
    return {
      state: "list" /* list, register */,
      isLoading: true,
      showAllTasks: false,
      todoList: [],
      newTask: { title: null, description: null, priority: null },
    };
  },

  computed: {
    filteredTasks() {
      return this.showAllTasks
        ? this.todoList
        : this.todoList.filter((x) => !x.completed);
    },
  },

  beforeMount() {
    this.resetNewTaskData();
    this.loadTasks();
  },

  methods: {
    resetNewTaskData() {
      this.newTask = { title: null, description: null, priority: 1 };
    },
    hideLoading() {
      document.title = "ToDo App";
      this.isLoading = false;
    },
    showLoading() {
      document.title = "Loading..., Please wait";
      this.isLoading = true;
    },

    setStateList() {
      this.state = "list";
    },
    setStateRegister() {
      this.resetNewTaskData();
      this.state = "register";
    },

    postNewTask() {
      this.showLoading();

      axios
        .post("/api/v1/tasks", this.newTask)
        .then((res) => {
          this.todoList.push(res.data);
          this.setStateList();
        })
        .catch((err) => alert("Insert data failed"))
        .finally(() => this.hideLoading());
    },

    loadTasks() {
      this.showLoading();

      axios
        .get("/api/v1/tasks")
        .then((res) => (this.todoList = res.data))
        .catch(() => alert("Load data failed"))
        .finally(() => this.hideLoading());
    },
  },
});
