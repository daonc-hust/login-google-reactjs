import React, { Component } from 'react';
import { connect } from 'react-redux'
import $ from "jquery";
import { addProduct } from './actions'

class Main extends Component {
    constructor(props) {
        super(props);
        this._submit = this._submit.bind(this)
    }

    componentDidMount() {
        fetch("http://dev.edubig.vn/daonc.php")
            .then(res => res.json())
            .then(
                (result) => {
                    result.map((product) => {
                        this.props.dispatch(addProduct(product));
                    })
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    _submit() {
        let product = $('[name="product"]').val();
        if (product !== "") {
            let checkIsset = this.props.products.findIndex(p => p === product);
            if (checkIsset === -1) {
                this.props.dispatch(addProduct(product));
                $('[name="product"]').val("");
            } else {
                alert("Sản phẩm đã tồn tại")
            }
        } else {
            alert("Bạn chưa nhập thông tin")
        }
    }

    render() {
        if (this.props.isLogin) {
            return (
                <div>
                    <div>
                        <br /><span>{this.props.userInfo.name}</span><br />
                        <span>{this.props.userInfo.email}</span><br />
                        <img src={this.props.userInfo.imageUrl} alt="" />
                    </div>
                    <div>
                        <label>Product: </label>
                        <input name="product" type="text" />
                        <button onClick={this._submit}>Submit</button> <br /> <br />

                        <div>
                            <label>List Products</label>
                            <ul id="productlist">
                                {
                                    this.props.products.map((product, index) => {
                                        return (
                                            <li key={index}>{product}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

function _mapStateToPropsTop(state) {
    return {
        isLogin: state.isLogin,
        userInfo: state.userInfo,
        products: state.products
    };
}
export default connect(_mapStateToPropsTop)(Main);