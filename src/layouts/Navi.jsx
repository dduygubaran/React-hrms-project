import React from 'react'
import { Component } from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import { Icon } from 'semantic-ui-react'
import MenuInfo from './MenuInfo'

export default function Navi() {

    return (

       <div>
           <Menu inverted color='yellow' fixed="top">
           <Container>
           
      <Menu.Item
      name='İnsan Kaynakları'
      >
        <Icon size='big' name='group' />
        HRMS
      </Menu.Item>


        <Menu.Item
          name='Profil'
          >
           <Icon name='target' />

          Profil
          </Menu.Item>

        <Menu.Menu position='right'>
         <CartSummary/>

         <Menu.Item
          name='phone'
        >
          <Icon name='call' />
          İletişim
        </Menu.Item>

          <Menu.Item>
            <Button   primary>KAYIT OL</Button>
          </Menu.Item>

          <Menu.Item>
            <Button  primary>GİRİŞ YAP</Button>  
            
            </Menu.Item>
          </Menu.Menu>

           </Container>
         
  </Menu>
        </div>
    )

}


