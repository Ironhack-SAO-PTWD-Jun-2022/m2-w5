import { useState } from 'react';
import { Title, NavbarContainer, SearchInput } from './styles';
import { CustomButton, PillButton } from '../Buttons';

const Navbar = () => {
  const [ search, setSearch ] = useState('');

  return (
    <NavbarContainer>
      <Title>
        Styled Components Basics
      </Title>
      <div>
        <SearchInput onChange={({target}) => setSearch(target.value)} value={search} />
        <CustomButton bgColor='red'>
          Search
        </CustomButton>
        <PillButton bgColor='brown'>
          Login
        </PillButton>
      </div>
    </NavbarContainer>
  )
}

export default Navbar;