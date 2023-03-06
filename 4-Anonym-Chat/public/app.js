const socket = io()
//console.log(socket);
const send = document.getElementById('btn')


send.addEventListener('click', () => {
    socket.emit('msg', document.getElementById('msg-input').value)
    document.getElementById('msg-input').value = ''
})

socket.on('msg', (msg) => {
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    document.getElementById('ul').innerHTML += `<li>${msg}<h6 class = "date">${date} ${time}</h6></li> `
})