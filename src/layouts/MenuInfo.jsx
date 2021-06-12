
import React from 'react'
import {  Menu ,  Icon} from 'semantic-ui-react'

export default function MenuInfo() {
    return (
        <div>
            <Menu pointing secondary>
          <Menu.Item
            name='İş İlanları'
            >
              <Icon name='file alternate' />
             İş İlanları
             </Menu.Item>
          <Menu.Item
            name='İş Arayanlar'
           
          />
          <Menu.Item
            name='İş Verenler'
            
          />
         
        </Menu>
        </div>
    )
}
