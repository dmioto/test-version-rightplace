import * as S from './styles';
import { headerFilterInfos } from './mocks';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

type FilterCharacteristicsProps = {
    setHouseDisplay: React.Dispatch<React.SetStateAction<string>>
}

const FilterCharacteristics = ({ setHouseDisplay }: FilterCharacteristicsProps) => {
    const [bestFit, setBestFit] = React.useState('Best fit');
    const [selectedRent, setSelectedRent] = React.useState('sale')

    return (
        <S.FilterCharacteristicsContainer>
            <S.FilterHeader>
                <div className="sales-rent-container">
                    <S.ButtonFilter 
                       className={selectedRent === 'sale' ? 'active' : ''} 
                       onClick={() => setSelectedRent('sale')}
                    >
                        Sale
                    </S.ButtonFilter>

                    <S.ButtonFilter 
                       className={selectedRent === 'rent' ? 'active' : ''} 
                       onClick={() => setSelectedRent('rent')}
                    >
                        Rent
                    </S.ButtonFilter>
                </div>

                {headerFilterInfos.map((filter, index) => (
                    <div key={index} className="filter-itens">
                        <button onClick={() => filter.onClick(filter.name)}>
                            <p>{filter.name}</p>
                            <span>&nbsp;All</span>                            
                            <KeyboardArrowDownIcon />                           
                        </button>
                    </div>
                ))}
                <div className="more-settings">
                    <p>More Settings</p>
                </div>
            </S.FilterHeader>

            <S.FiltersLayout>
                <S.FormControlFilter>                   
                    <p>Sort by: </p>
                    <select
                        value={bestFit}
                        onChange={event => setBestFit(event.target.value)}
                    >
                        <option value="Best fit">
                            Best fit
                        </option>
                        <option value={10}>Newest</option>
                        <option value={20}>Most Photos</option>
                        <option value={30}>Price(lo-hi)</option>
                        <option value={40}>Price(hi-lo)</option>
                        <option value={50}>Bedrooms</option>
                        <option value={60}>Bethrooms</option>
                        <option value={70}>Square Feet</option>
                    </select>
                </S.FormControlFilter>
                
                <div className="layout-filter">
                    <button onClick={() => setHouseDisplay('block')}>
                        <ViewHeadlineIcon  />
                    </button>
                    <button onClick={() => setHouseDisplay('flex')}>
                        <ViewModuleIcon  />
                    </button>
                </div>
            </S.FiltersLayout>
        </S.FilterCharacteristicsContainer>
    );
};

export default FilterCharacteristics;