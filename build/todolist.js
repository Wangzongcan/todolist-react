var List = React.createClass({
  render: function() {
    var list = this.props.items.map(function(item, index) {
      return (
        <li>
          { item }
        </li>
      );
    });

    return (
      <ul>
        { list }
      </ul>
    );
  }
});

var Input = React.createClass({
  handleKeyDown: function(e) {
    this.props.addItem(e);
  },

  render: function() {
    return (
      <div>
        <input type="text" id="input" onKeyDown={ this.handleKeyDown } />
      </div>
    );
  }
});

var ToDoList = React.createClass({
  getInitialState: function() {
    return { items: [] };
  },

  addItem: function(e) {
    if (e.keyCode === 13) {
      var input = e.target;
      var items = this.state.items;
      this.setState({ items: items.concat(input.value) });
      input.value = '';
    }
  },

  render: function() {
    return (
      <div>
        Hello React!
        <Input addItem={ this.addItem } />
        <List items={ this.state.items } />
      </div>
    );
  }
});

ReactDOM.render(
  <ToDoList />,
  document.getElementById('todolist')
);
