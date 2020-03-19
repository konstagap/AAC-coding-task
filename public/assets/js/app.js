window.onload = function() {
  // Getting reference to DOM elements by id
  const maleButton = document.getElementById('male');
  const femaleButton = document.getElementById('female');
  const usersSection = document.getElementById('users');

  // Listening for clicks
  maleButton.addEventListener('click', () => {
    getUsers('male');
  });
  femaleButton.addEventListener('click', () => {
    getUsers('female');
  });
  usersSection.addEventListener('click', e => {
    if (e.target.dataset.value) {
      alert(`${e.target.dataset.value} says Hi!`);
    }
  });

  // Describing function
  const getUsers = async gender => {
    //Removing all children nodes before rendering new
    usersSection.innerHTML = '';
    //Making API call to random user to get data
    try {
      const data = await fetch(
        `https://randomuser.me/api/?results=9&gender=${gender}&inc=picture,name,email`
      );
      let { results } = await data.json();
      // creating dom elements to render
      results.forEach(({ name, picture, email }) => {
        //User card
        const userCard = document.createElement('div');
        userCard.setAttribute('class', 'user__card');
        userCard.setAttribute('data-value', name.first);
        // User picture
        const img = document.createElement('img');
        img.setAttribute('class', 'thumbnail');
        img.setAttribute('src', picture.medium);
        // User name
        const fullname = document.createElement('h3');
        fullname.innerText = `${name.first} ${name.last}`;
        //User Email
        const userEmail = document.createElement('p');
        userEmail.innerText = email;
        //Appending elements to card
        userCard.appendChild(img);
        userCard.appendChild(fullname);
        userCard.appendChild(userEmail);
        //Appending card to DOM
        usersSection.appendChild(userCard);
      });
    } catch (err) {
      //if error show err message
      console.log('err', err);
      const message = document.createElement('h1');
      message.innerText = 'oops, something is broken';
      usersSection.appendChild(message);
    }
  };
};
