new Vue({
  el: '#app',

  data() {
    return {
      rows: [],
      newRow: { title: null, publisher: null },
    };
  },

  beforeMount() {
    this.loadData();
  },

  methods: {
    loadData() {
      axios
        .get('/api/v1/books')
        .then((res) => (this.rows = res.data))
        .catch(() => alert('LOAD DATA FAILED!'));
    },
    deleteRow(row) {
      if (confirm('Are you sure to delete?')) {
        this.rows = this.rows.filter((x) => x !== row);
      }
    },
    addNewRow() {
      this.rows.push(this.newRow);
      this.newRow = { title: null, publisher: null };
    },
  },
});
