const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Login Page'),
    React.createElement('div', { className: 'field' },
    React.createElement('p', {className: 'control has-icons-left has-icons-right'},[
        React.createElement('input', {className: 'input', id: 'user', type: 'email', placeholder: 'EMAIL' }),
        React.createElement('span', {className:"icon is-small is-left" },[
            React.createElement('i', {className: "fas fa-check" }),
        ]),
    ]), 
    ),
  );

ReactDOM.render(
  list,
  document.getElementById('global')
);