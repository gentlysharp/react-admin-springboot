
const authProvider = {
    login: ({ username, password }) => {
        // localStorage.setItem('username', username);
        // accept all username/password combinations
        // return Promise.resolve();

        // 서버에 요청하는 메소드 로그인을 구현한 뒤에 이곳에서 사용하면된다.
        
        console.log(username, password);
        // const request = new Request('https://mydomain.com/authenticate', {
        //     method: 'POST',
        //     body: JSON.stringify({ username, password }),
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        // });

        // return fetch(request)
        // .then(response => {
        //     if (response.status < 200 || response.status >= 300) {
        //         throw new Error(response.statusText);
        //     }
        //     return response.json();
        // })
        // .then(auth => {
        //     localStorage.setItem('auth', JSON.stringify(auth));
        // })
        // .catch(() => {
        //     throw new Error('Network error')
        // });
    },
    // Promise.resolve에서는 로그아웃이후 돌려보낼 페이지 url을 설정할 수 있다.
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve('/login');
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('auth')
        ? Promise.resolve()
        : Promise.reject({ redirectTo: '/no-access' }),
    getPermissions: () => Promise.reject('Unknown method'),
    getIdentity: () => {
        try {
            const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },
};

export default authProvider;