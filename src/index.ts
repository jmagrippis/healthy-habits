const count = localStorage.getItem('count')

document.getElementById('root').innerHTML = `Proof it works - count: ${count}`

localStorage.setItem('count', `${parseInt(count) + 1}`)
