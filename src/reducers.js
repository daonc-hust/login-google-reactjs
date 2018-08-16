let initialState = {
    isLogin: false,
    userInfo: {
        description: "Bạn chưa đăng nhập",
        username: "undefined",
        email: "undefined",
        imageUrl: "undefined"
    },
    products: []
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_STATUS":
            return {
                ...state,
                isLogin: action.isLogin
            }
        case "GET_USER_INFO":
            return {
                ...state,
                userInfo: action.userInfo
            }

        case "ADD_PRODUCT":
            return {
                ...state,
                products: [action.product, ...state.products]
            }

        default:
            return state;
    }
}

export default login;