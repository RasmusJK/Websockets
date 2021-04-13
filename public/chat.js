'use strict';

const socket = io();

document.getElementById('join').addEventListener('click',event =>{
event.preventDefault();
const room = document.getElementById('room');
  socket.emit('join',room.value);

  const roomName = document.getElementById('roomName');
  roomName.innerHTML = room.value;
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('u');
    const inp = document.getElementById('m');
    socket.emit('chat message', username.value+": "+ inp.value);
    inp.value = '';
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.innerHTML = msg;
    document.getElementById('messages').appendChild(item);
});
