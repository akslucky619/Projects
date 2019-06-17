{/* <div class="field">
<p class="control has-icons-left has-icons-right">
  <input class="input" id="user" type="email" placeholder="Email">
  <span class="icon is-small is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fas fa-check"></i>
  </span>
</p>
</div>
<div class="field">
<p class="control has-icons-left">
  <input class="input" id="pass" type="password" placeholder="Password">
  <span class="icon is-small is-left">
    <i class="fas fa-lock"></i>
  </span>
</p>
</div>
<div class="field">
<p class="control">
  <button id="button" class="button is-success">
    Login
  </button>
</p>
</div>
</div> */}


const list = 
React.createElement('div', {},
React.createElement('h1', {}, 'Login Page'),
React.createElement('div', { className: 'field' },
React.createElement('p', {className: 'control has-icons-left has-icons-right'},[
    React.createElement('input', {className: 'input', id: 'user', type: 'email', placeholder: 'EMAIL' }),
    React.createElement('span', {className:"icon is-small is-left" },[
        React.createElement('i', {className: "fas fa-check" })
    ]),
]), 
),
),
React.createElement('div', { className: 'field' },
);

ReactDOM.render(
    list,
    document.getElementById('global')
);