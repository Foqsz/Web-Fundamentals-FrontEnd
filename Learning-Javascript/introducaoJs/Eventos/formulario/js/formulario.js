const btnSubmit = document.getElementById("btn");
const btnChecked = document.getElementById("chkAceito");
const btnCancel = document.getElementById("btnCancelar");
const inputTitle = document.getElementById("txtTitulo");
const txtDescription = document.getElementById("txtDescricao");
const contadorCaracteres = document.getElementById("contador");
const formCadastro = document.getElementById("shopping-add");
const feedbackMessage = document.getElementById("feedbackMessage");

const maximoCaracteres = 255;

btnSubmit.disabled = true;
contadorCaracteres.textContent = `${maximoCaracteres} caracteres restantes.`;

btnChecked.addEventListener("change", () => {
    btnSubmit.disabled = !btnChecked.checked;
});

formCadastro.addEventListener("submit", (e) => {
    if (!inputTitle.value.trim() || !txtDescription.value.trim()) {
        e.preventDefault();
        showErrorMessage("Por favor, preencha todos os campos do formulário.");
        inputTitle.focus();
    }
});

function    (message) {
    feedbackMessage.textContent = message;
    feedbackMessage.classList.add("show");

    setTimeout(() => {
        feedbackMessage.textContent = "";
        feedbackMessage.classList.remove("show");
    }, 3000);
}

function checkLength() {
    const caracteres = txtDescription.value.length;
    contadorCaracteres.textContent = `${maximoCaracteres - caracteres} caracteres restantes.`;
}

txtDescription.addEventListener("input", checkLength);

btnCancel.addEventListener("click", resetForm);

function resetForm() {
    inputTitle.value = "";
    txtDescription.value = "";
    btnChecked.checked = false;
    contadorCaracteres.textContent = `${maximoCaracteres} caracteres restantes.`;
}
