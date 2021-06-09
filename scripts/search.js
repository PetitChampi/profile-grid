let searchbar = document.getElementById('searchbar')
let names = document.getElementsByClassName('profile-grid--item-excerpt--name')
let cards = document.getElementsByClassName('profile-grid--item')

searchbar.addEventListener('keyup', () => {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase()
  for (i = 0; i < names.length; i++) {
    if (!names[i].innerHTML.toLowerCase().includes(input)) {
      cards[i].classList.add('hidden')
    } else {
      cards[i].classList.remove('hidden')
    }
  }
})