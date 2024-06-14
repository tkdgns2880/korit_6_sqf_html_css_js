const names = [ "정상훈", "정상일", "정상이" ];
console.log(names.join());


let userList = [];
let emptyUser = {
    username : "",
    password : ""
};
let user = {
    ...emptyUser
} // emptyUser 초기화용
function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index) => {
        return
        <tr>
            <td>${index + 1}</td>
            <td>${username}</td>
            <td>${password}</td>
        </tr>
        ;
    }).join("");
}
function handleUserInputKeyDown(e) {
    user = { // user 의 자료가 겹칠일이 없어진다
        ...user,
        [e.target.name] : e.target.value
    }
    if(e.keyCode === 13) {
        const passwordInput = document.querySelector(".password-input");
        const usernameInput = document.querySelector(".username-input");
        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [...userList, {...user} ]; // 유저의 값만 옮겨서 새로운 유저를 추가
            renderTable();
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;
            usernameInput.focus();
        }
    }
    console.log(e.target.name);
}