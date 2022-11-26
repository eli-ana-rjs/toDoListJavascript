/* Seleccionar elementos pincipales del HTMl por medio de Javascript */

const inputPrincipal = document.querySelector('.input');
const btnAgregar = document.querySelector('.btn-agregar');
const container = document.querySelector('.items-lista');

/* Crear la clase Item.  */
class Item {

    /* Constructor - Recibe como parametro una nuevaTarea, que internamenta es pasada al metodo crearDiv */
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    /* Este metodo crea el div que contiene la tarea ingresada por el usuario */
    crearDiv(nuevaTarea) {
        /* Crea el input de tipo texto, con la propiedad disable por defecto en true, y se le agrega la clase item-input para darle los estilos al input. */
        let inputItem = document.createElement('input');
        inputItem.type = 'text'
        inputItem.disable = true;
        inputItem.classList.add('item-input');
        inputItem.value = nuevaTarea;

        /* Se crea un div con la clase item, que sera el padre del inputItem creado anteriormente */
        let nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('item');

        /* Crea el boton editar, con el icono del candado cerrado (por defecto), lo cual indica que no se puede editar lo que esta en el input. Y se agrega la clase boton-editar que agrega los estilos CSS correspondientes */
        let btnEditar = document.createElement("button");
        btnEditar.innerHTML = '<i class="fa fa-lock"></i>'
        btnEditar.classList.add('boton-editar');

        /* Crea el boton remover, con el icono de un cesto de basura, lo cual indica que al hacer click sobre el mismo se elimina la tarea. Y se agrega la clase boton-remover que agrega los estilos CSS correspondientes */
        let btnRemover = document.createElement('button');
        btnRemover.innerHTML = '<i class="fa fa-trash"></i>'
        btnRemover.classList.add('boton-remover');

        /* Se inyectan dentro del div item los elementos creados anteriormente: input y los dos botones */
        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(btnEditar);
        nuevoDiv.appendChild(btnRemover);

        /* Se intecta el div que contiene la tarea agregada por el usuario al contenedor principal que teniamos en el HTML */
        container.appendChild(nuevoDiv);

        /* El boton editar que se encuentra en el input, recibe el evento 'click' y una funcion a partir de la cualdependiendo del valor de inputItem.disable podremos cambiar el icono del candado y habilitar o no la edicion de la tarea */
        btnEditar.addEventListener('click', function () {
            if (!inputItem.disabled) {
                inputItem.disabled = true;
                btnEditar.innerHTML = '<i class="fa fa-lock"></i>'
            } else {
                inputItem.disabled = false;
                btnEditar.innerHTML = '<i class="fa fa-lock-open"></i>'
            }
        })

        /* El boton remover recibe un evento 'click' y la funcion en la cual le aplicamos el metodo remove() al div que contiene una tarea de la lista. Al aplicar este metodo eliminamos un nodo del DOM por completo. */
        btnRemover.addEventListener('click', function () {
            nuevoDiv.remove();
        })
    }
}

/* Crea la funcion chequearInput, que me permite verificar si el usuario ingreso algo en el input. Si el input contiene texto o espacio, se instancia el objeto a partir de la clase Item, y por medio del constructor que toma como parametro el valor de lo que el usuario ingresa en el input principal, genera cada item de la lista de tareas  */
function chequearInput() {
    if (inputPrincipal.value) {
        new Item(inputPrincipal.value)
    }
    inputPrincipal.value = '';
}

/* El boton agregar recibe un evento 'click' y la funcion chequearInput que permite que se pueda renderizar el DOM por medio de dicha funcion */
btnAgregar.addEventListener('click', chequearInput);


