import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Category() {
    return (
        <div>
            <List>
                
            <div>
                <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
                </NavLink>
            </div>
            <div>
            <NavLink to={'/cuisine/American'}k>
                <FaHamburger />
                <h4>American</h4>
                </NavLink>
            </div>
            <div>
            <NavLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
                </NavLink>
            </div>
            <div>
            <NavLink to={'/cuisine/Italian'}>
                <GiChopsticks />
                <h4>Chinese</h4>
                </NavLink>
            </div>
            </List>
        </div>
    )
}

const List = styled.div `
display: flex;
justify-content: center;
margin 2rem 0rem
`

export default Category
