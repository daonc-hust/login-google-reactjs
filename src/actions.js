export function getUserInfo(userInfo) {
    return {
        type: "GET_USER_INFO",
        userInfo
    }
}

export function changeLoginStatus(isLogin) {
    return {
        type: "LOGIN_STATUS",
        isLogin
    }
}

export function addProduct(product) {
    return {
        type: "ADD_PRODUCT",
        product
    }
}