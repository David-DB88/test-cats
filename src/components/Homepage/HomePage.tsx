import React, {useEffect, useState} from "react";
import StyledComponent, {StyledButton, StyledCard} from './HomePage.styled'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store";
import {GetCats} from "../../actions/CatActions/CatsAction";
import {CatType} from "../../actions/CatActions/CatsActionsType";
import Header from "../Header/Header";
import {useHistory} from "react-router";
import queryString from "query-string";

export interface ICatParams {
    params: {
        limit: number,
        page: number,
        category_ids?: string
    }
}

const HomePage: React.FC = () => {
    const history = useHistory()
    const parsedUrl:{categoryId?:string} = queryString.parse(history.location.search);
    const [catsParams, setCatsParams] = useState<ICatParams>({
        params: {
            limit: 10,
            page: 1,
            category_ids: parsedUrl.categoryId
        }
    })

    const dispatch = useDispatch()
    const cats = useSelector((state: RootState) =>state?.cats.cats)
    const loading= useSelector((state: RootState) => state.cats.loading)

    useEffect(() => {
        dispatch(GetCats(catsParams))
    },[catsParams])

    useEffect(() => {
        if(parsedUrl.categoryId && parsedUrl.categoryId !== catsParams.params.category_ids){
            setCatsParams((prevParams: ICatParams): ICatParams=>{
                return {
                    params: {
                        ...prevParams.params, category_ids: parsedUrl.categoryId
                    }
                }
            })
        }
    },[parsedUrl.categoryId])

    const showMore = () => {
            setCatsParams((prevParams: ICatParams): ICatParams=>{
                return {
                    params: {
                        ...prevParams.params, page: prevParams.params.page + 1
                    }
                }
            })
    }
  return (
      <StyledComponent>
           <Header/>
           <div className='flex-container'>
           {cats?.map((item: CatType, index)=>
                  <StyledCard key={index}>
                      <img className="image" src={`${item.url}`} alt="Avatar" />
                          <div className="container">
                              <h4><b>Cat {item.id}</b></h4>
                          </div>
                  </StyledCard>
           )}
          </div>
          {loading && '...Loading'}
          <StyledButton onClick={showMore}>Show More</StyledButton>
      </StyledComponent>
  )
}

export default HomePage