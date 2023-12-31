const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show'); 
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);


        function test(e) {
            const username = document.getElementById("user-name-search").value;
            const url = `https://api.github.com/users/${username}`
        
            fetch(url)
                .then(resposta => {
                    if (!resposta.ok) {
                        throw new Error("falha ao buscar usuario")
                    }
                    return resposta.json();
                })
                .then(dados=> {
                    const nomeUser = document.getElementById('nome-usuario')
                    const loginUser = document.getElementById('login-usuario')
                    const seguidoresUser = document.getElementById('seguidores')
                    const seguindoUser = document.getElementById('seguindo')
                    const postUser = document.getElementById('post-usuario')
                    const bioUser = document.getElementById('bio-usuario')
                    const avatarUser = document.getElementById('img-user')
                    

                    //atribuindo os valores da api ao HTML
                    avatarUser.style.backgroundImage = `url(${dados.avatar_url})`
                    nomeUser.textContent = dados.name || 'Nome não encontrado'
                    loginUser.textContent =`@${dados.login}`
                    seguidoresUser.textContent = dados.followers 
                    seguindoUser.textContent = dados.following
                    postUser.textContent = dados.public_repos
                    bioUser.textContent = dados.bio || 'o usuario n possui uma bio.'
                   
                
                }) 
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Usuário não encontrado!')
                })
    }
    document.getElementById("search-button").addEventListener("click", test);

    document.getElementById("user-name-search").addEventListener("keyup",function(e){
        if (e.keyCode===13) test(e)
    })
