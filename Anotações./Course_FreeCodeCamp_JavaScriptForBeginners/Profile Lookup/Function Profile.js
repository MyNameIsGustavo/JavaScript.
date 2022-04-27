//Function Profile - Example.

var contacts = [
    {
        "Nome": "Gustavo",
        "Sobrenome": "Rocha",
        "Numero": "15 99818-4850",
        "Hobby": ["Futebol", "Programação", "Lanche"]
    },
    {
        "Nome": "Gabriel",
        "Sobrenome": "Silva",
        "Numero": "15 1234-5789",
        "Hobby": ["Tênis", "Ciência", "Pizza"]
    },
    {
        "Nome": "João",
        "Sobrenome": "Ferreira",
        "Numero": "15 98765-4321",
        "Hobby": ["Vôlei", "História", "Pão de queijo"]
    }
];
    function LookupProfile(Nome, prop){
        for (var i = 0; i < contacts.length; i++){
            if (contacts[i].Nome === Nome){
                return contacts[i] [prop] || "Erro.";
            }
        }
        return "Erro."
}
var data = LookupProfile("Gustavo", "Sobrenome");
console.log(data);