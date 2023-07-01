import { Link } from 'react-router-dom';
import * as S from './styles';

const HeaderSettings = () => {
    const ulHeaderSettings = [
        {
            listName: 'My Locations',
            path: '/locations'
        },
        {
            listName: 'Properties',
            path: '/locations'
        },
        {
            listName: 'Settings',
            path: '/locations'
        }
    ];
    return (
        <S.ContainerHeaderSettings>
            <ul>
                {ulHeaderSettings.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <li>{item.listName}</li>
                    </Link>
                ))}
            </ul>
        </S.ContainerHeaderSettings>
    );
};

export default HeaderSettings;