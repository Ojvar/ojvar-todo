new Vue({
  el: "#app",

  data() {
    return {
      isLoading: true,
      showAllTasks: false,
      todoList: [],
      newTask: { title: null, description: null, priority: 1 },
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
    this.loadData();
  },

  methods: {
    postNewTask() {
      this.isLoading = true;

      axios
        .post("/api/v1/tasks", this.newTask)
        .then((res) => {
          this.todoList = res.data;
          this.newTask = { title: null, description: null, priority: 1 };
        })
        .catch((err) => alert("Insert data failed"))
        .finally(() => (this.isLoading = false));
    },

    loadData() {
      this.isLoading = true;

      axios
        .get("/api/v1/tasks")
        .then((res) => (this.todoList = res.data))
        .catch(() => alert("Load data failed"))
        .finally(() => (this.isLoading = false));
    },
  },
});
