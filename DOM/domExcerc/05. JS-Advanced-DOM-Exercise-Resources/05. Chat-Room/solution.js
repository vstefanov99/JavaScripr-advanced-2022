function solve() {
   let sendButton = document.getElementById('send')
   sendButton.addEventListener('click',send)
   let chatInput = document.getElementById('chat_input')
   //TODO...
   function send(e) {
      
      let newMessage = document.createElement('div')
      newMessage.className = 'message my-message'
      newMessage.innerHTML = chatInput.value
      document.getElementById('chat_messages').appendChild(newMessage)

      chatInput.value = ''
   }
}


