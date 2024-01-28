const openPopUp = document.getElementById('open_pop_up')
const closePopUp = document.getElementById('pop_up_close')
const PopUp = document.getElementById('pop_up')

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    PopUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    PopUp.classList.remove('active');
})