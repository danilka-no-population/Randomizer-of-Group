const list = document.querySelector('.list')
const btn = document.querySelector('.randBtn')
const wrapper = document.querySelector('.wrapper')

let arr = ['Taraskin', 'Makutsevich', 'Yazvinski', 'Sayenko', 'Sviridenko', 'Marsova', 'Romanovich', 'Goryachko', 'Onisimova', 'Korsunskaya', 'Prokopchuk']

function randomAll(){
    let tempArr = [...arr]; // Создаем копию исходного массива

  for (let i = tempArr.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [tempArr[i], tempArr[rand]] = [tempArr[rand], tempArr[i]]; // Меняем элементы местами
  }

  // Очищаем список перед добавлением новых элементов
  list.innerHTML = '';

  // Выводим значения на страницу
  tempArr.forEach((item, i) => {
    const listItem = document.createElement('div');
    listItem.textContent = `${i + 1}. ${item}`;
    list.appendChild(listItem);
  });

  btn.style.backgroundColor = 'red'
  btn.textContent = 'Queue is completed'
  btn.style.color = 'white'
  btn.disabled = true
  if(btn.disabled === true){
    btn.style.backgroundColor = 'rgba(139, 79, 79, 0.744)'
    }
    const again = document.createElement('button');
    again.textContent = 'Try again'
    again.classList += 'again'
    wrapper.append(again)
    again.addEventListener('click', () => {
        location.reload()
    })
}

btn.addEventListener('click', randomAll)
