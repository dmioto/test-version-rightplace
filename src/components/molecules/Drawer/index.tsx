import * as React from 'react';
import * as S from './styles';
import ToogleDrawer from '../../atomos/ToogleDrawer';

type DrawerProps = {
    children: React.ReactNode
}

const DrawerFilters = ({ children }: DrawerProps) => {
    const [open, setOpen] = React.useState(true);
    return (
            <S.DrawerContainer  open={open}>                
                <S.ToogleButton open={open} onClick={() => setOpen(!open)}>
                    <ToogleDrawer open={open} setOpen={setOpen} />
                </S.ToogleButton>
                <S.DrawerWrapper>
                    {children}
                </S.DrawerWrapper>
            </S.DrawerContainer>           
    );
};

export default DrawerFilters;