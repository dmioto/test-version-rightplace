import { motion, useCycle } from 'framer-motion';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Info from '../../../assets/icons/info.svg';
import Logo from '../../../assets/icons/rightplace_logo.svg';
import { navigationHeader } from '../../../mocks/navigation';
import Hamburguer from '../../atomos/Hamburguer';
import { Navigation } from '../../atomos/Navigation';
import { useDimensions } from './dimensions';
import * as S from './styles';

const Header: React.FC = () => {
  const [open, setOpen] = useCycle(false, true);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <S.ContainerHeader>
      <S.LogoImage to={'/'}>       
          <img src={Logo} alt={'logo'} />      
      </S.LogoImage>
      
      <motion.nav
        initial={false}
        animate={open ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <Hamburguer setOpen={() => setOpen()} />
        <Navigation open={open} />
      </motion.nav>

      <S.ListItems>
        {navigationHeader.map((item, index) => (
          <Link to={item.src} key={index}>
            <li>{item.item}</li>
          </Link>
        ))}
      </S.ListItems>
      <S.Login to={"/login"}>
        <img src={Info} />
        Login
      </S.Login>
    </S.ContainerHeader>
  );
};

export default Header;