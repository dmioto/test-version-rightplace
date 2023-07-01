// import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Location from '../../../assets/icons/location.svg';
import Search from '../../../assets/icons/search.svg';
import * as S from './styles';

const SelectMain = () => {
    const navigate = useNavigate()
    const menuMain = [
        {
            name: '',
            src: ''
        },
        {
            name: 'New York',
            src: '/newyourk'
        },
        {
            name: 'Los Angeles',
            src: '/losangeles'
        }
    ];

    

    return (
        <S.ContainerSelect>
            <img src={Location} alt="Location" className='location' />
            <S.SelectMain onChange={(e) => navigate(e.target.value.replace(' ', ''))}>
                {menuMain.map((item, index) => (               
                    <option className='personalizar-option' key={index}value={item.name}>
                       {item.name}
                    </option>
                ))}
            </S.SelectMain>
            <img src={Search} alt="Search" className='search'/>
        </S.ContainerSelect>
    );
};

export default SelectMain;