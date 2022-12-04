function asd() {
  let ddiv = document.createElement('div')
  let wrapper = document.querySelector('.wrapper')

  wrapper.append(ddiv)

  setTimeout(() => {
      asd()
  }, 100);
}

asd()