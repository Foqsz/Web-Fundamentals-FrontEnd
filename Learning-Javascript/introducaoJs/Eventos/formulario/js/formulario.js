const btnSubmit = document.getElementById("btn");
const btnChecked = document.getElementById("chkAceito");
const btnCancel = document.getElementById("btnCancelar");
const inputTitle = document.getElementById("txtTitulo");
const txtDescription = document.getElementById("txtDescricao");
const contadorCaracteres = document.getElementById("contador");

txtDescription.addEventListener("input", function()
{
    const caracteres = txtDescription.value.length;
    contadorCaracteres.textContent = `${255 - caracteres} caracteres restantes.`;
});

btnSubmit.disabled = true;

btnChecked.addEventListener("change", function()
{
    btnSubmit.disabled = !btnChecked.checked;
});

btnSubmit.addEventListener("click", function()
{ 
    if(inputTitle.value === "" || txtDescription.value === "")
        alert("Por favor, preencha todos os campos do formulário.");
    else
        alert("Formulário enviado com sucesso!");
});

btnCancel.addEventListener("click", function()
{
    inputTitle.value = "";
    txtDescription.value = "";
    contadorCaracteres.textContent = "255 caracteres restantes.";
    btnChecked.checked = false;
});