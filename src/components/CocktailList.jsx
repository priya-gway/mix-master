import React from 'react'
import Wrapper from '../assets/wrapper/CocktailList'
import CocktailCard from './CocktailCard'

const CocktailList = ({drinks}) => {
    if (!drinks){
        return <h4 style={{ textAlign: 'center'}}>no matching cocktails found...</h4>
    }
    const formattedDrinks = drinks.map((item)=>{
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
    })
  return (
    <Wrapper>
        {formattedDrinks.map((item)=>{
            return <CocktailCard key={item.id} {...item} />
        })}
    </Wrapper>
  )
}

export default CocktailList