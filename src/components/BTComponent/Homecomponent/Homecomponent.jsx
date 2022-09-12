import React, { Component } from 'react'
import CardRCC from '../../CardRCC/CardRCC'
import ContentComponent from '../ContentComponent/ContentComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import NavigationComponent from '../NavigationComponent/NavigationComponent'

export default class Homecomponent extends Component {
    render() {
        return (
            <div className='home container-fluid'>
                <h1>Homecomponent</h1>
                <HeaderComponent />

                <div className="container-fluid">

                <div className="row">
                    <NavigationComponent />
                    <ContentComponent />

                </div>
                </div>

                <FooterComponent />
            </div>
        )
    }
}
