import { motion } from 'framer-motion';
import * as React from 'react';
import { navigationHeader } from '../../../mocks/navigation';
import { MenuItem } from '../MenuItem';
import * as S from './styles';

export type NavigationProps = {
  open: boolean;
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation: React.FC<NavigationProps> = ({ open }) => (
  <S.NavigationContainer open={open}>
    <motion.ul variants={variants}>
      {navigationHeader.map((item, index) => (
        <MenuItem index={index} item={item.item} link={item.src} key={index} />
      ))}
    </motion.ul>
  </S.NavigationContainer>
);