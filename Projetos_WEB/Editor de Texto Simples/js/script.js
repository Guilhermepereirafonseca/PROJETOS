// Pegando os id's
const editor = document.getElementById('editor');
const fileInput = document.getElementById('file_input');
const btnSave = document.getElementById('save');

btnSave.addEventListener("click", () => { // aero function
    const text = editor.value; // valor digitado
    const blob = new Blob([text], { type: "text/plain"}); // tipo de arquivo
    const link = document.createElement("a"); // criando um link

    // Aero function que irá ler arquivos .txt salvos do seu computador, e mostrar na tag textarea
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            editor.value = reader.result;
        };

        reader.readAsText(file);
    });

    link.download = "arquivo_texto.txt"; // dando o nome do arquivo
    link.href = URL.createObjectURL(blob); // criando a url do objeto
    link.click(); // quando clicar em 'Salvar' o download irá começar
});