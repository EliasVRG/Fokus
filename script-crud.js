

const btnAdicionarTarefa = document.querySelector(".app__button--add-task")
const formAdicionarTarefa = document.querySelector(".app__form-add-task")
const textArea = document.querySelector(".app__form-textarea")

const tarefas = []

btnAdicionarTarefa.addEventListener('click', () =>{
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    const descricaoTarefa = textArea.value
    const tarefa = {
        descricao: textArea.value
    }
    tarefa.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
})