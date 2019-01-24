/**
 * Created by ZhangHe on 2018/8/3.
 */
import React, {Component} from 'react'
import {render} from 'react-dom'
import  App from './App'

const renderDom = Component => {
    render(
        <Component />,
        document.getElementById('main')
    )
};
renderDom(App);